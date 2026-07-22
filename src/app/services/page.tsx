export default function Services() {
  const services = [
    { icon: '🩺', title: 'الفحص الطبي الشامل', desc: 'فحص طبي شامل يتضمن قياس ضغط الدم، مستوى السكر، الكوليسترول، ووظائف الكبد والكلى.', price: '200', color: 'bg-emerald-50', features: ['فحص الدم الكامل', 'تحليل السكر والكوليسترول', 'فحص وظائف الكبد والكلى', 'تخطيط القلب'] },
    { icon: '💉', title: 'التطعيمات', desc: 'جميع أنواع التطعيمات الوقائية للبالغين والأطفال وفقاً للجدول الزمني المعتمد.', price: '50', color: 'bg-blue-50', features: ['تطعيمات الأطفال', 'تطعيمات الإنفلونزا', 'تطعيمات السفر', 'تطعيمات الحجاج'] },
    { icon: '💊', title: 'علاج الأمراض المزمنة', desc: 'متابعة وعلاج الأمراض المزمنة مع وضع خطط علاجية مخصصة لكل مريض.', price: '150', color: 'bg-purple-50', features: ['متابعة السكري', 'علاج ضغط الدم', 'أمراض القلب', 'أمراض التنفس'] },
    { icon: '👶', title: 'طب الأطفال', desc: 'رعاية صحية شاملة للأطفال من حديثي الولادة حتى المراهقين.', price: '100', color: 'bg-orange-50', features: ['الفحص الدوري', 'متابعة النمو', 'علاج الأمراض', 'النصائح التغذوية'] },
    { icon: '❤️', title: 'رعاية القلب', desc: 'فحص ومتابعة صحة القلب والأوعية الدموية والوقاية من أمراض القلب.', price: '180', color: 'bg-red-50', features: ['تخطيط القلب', 'فحص الكوليسترول', 'تقييم المخاطر', 'نمط الحياة الصحي'] },
    { icon: '🧠', title: 'الصحة النفسية', desc: 'دعم الصحة النفسية وعلاج القلق والاكتئاب واضطرابات النوم.', price: '120', color: 'bg-indigo-50', features: ['علاج القلق', 'اضطرابات النوم', 'إدارة التوتر', 'الدعم النفسي'] },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">خدماتنا الطبية</h1>
          <p className="text-gray-500 max-w-xl mx-auto">نقدم مجموعة شاملة من الخدمات الطبية لتلبية جميع احتياجاتكم الصحية</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-2xl font-bold text-gray-900">{service.price} <span className="text-sm font-normal text-gray-500">درهم</span></span>
                  <a href="/register" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800">
                    احجز الآن
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">لماذا تختارنا؟</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '👨‍⚕️', title: 'أطباء متخصصون', desc: 'فريق طبي ذو خبرة عالية' },
              { icon: '⏰', title: 'مواعيد مرنة', desc: 'تناسب جميع المرضى' },
              { icon: '💰', title: 'أسعار مناسبة', desc: 'خدمات في المتناول' },
              { icon: '🏥', title: 'موقع مميز', desc: 'سهل الوصول' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}