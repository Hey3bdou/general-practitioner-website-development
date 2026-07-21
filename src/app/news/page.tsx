export default function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">أخبار العيادة</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            اطلع على آخر أخبار ومستجدات العيادة
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News 1 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-64 bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-5xl">🎉</span>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                    جديد
                  </span>
                  <span className="text-gray-500">20 يناير 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">افتتاح العيادة الجديدة</h3>
                <p className="text-gray-600 mb-6">
                  يسرنا الإعلان عن افتتاح فرع جديد للعيادة بتجهيزات حديثة ومتطورة لتقديم أفضل الخدمات الطبية لمرضانا الكرام. العيادة الجديدة تضم أحدث الأجهزة الطبية والمعامل.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">م</span>
                    </div>
                    <span className="mr-3 text-gray-700">إدارة العيادة</span>
                  </div>
                  <a href="/news/1" className="text-blue-600 font-semibold hover:text-blue-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>

            {/* News 2 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-64 bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-5xl">👨‍⚕️</span>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                    طاقم جديد
                  </span>
                  <span className="text-gray-500">15 يناير 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">انضمام أطباء جدد للفريق</h3>
                <p className="text-gray-600 mb-6">
                  يسرنا الإعلان عن انضمام ثلاثة أطباء متخصصين جدد لفريقنا الطبي. الأطباء الجدد bring خبرات واسعة في مجالات متعددة لتعزيز خدماتنا الطبية.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">م</span>
                    </div>
                    <span className="mr-3 text-gray-700">إدارة العيادة</span>
                  </div>
                  <a href="/news/2" className="text-green-600 font-semibold hover:text-green-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>

            {/* News 3 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-64 bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-5xl">📢</span>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                    حملة توعوية
                  </span>
                  <span className="text-gray-500">10 يناير 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">حملة توعوية عن فوائد التطعيم</h3>
                <p className="text-gray-600 mb-6">
                  تنظم العيادة حملة توعوية مجانية عن فوائد التطعيم وأهميته في الوقاية من الأمراض. الحملة تشمل محاضرات وتوزيع مواد توعوية.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">م</span>
                    </div>
                    <span className="mr-3 text-gray-700">إدارة العيادة</span>
                  </div>
                  <a href="/news/3" className="text-purple-600 font-semibold hover:text-purple-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>

            {/* News 4 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-64 bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 text-5xl">🎁</span>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                    عرض خاص
                  </span>
                  <span className="text-gray-500">5 يناير 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">خصم 20% على الفحوصات الشاملة</h3>
                <p className="text-gray-600 mb-6">
                  بمناسبة افتتاح الفرع الجديد، نقدم خصماً بنسبة 20% على جميع الفحوصات الشاملة حتى نهاية الشهر. لا تفوتوا هذه الفرصة!
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold">م</span>
                    </div>
                    <span className="mr-3 text-gray-700">إدارة العيادة</span>
                  </div>
                  <a href="/news/4" className="text-orange-600 font-semibold hover:text-orange-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-blue-600 rounded-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">اشترك في النشرة البريدية</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                احصل على آخر أخبار العيادة والنصائح الطبية مباشرة في بريدك الإلكتروني
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors font-semibold">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}