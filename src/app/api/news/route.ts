import { NextResponse } from 'next/server';
import { db } from '@/db';
import { news } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const allNews = await db.select().from(news).where(eq(news.published, true));
    return NextResponse.json(allNews);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في جلب الأخبار' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, content, excerpt, authorId } = await request.json();

    // Create news
    const newNews = await db.insert(news).values({
      title,
      content,
      excerpt,
      authorId,
      published: false,
    }).returning();

    return NextResponse.json(
      { message: 'تم إنشاء الخبر بنجاح', news: newNews[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إنشاء الخبر' },
      { status: 500 }
    );
  }
}