export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              نرحب بكم في عيادتنا
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              صحتك
              <span className="text-emerald-500"> أولاً</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نقدم لكم أفضل خدمات الرعاية الصحية الأولية مع فريق طبي متخصص وذو خبرة. احجز موعدك الآن واحصل على رعاية صحية متكاملة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/register" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                احجز موعدك الآن
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-gray-300">
                تعرف على خدماتنا
              </a>
            </div>
          </div>
        </div>
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">+5000</div>
              <div className="text-sm text-gray-500">مريض سعيد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">+15</div>
              <div className="text-sm text-gray-500">سنة خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">+20</div>
              <div className="text-sm text-gray-500">خدمة طبية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-500">نسبة الرضا</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدماتنا</h2>
            <p className="text-gray-500 max-w-xl mx-auto">نقدم مجموعة متكاملة من الخدمات الطبية لتلبية احتياجاتكم الصحية</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🩺', title: 'الفحص الدوري', desc: 'فحوصات شاملة للكشف المبكر عن الأمراض', color: 'bg-emerald-50' },
              { icon: '💉', title: 'التطعيمات', desc: 'جميع أنواع التطعيمات للبالغين والأطفال', color: 'bg-blue-50' },
              { icon: '💊', title: 'العلاج المزمن', desc: 'متابعة وعلاج الأمراض المزمنة', color: 'bg-purple-50' },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">احجز موعدك بسهولة</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">يمكنك حجز موعدك إلكترونياً في أي وقت ومن أي مكان</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100">
              سجل الآن
            </a>
            <a href="/login" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-full border border-gray-700 hover:border-gray-600">
              تسجيل الدخول
            </a>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">أحدث المقالات</h2>
              <p className="text-gray-500">نصائح طبية من فريقنا المتخصص</p>
            </div>
            <a href="/articles" className="hidden md:flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              عرض الكل
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'أهمية الفحص الدوري', date: '15 يناير 2024', color: 'bg-emerald-50', icon: '📋' },
              { title: 'نصائح للتغذية الصحية', date: '10 يناير 2024', color: 'bg-orange-50', icon: '🥗' },
              { title: 'أهمية النوم الكافي', date: '5 يناير 2024', color: 'bg-indigo-50', icon: '😴' },
            ].map((article, i) => (
              <a key={i} href="/articles" className="group">
                <div className={`${article.color} rounded-2xl h-48 flex items-center justify-center mb-4`}>
                  <span className="text-4xl">{article.icon}</span>
                </div>
                <div className="text-xs text-gray-400 mb-2">{article.date}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">{article.title}</h3>
                <span className="text-sm text-emerald-600 font-medium">اقرأ المزيد ←</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ماذا يقول مرضانا</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'أحمد محمد', letter: 'أ', text: 'خدمة ممتازة وفريق طبي محترف. الدكتور كان متعاوناً جداً.' },
              { name: 'فاطمة علي', letter: 'ف', text: 'أفضل عيادة زرتها. المواعيد كانت دقيقة والخدمة سريعة.' },
              { name: 'محمد خالد', letter: 'م', text: 'الدكتور شرح حالتي بشكل احترافي. شكراً لخدمتكم الممتازة.' },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-8">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold text-sm">{review.letter}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{review.name}</div>
                    <div className="text-xs text-gray-400">مريض</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}