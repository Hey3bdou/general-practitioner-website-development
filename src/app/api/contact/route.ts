import { NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Create contact submission
    const newSubmission = await db.insert(contactSubmissions).values({
      name,
      email,
      phone,
      subject,
      message,
    }).returning();

    return NextResponse.json(
      { message: 'تم إرسال رسالتك بنجاح، سنتواصل معك قريباً', submission: newSubmission[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إرسال الرسالة' },
      { status: 500 }
    );
  }
}