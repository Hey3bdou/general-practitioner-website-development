export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">خدماتنا الطبية</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الطبية لتلبية جميع احتياجاتكم الصحية
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 text-3xl">🩺</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الفحص الطبي الشامل</h3>
              <p className="text-gray-600 mb-6">
                فحص طبي شامل يتضمن قياس ضغط الدم، مستوى السكر، الكوليسترول، ووظائف الكبد والكلى.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  فحص الدم الكامل
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  تحليل السكر والكوليسترول
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  فحص وظائف الكبد والكلى
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  تخطيط القلب
                </li>
              </ul>
              <div className="text-blue-600 font-bold text-lg">ابتداءً من 200 درهم</div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">💉</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">التطعيمات</h3>
              <p className="text-gray-600 mb-6">
                جميع أنواع التطعيمات الوقائية للبالغين والأطفال وفقاً للجدول الزمني المعتمد.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  تطعيمات الأطفال
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  تطعيمات الإنفلونزا الموسمية
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  تطعيمات السفر
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  تطعيمات الحجاج والمعتمرين
                </li>
              </ul>
              <div className="text-green-600 font-bold text-lg">ابتداءً من 50 درهم</div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-600 text-3xl">💊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">علاج الأمراض المزمنة</h3>
              <p className="text-gray-600 mb-6">
                متابعة وعلاج الأمراض المزمنة مع وضع خطط علاجية مخصصة لكل مريض.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  متابعة السكري
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  علاج ارتفاع ضغط الدم
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  أمراض القلب
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  أمراض التنفس المزمنة
                </li>
              </ul>
              <div className="text-purple-600 font-bold text-lg">ابتداءً من 150 درهم</div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-orange-600 text-3xl">👶</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">طب الأطفال</h3>
              <p className="text-gray-600 mb-6">
                رعاية صحية شاملة للأطفال من حديثي الولادة حتى المراهقين.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  الفحص الدوري للأطفال
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  متابعة النمو والتطور
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  علاج الأمراض الشائعة
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  النصائح التغذوية
                </li>
              </ul>
              <div className="text-orange-600 font-bold text-lg">ابتداءً من 100 درهم</div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-red-600 text-3xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">رعاية القلب والأوعية الدموية</h3>
              <p className="text-gray-600 mb-6">
                فحص ومتابعة صحة القلب والأوعية الدموية والوقاية من أمراض القلب.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  تخطيط القلب
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  فحص الكوليسترول
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  تقييم مخاطر القلب
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  نمط الحياة الصحي
                </li>
              </ul>
              <div className="text-red-600 font-bold text-lg">ابتداءً من 180 درهم</div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الصحة النفسية</h3>
              <p className="text-gray-600 mb-6">
                دعم الصحة النفسية وعلاج القلق والاكتئاب واضطرابات النوم.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  علاج القلق والاكتئاب
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  اضطرابات النوم
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  إدارة التوتر
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  الدعم النفسي
                </li>
              </ul>
              <div className="text-teal-600 font-bold text-lg">ابتداءً من 120 درهم</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">لماذا تختارنا؟</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              نحن ملتزمون بتقديم أفضل رعاية صحية لمرضانا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">أطباء متخصصون</h3>
              <p className="text-blue-100">فريق طبي ذو خبرة وكفاءة عالية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">مواعيد مرنة</h3>
              <p className="text-blue-100">نقدم مواعيد تناسب جميع المرضى</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">أسعار مناسبة</h3>
              <p className="text-blue-100">خدمات طبية بأسعار في المتناول</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">موقع مميز</h3>
              <p className="text-blue-100">موقع يسهل الوصول إليه</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">احجز موعدك الآن</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            لا تتردد في التواصل معنا لحجز موعد أو الاستفسار عن خدماتنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold">
              سجل الآن
            </a>
            <a href="/contact" className="px-8 py-4 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors text-lg font-semibold">
              اتصل بنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}