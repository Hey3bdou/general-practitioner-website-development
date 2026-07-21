import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password, firstName, lastName, phone, action } = await request.json();

    if (action === 'register') {
      // Check if user already exists
      const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
      
      if (existingUser.length > 0) {
        return NextResponse.json(
          { error: 'البريد الإلكتروني مسجل بالفعل' },
          { status: 400 }
        );
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      // Create user
      const newUser = await db.insert(users).values({
        email,
        passwordHash,
        firstName,
        lastName,
        phone,
        role: 'patient',
      }).returning();

      return NextResponse.json(
        { message: 'تم إنشاء الحساب بنجاح', user: newUser[0] },
        { status: 201 }
      );
    }

    if (action === 'login') {
      // Find user
      const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
      
      if (user.length === 0) {
        return NextResponse.json(
          { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
          { status: 401 }
        );
      }

      // Check password
      const validPassword = await bcrypt.compare(password, user[0].passwordHash);
      
      if (!validPassword) {
        return NextResponse.json(
          { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
          { status: 401 }
        );
      }

      // In a real app, you would create a session/JWT here
      return NextResponse.json(
        { message: 'تم تسجيل الدخول بنجاح', user: { id: user[0].id, email: user[0].email, firstName: user[0].firstName, lastName: user[0].lastName } },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'إجراء غير صالح' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}