export default function Appointments() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">حجز المواعيد</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            احجز موعدك بسهولة واختر الوقت المناسب لك
          </p>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">اختر التاريخ</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <span className="text-gray-600">→</span>
                    </button>
                    <h3 className="text-lg font-semibold text-gray-800">يناير 2024</h3>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <span className="text-gray-600">←</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {/* Day Headers */}
                    <div className="text-center text-gray-500 font-semibold py-2">السبت</div>
                    <div className="text-center text-gray-500 font-semibold py-2">الأحد</div>
                    <div className="text-center text-gray-500 font-semibold py-2">الإثنين</div>
                    <div className="text-center text-gray-500 font-semibold py-2">الثلاثاء</div>
                    <div className="text-center text-gray-500 font-semibold py-2">الأربعاء</div>
                    <div className="text-center text-gray-500 font-semibold py-2">الخميس</div>
                    <div className="text-center text-gray-500 font-semibold py-2">الجمعة</div>

                    {/* Days */}
                    {[...Array(31)].map((_, i) => (
                      <button
                        key={i + 1}
                        className={`p-3 rounded-lg text-center ${
                          i + 1 === 15
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-blue-50 text-gray-700'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div className="bg-white rounded-xl p-8 shadow-md mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">اختر الوقت</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'].map(
                    (time) => (
                      <button
                        key={time}
                        className="px-4 py-3 border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-500 transition-colors"
                      >
                        {time}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Appointment Summary */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-md sticky top-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">ملخص الموعد</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">التاريخ:</span>
                    <span className="font-semibold">15 يناير 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الوقت:</span>
                    <span className="font-semibold">10:00 صباحاً</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الخدمة:</span>
                    <span className="font-semibold">فحص عام</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الطبيب:</span>
                    <span className="font-semibold">د. أحمد محمد</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">السعر:</span>
                      <span className="font-bold text-blue-600">200 درهم</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">
                    سبب الزيارة
                  </label>
                  <textarea
                    id="reason"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="اكتب سبب زيارتك..."
                  ></textarea>
                </div>

                <button className="w-full mt-6 px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold">
                  تأكيد الحجز
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  يمكنك إلغاء الموعد قبل 24 ساعة من الموعد المحدد
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Appointments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">مواعيدي</h2>
          <div className="space-y-4">
            {/* Appointment 1 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center ml-4">
                    <span className="text-blue-600 text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">د. أحمد محمد</h3>
                    <p className="text-gray-600">فحص عام</p>
                    <p className="text-gray-500 text-sm">15 يناير 2024 - 10:00 صباحاً</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">
                    مؤكد
                  </span>
                  <button className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors">
                    إلغاء
                  </button>
                </div>
              </div>
            </div>

            {/* Appointment 2 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center ml-4">
                    <span className="text-green-600 text-2xl">💉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">د. سارة علي</h3>
                    <p className="text-gray-600">تطعيم الإنفلونزا</p>
                    <p className="text-gray-500 text-sm">20 يناير 2024 - 2:00 عصراً</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                    في الانتظار
                  </span>
                  <button className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors">
                    إلغاء
                  </button>
                </div>
              </div>
            </div>

            {/* Appointment 3 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center ml-4">
                    <span className="text-purple-600 text-2xl">💊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">د. محمد خالد</h3>
                    <p className="text-gray-600">متابعة السكري</p>
                    <p className="text-gray-500 text-sm">25 يناير 2024 - 4:00 عصراً</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
                    مكتمل
                  </span>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
                    التفاصيل
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}