export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">اتصل بنا</h1>
          <p className="text-gray-500 max-w-xl mx-auto">نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو لحجز موعد</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="أدخل اسمك" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="أدخل بريدك" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="أدخل رقم هاتفك" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الموضوع</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="موضوع الرسالة" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="اكتب رسالتك"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800">
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
                <div className="space-y-6">
                  {[
                    { icon: '📍', title: 'العنوان', value: '[عنوان العيادة]' },
                    { icon: '📞', title: 'الهاتف', value: '[رقم الهاتف]' },
                    { icon: '✉️', title: 'البريد الإلكتروني', value: '[البريد الإلكتروني]' },
                    { icon: '⏰', title: 'ساعات العمل', value: 'السبت - الخميس: 9ص - 9م' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">🗺️</span>
                  <p className="text-sm text-gray-400">خريطة الموقع</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'كيف يمكنني حجز موعد؟', a: 'يمكنك حجز موعد من خلال التسجيل في الموقع ثم اختيار الوقت المناسب.' },
              { q: 'ما هي وثائق التأمين المقبولة؟', a: 'نقبل جميع أنواع التأمين الصحي. يرجى إحضار بطاقة التأمين عند زيارتك.' },
              { q: 'هل يمكنني إلغاء الموعد؟', a: 'نعم، يمكنك إلغاء الموعد قبل 24 ساعة من الموعد المحدد.' },
              { q: 'ما هي طرق الدفع المقبولة؟', a: 'نقبل الدفع النقدي، البطاقات الائتمانية، والتحويل البنكي.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}