import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'عيادة الدكتور - طبيب عام',
  description: 'خدمات الرعاية الصحية الأولية بأعلى معايير الجودة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white text-gray-900">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
          <nav className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">عيادتي</span>
              </a>

              {/* Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <a href="/" className="text-sm text-gray-600 hover:text-gray-900">الرئيسية</a>
                <a href="/services" className="text-sm text-gray-600 hover:text-gray-900">خدماتنا</a>
                <a href="/articles" className="text-sm text-gray-600 hover:text-gray-900">مقالات</a>
                <a href="/news" className="text-sm text-gray-600 hover:text-gray-900">أخبار</a>
                <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">اتصل بنا</a>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <a href="/login" className="text-sm text-gray-600 hover:text-gray-900">
                  تسجيل الدخول
                </a>
                <a href="/register" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800">
                  حجز موعد
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">عيادتي</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  نقدم خدمات الرعاية الصحية الأولية بأعلى معايير الجودة.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">روابط سريعة</h4>
                <ul className="space-y-3">
                  <li><a href="/services" className="text-sm text-gray-500 hover:text-gray-900">خدماتنا</a></li>
                  <li><a href="/articles" className="text-sm text-gray-500 hover:text-gray-900">مقالات</a></li>
                  <li><a href="/news" className="text-sm text-gray-500 hover:text-gray-900">أخبار</a></li>
                  <li><a href="/contact" className="text-sm text-gray-500 hover:text-gray-900">اتصل بنا</a></li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">ساعات العمل</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li>السبت - الخميس: 9ص - 9م</li>
                  <li>الجمعة: 4م - 9م</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">تواصل معنا</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li>📞 [رقم الهاتف]</li>
                  <li>✉️ [البريد الإلكتروني]</li>
                  <li>📍 [عنوان العيادة]</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} عيادتي. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}