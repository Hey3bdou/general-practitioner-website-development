import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'عيادة الدكتور [الاسم] - طبيب عام',
  description: 'موقع عيادة طبيب عام متخصص في تقديم خدمات الرعاية الصحية الأولية',
  keywords: ['طبيب عام', 'عيادة', 'رعاية صحية', 'مواعيد', 'مقالات طبية'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans">
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">م</span>
                </div>
                <span className="mr-3 text-xl font-bold text-gray-800">عيادة الدكتور [الاسم]</span>
              </div>
              <div className="hidden md:flex items-center space-x-8 space-x-reverse">
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">الرئيسية</a>
                <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">خدماتنا</a>
                <a href="/articles" className="text-gray-600 hover:text-blue-600 transition-colors">مقالات</a>
                <a href="/news" className="text-gray-600 hover:text-blue-600 transition-colors">أخبار</a>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">اتصل بنا</a>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <a href="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  تسجيل الدخول
                </a>
                <a href="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  حجز موعد
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">عن العيادة</h3>
                <p className="text-gray-300">
                  نقدم خدمات الرعاية الصحية الأولية بأعلى معايير الجودة والرعاية الشخصية.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>الفحص الدوري</li>
                  <li>التطعيمات</li>
                  <li>العلاج المزمن</li>
                  <li>الفحوصات المخبرية</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">ساعات العمل</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>السبت - الخميس: 9 صباحاً - 9 مساءً</li>
                  <li>الجمعة: 4 عصراً - 9 مساءً</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>العنوان: [عنوان العيادة]</li>
                  <li>الهاتف: [رقم الهاتف]</li>
                  <li>البريد: [البريد الإلكتروني]</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>© {new Date().getFullYear()} عيادة الدكتور [الاسم]. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}