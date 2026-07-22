export default function Articles() {
  const articles = [
    { title: 'أهمية الفحص الدوري للحفاظ على صحتك', date: '15 يناير 2024', category: 'صحة عامة', categoryColor: 'bg-emerald-100 text-emerald-700', color: 'bg-emerald-50', icon: '📋', author: 'د. أحمد' },
    { title: '10 نصائح للتغذية الصحية', date: '10 يناير 2024', category: 'تغذية', categoryColor: 'bg-orange-100 text-orange-700', color: 'bg-orange-50', icon: '🥗', author: 'د. سارة' },
    { title: 'أهمية النوم الكافي لصحتك', date: '5 يناير 2024', category: 'صحة عامة', categoryColor: 'bg-emerald-100 text-emerald-700', color: 'bg-indigo-50', icon: '😴', author: 'د. محمد' },
    { title: 'تمارين منزلية لتحسين اللياقة', date: '1 يناير 2024', category: 'لياقة', categoryColor: 'bg-blue-100 text-blue-700', color: 'bg-blue-50', icon: '🏃', author: 'د. علي' },
    { title: 'كيف تحافظ على صحة قلبك', date: '28 ديسمبر 2023', category: 'صحة القلب', categoryColor: 'bg-red-100 text-red-700', color: 'bg-red-50', icon: '❤️', author: 'د. أحمد' },
    { title: 'إدارة التوتر والقلق', date: '25 ديسمبر 2023', category: 'صحة نفسية', categoryColor: 'bg-purple-100 text-purple-700', color: 'bg-purple-50', icon: '🧠', author: 'د. فاطمة' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">المقالات الطبية</h1>
          <p className="text-gray-500 max-w-xl mx-auto">اطلع على أحدث المقالات والنصائح الطبية من فريقنا المتخصص</p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="ابحث في المقالات..." className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <select className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>جميع التصنيفات</option>
                <option>صحة عامة</option>
                <option>تغذية</option>
                <option>لياقة</option>
                <option>صحة نفسية</option>
              </select>
              <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800">بحث</button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <a key={i} href="/articles" className="group">
                <div className={`${article.color} rounded-2xl h-48 flex items-center justify-center mb-4`}>
                  <span className="text-4xl">{article.icon}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 ${article.categoryColor} rounded-full text-xs font-medium`}>{article.category}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 mb-3">{article.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 text-xs font-semibold">{article.author.charAt(2)}</span>
                    </div>
                    <span className="text-sm text-gray-500">{article.author}</span>
                  </div>
                  <span className="text-sm text-emerald-600 font-medium">اقرأ المزيد ←</span>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm hover:bg-gray-50">السابق</button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm">1</button>
              <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm hover:bg-gray-50">التالي</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}