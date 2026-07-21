export default function Articles() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">المقالات الطبية</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            اطلع على أحدث المقالات والنصائح الطبية من فريقنا المتخصص
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="bg-white rounded-xl p-6 shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">جميع التصنيفات</option>
                  <option value="health">صحة عامة</option>
                  <option value="nutrition">تغذية</option>
                  <option value="fitness">لياقة بدنية</option>
                  <option value="mental">صحة نفسية</option>
                </select>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  بحث
                </button>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-4xl">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    صحة عامة
                  </span>
                  <span className="text-gray-500 text-sm">15 يناير 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">أهمية الفحص الدوري للحفاظ على صحتك</h3>
                <p className="text-gray-600 mb-4">
                  يعتبر الفحص الدوري من أهم الإجراءات الوقائية التي يمكن أن تتخذها للحفاظ على صحتك. في هذا المقال، نستعرض أهمية الفحص الدوري وكيف يمكن أن يساعد في الكشف المبكر عن الأمراض.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">د</span>
                    </div>
                    <span className="mr-2 text-gray-600 text-sm">د. أحمد</span>
                  </div>
                  <a href="/articles/1" className="text-blue-600 font-semibold hover:text-blue-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-4xl">🥗</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    تغذية
                  </span>
                  <span className="text-gray-500 text-sm">10 يناير 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">10 نصائح للتغذية الصحية</h3>
                <p className="text-gray-600 mb-4">
                  التغذية الصحية هي أساس الحياة الصحية. إليك أهم 10 نصائح للحصول على نظام غذائي صحي ومتوازن يساعدك على الحفاظ على وزنك ومناعتك.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">د</span>
                    </div>
                    <span className="mr-2 text-gray-600 text-sm">د. سارة</span>
                  </div>
                  <a href="/articles/2" className="text-green-600 font-semibold hover:text-green-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-4xl">😴</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    صحة عامة
                  </span>
                  <span className="text-gray-500 text-sm">5 يناير 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">أهمية النوم الكافي لصحتك</h3>
                <p className="text-gray-600 mb-4">
                  النوم الكافي ضروري للصحة الجيدة. اكتشف كيف يؤثر النوم على صحتك العامة وما هي أفضل العادات للحصول على نوم هادئ ومريح.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-sm">د</span>
                    </div>
                    <span className="mr-2 text-gray-600 text-sm">د. محمد</span>
                  </div>
                  <a href="/articles/3" className="text-purple-600 font-semibold hover:text-purple-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 text-4xl">🏃</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                    لياقة بدنية
                  </span>
                  <span className="text-gray-500 text-sm">1 يناير 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">تمارين منزلية لتحسين اللياقة</h3>
                <p className="text-gray-600 mb-4">
                  لا تحتاج إلى الذهاب إلى النادي الرياضي للحفاظ على لياقتك. إليك مجموعة من التمارين المنزلية البسيطة والفعالة.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm">د</span>
                    </div>
                    <span className="mr-2 text-gray-600 text-sm">د. علي</span>
                  </div>
                  <a href="/articles/4" className="text-orange-600 font-semibold hover:text-orange-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>

            {/* Article 5 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-4xl">❤️</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                    صحة القلب
                  </span>
                  <span className="text-gray-500 text-sm">28 ديسمبر 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">كيف تحافظ على صحة قلبك</h3>
                <p className="text-gray-600 mb-4">
                  أمراض القلب هي من أكثر الأمراض شيوعاً. اعرف كيف يمكنك الحفاظ على صحة قلبك من خلال نمط חיים صحي.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-sm">د</span>
                    </div>
                    <span className="mr-2 text-gray-600 text-sm">د. أحمد</span>
                  </div>
                  <a href="/articles/5" className="text-red-600 font-semibold hover:text-red-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>

            {/* Article 6 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-teal-100 flex items-center justify-center">
                <span className="text-teal-600 text-4xl">🧠</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">
                    صحة نفسية
                  </span>
                  <span className="text-gray-500 text-sm">25 ديسمبر 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">إدارة التوتر والقلق</h3>
                <p className="text-gray-600 mb-4">
                  التوتر والقلق يؤثران على صحتك الجسدية والنفسية. تعرف على أفضل الطرق لإدارة التوتر والحفاظ على صحتك النفسية.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-sm">د</span>
                    </div>
                    <span className="mr-2 text-gray-600 text-sm">د. فاطمة</span>
                  </div>
                  <a href="/articles/6" className="text-teal-600 font-semibold hover:text-teal-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2 space-x-reverse">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                السابق
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                التالي
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}