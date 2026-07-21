import { NextResponse } from 'next/server';
import { db } from '@/db';
import { articles } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const allArticles = await db.select().from(articles).where(eq(articles.published, true));
    return NextResponse.json(allArticles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في جلب المقالات' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, slug, content, excerpt, authorId, featuredImage } = await request.json();

    // Check if slug already exists
    const existingArticle = await db.select().from(articles).where(eq(articles.slug, slug)).limit(1);
    if (existingArticle.length > 0) {
      return NextResponse.json(
        { error: 'عنوان URL مستخدم بالفعل' },
        { status: 400 }
      );
    }

    // Create article
    const newArticle = await db.insert(articles).values({
      title,
      slug,
      content,
      excerpt,
      authorId,
      featuredImage,
      published: false,
    }).returning();

    return NextResponse.json(
      { message: 'تم إنشاء المقال بنجاح', article: newArticle[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إنشاء المقال' },
      { status: 500 }
    );
  }
}