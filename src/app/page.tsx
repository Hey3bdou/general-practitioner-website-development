export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                صحتك أولاً
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                نقدم لكم أفضل خدمات الرعاية الصحية الأولية مع فريق طبي متخصص وذو خبرة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/register" className="px-8 py-4 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold">
                  احجز موعدك الآن
                </a>
                <a href="/services" className="px-8 py-4 bg-white text-blue-600 text-center rounded-md hover:bg-gray-50 transition-colors text-lg font-semibold border border-blue-600">
                  تعرف على خدماتنا
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="w-full h-80 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl">🩺</span>
                    </div>
                    <p className="text-blue-600 font-semibold">صورة العيادة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خدماتنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات الطبية لتلبية احتياجاتكم الصحية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">الفحص الدوري</h3>
              <p className="text-gray-600">
                فحوصات شاملة للكشف المبكر عن الأمراض والحفاظ على صحتك.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-2xl">💉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">التطعيمات</h3>
              <p className="text-gray-600">
                جميع أنواع التطعيمات للبالغين والأطفال وفقاً للجدول الزمني المعتمد.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-600 text-2xl">🩺</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">العلاج المزمن</h3>
              <p className="text-gray-600">
                متابعة وعلاج الأمراض المزمنة مثل السكري وضغط الدم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">احجز موعدك بسهولة</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            يمكنك حجز موعدك إلكترونياً في أي وقت ومن أي مكان
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold">
              سجل الآن
            </a>
            <a href="/login" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold">
              تسجيل الدخول
            </a>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">أحدث المقالات</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اطلع على أحدث المقالات والنصائح الطبية من فريقنا المتخصص
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-4xl">📰</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">15 يناير 2024</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">أهمية الفحص الدوري</h3>
                <p className="text-gray-600 mb-4">
                  لماذا يعتبر الفحص الدوري ضرورياً للحفاظ على صحتك؟
                </p>
                <a href="/articles/1" className="text-blue-600 font-semibold hover:text-blue-700">
                  اقرأ المزيد ←
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-4xl">🥗</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-green-600 mb-2">10 يناير 2024</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">نصائح للتغذية الصحية</h3>
                <p className="text-gray-600 mb-4">
                  أهم 10 نصائح للحصول على نظام غذائي صحي ومتوازن.
                </p>
                <a href="/articles/2" className="text-green-600 font-semibold hover:text-green-700">
                  اقرأ المزيد ←
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-4xl">😴</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">5 يناير 2024</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">أهمية النوم الكافي</h3>
                <p className="text-gray-600 mb-4">
                  كيف يؤثر النوم على صحتك العامة؟ وما هي أفضل العادات للنوم الصحي؟
                </p>
                <a href="/articles/3" className="text-purple-600 font-semibold hover:text-purple-700">
                  اقرأ المزيد ←
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/articles" className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold">
              جميع المقالات
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ماذا يقول مرضانا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              آراء بعض من مرضانا الكرام
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">أ</span>
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-800">أحمد محمد</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                خدمة ممتازة وفريق طبي محترف. الدكتور كان متعاوناً جداً واستمع ب耐心 إلى جميع مخاوفي.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">ف</span>
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-800">فاطمة علي</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                أفضل عيادة زرتها. المواعيد كانت دقيقة والخدمة سريعة. أنصح الجميع بزيارتها.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">م</span>
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-800">محمد خالد</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                الدكتور شرح حالتي بشكل احترافي وأجاب على جميع أسئلتي. شكراً لخدمتكم الممتازة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}