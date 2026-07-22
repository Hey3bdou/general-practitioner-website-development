export default function News() {
  const news = [
    { title: 'افتتاح العيادة الجديدة', date: '20 يناير 2024', tag: 'جديد', tagColor: 'bg-emerald-100 text-emerald-700', icon: '🎉', desc: 'يسرنا الإعلان عن افتتاح فرع جديد للعيادة بتجهيزات حديثة ومتطورة.' },
    { title: 'انضمام أطباء جدد للفريق', date: '15 يناير 2024', tag: 'طاقم جديد', tagColor: 'bg-blue-100 text-blue-700', icon: '👨‍⚕️', desc: 'يسرنا الإعلان عن انضمام ثلاثة أطباء متخصصين جدد لفريقنا الطبي.' },
    { title: 'حملة توعوية عن فوائد التطعيم', date: '10 يناير 2024', tag: 'حملة', tagColor: 'bg-purple-100 text-purple-700', icon: '📢', desc: 'تنظم العيادة حملة توعوية مجانية عن فوائد التطعيم وأهميته.' },
    { title: 'خصم 20% على الفحوصات', date: '5 يناير 2024', tag: 'عرض خاص', tagColor: 'bg-orange-100 text-orange-700', icon: '🎁', desc: 'خصم بنسبة 20% على جميع الفحوصات الشاملة حتى نهاية الشهر.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">أخبار العيادة</h1>
          <p className="text-gray-500 max-w-xl mx-auto">اطلع على آخر أخبار ومستجدات العيادة</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-50 flex items-center justify-center">
                  <span className="text-5xl">{item.icon}</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 ${item.tagColor} rounded-full text-xs font-medium`}>{item.tag}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{item.desc}</p>
                  <a href="/news" className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">اشترك في النشرة البريدية</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">احصل على آخر أخبار العيادة والنصائح الطبية مباشرة في بريدك</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input type="email" placeholder="أدخل بريدك الإلكتروني" className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <button className="px-6 py-3 bg-emerald-500 text-white text-sm font-medium rounded-xl hover:bg-emerald-600">اشترك</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}