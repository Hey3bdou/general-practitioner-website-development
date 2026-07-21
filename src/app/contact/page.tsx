export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">اتصل بنا</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو لحجز موعد
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="موضوع الرسالة"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="اكتب رسالتك هنا"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-md mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">معلومات التواصل</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center ml-4">
                      <span className="text-blue-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">العنوان</h3>
                      <p className="text-gray-600">[عنوان العيادة التفصيلي]</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center ml-4">
                      <span className="text-green-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">الهاتف</h3>
                      <p className="text-gray-600">[رقم الهاتف]</p>
                      <p className="text-gray-600">[رقم هاتف آخر]</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center ml-4">
                      <span className="text-purple-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">البريد الإلكتروني</h3>
                      <p className="text-gray-600">[البريد الإلكتروني]</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center ml-4">
                      <span className="text-orange-600 text-xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">ساعات العمل</h3>
                      <p className="text-gray-600">السبت - الخميس: 9 صباحاً - 9 مساءً</p>
                      <p className="text-gray-600">الجمعة: 4 عصراً - 9 مساءً</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">موقعنا</h2>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 text-2xl">🗺️</span>
                    </div>
                    <p className="text-gray-600">خريطة Google Maps</p>
                    <p className="text-gray-500 text-sm mt-2">سيتم إضافة الخريطة التفاعلية هنا</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              إجابات لأكثر الأسئلة شيوعاً
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">كيف يمكنني حجز موعد؟</h3>
              <p className="text-gray-600">
                يمكنك حجز موعد من خلال التسجيل في الموقع ثم اختيار الوقت المناسب من التقويم.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ما هي وثائق التأمين المقبولة؟</h3>
              <p className="text-gray-600">
                نقبل جميع أنواع التأمين الصحي. يرجى إحضار بطاقة التأمين عند زيارتك.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">هل يمكنني إلغاء أو تعديل الموعد؟</h3>
              <p className="text-gray-600">
                نعم، يمكنك إلغاء أو تعديل الموعد قبل 24 ساعة من الموعد المحدد من خلال حسابك على الموقع.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ما هي طرق الدفع المقبولة؟</h3>
              <p className="text-gray-600">
                نقبل الدفع النقدي، البطاقات الائتمانية، والتحويل البنكي.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}