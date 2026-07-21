# 🚀 دليل نشر الموقع خطوة بخطوة

## الطريقة الأسهل: Vercel + Neon (مجاني)

### الخطوة 1: إنشاء قاعدة بيانات مجانية على Neon

1. **افتح موقع Neon:** https://neon.tech
2. **اضغط "Sign Up"** (التسجيل مجاني)
3. **سجل بحسابك Google أو GitHub**
4. **بعد الدخول:**
   - اضغط على **"New Project"**
   - اختر اسم مثل: `clinic-db`
   - اختر المنطقة: **EU (Frankfurt)**
   - اضغط **"Create Project"**
5. **انسخ رابط قاعدة البيانات:**
   - ستجد رابط مثل: `postgresql://username:password@ep-xxx.aws.neon.tech/neondb?sslmode=require`
   - انسخه واحفظه في مكان آمن (ستحتاجه لاحقاً)

---

### الخطوة 2: تفعيل قاعدة البيانات

1. **افتح صفحة Neon Dashboard**
2. **اضغط على "SQL Editor"** (على اليسار)
3. **الصق هذا الكود واضغط "Run":**

```sql
-- إنشاء جدول المستخدمين
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  role VARCHAR(20) NOT NULL DEFAULT 'patient',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- إنشاء جدول المرضى
CREATE TABLE IF NOT EXISTS patients (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  date_of_birth TIMESTAMP,
  gender VARCHAR(10),
  address TEXT,
  medical_history TEXT,
  allergies TEXT,
  medications TEXT,
  emergency_contact VARCHAR(100),
  emergency_phone VARCHAR(20)
);

-- إنشاء جدول الأطباء
CREATE TABLE IF NOT EXISTS doctors (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  specialization VARCHAR(100),
  license_number VARCHAR(50),
  bio TEXT,
  consultation_fee INTEGER,
  available_hours JSONB
);

-- إنشاء جدول المواعيد
CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) NOT NULL,
  doctor_id INTEGER REFERENCES doctors(id) NOT NULL,
  appointment_date TIMESTAMP NOT NULL,
  start_time VARCHAR(10) NOT NULL,
  end_time VARCHAR(10) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  reason TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- إنشاء جدول السجلات الطبية
CREATE TABLE IF NOT EXISTS medical_records (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) NOT NULL,
  doctor_id INTEGER REFERENCES doctors(id),
  appointment_id INTEGER REFERENCES appointments(id),
  diagnosis TEXT,
  treatment TEXT,
  prescription TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- إنشاء جدول المقالات
CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  author_id INTEGER REFERENCES users(id) NOT NULL,
  featured_image VARCHAR(500),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- إنشاء جدول الأخبار
CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author_id INTEGER REFERENCES users(id) NOT NULL,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- إنشاء جدول رسائل الاتصال
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

4. **تأكد من ظهور رسالة "Success"**

---

### الخطوة 3: نشر الموقع على Vercel

1. **افتح موقع Vercel:** https://vercel.com
2. **اضغط "Sign Up"** (التسجيل مجاني)
3. **سجل بحساب GitHub** (نفس الحساب اللي عندك)
4. **بعد الدخول:**
   - اضغط **"Add New"** → **"Project"**
   - ابحث عن: `general-practitioner-website-development`
   - اضغط **"Import"**
5. **configure المشروع:**
   - **Framework Preset:** Next.js (سيكتشف تلقائياً)
   - **Root Directory:** `.` (اتركه فارغ)
   - **Build and Output Settings:** اتركها كما هي
6. **إضافة متغيرات البيئة (مهم جداً!):**
   - اضغط على **"Environment Variables"**
   - أضف هذا المتغير:
     - **Name:** `DATABASE_URL`
     - **Value:** انسخ الرابط اللي حصلت عليه من Neon (الخطوة 1)
   - أضف هذا المتغير:
     - **Name:** `NEXTAUTH_SECRET`
     - **Value:** أي كلمة سر طويلة مثل: `my-super-secret-key-12345`
   - أضف هذا المتغير:
     - **Name:** `NEXTAUTH_URL`
     - **Value:** `https://你的موقع.vercel.app` (سيتم إعطاؤك الرابط بعد النشر)
7. **اضغط "Deploy"**
8. **انتظر几分钟 حتى يكتمل البناء**
9. **ستحصل على رابط موقعك!**

---

### الخطوة 4: إضافة بيانات تجريبية (اختياري)

بعد نشر الموقع، يمكنك إضافة بيانات تجريبية عبر SQL Editor في Neon:

```sql
-- إضافة طبيب تجريبي
INSERT INTO users (email, password_hash, first_name, last_name, phone, role)
VALUES ('doctor@example.com', '$2a$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012', 'أحمد', 'محمد', '0600000000', 'doctor');

-- إضافة مريض تجريبي
INSERT INTO users (email, password_hash, first_name, last_name, phone, role)
VALUES ('patient@example.com', '$2a$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012', 'سارة', 'علي', '0600000001', 'patient');

-- إضافة مقال تجريبي
INSERT INTO articles (title, slug, content, excerpt, author_id, published, published_at)
VALUES (
  'أهمية الفحص الدوري',
  'importance-of-checkup',
  'يعتبر الفحص الدوري من أهم الإجراءات الوقائية...',
  'لماذا يعتبر الفحص الدوري ضرورياً للحفاظ على صحتك؟',
  1,
  true,
  NOW()
);
```

---

## 🎉 تهانينا! موقعك جاهز!

**للدخول للموقع:**
- افتح الرابط اللي حصلت عليه من Vercel
- مثال: `https://general-practitioner-website.vercel.app`

**لوحة التحكم:**
- Vercel Dashboard: https://vercel.com/dashboard
- Neon Dashboard: https://console.neon.tech

---

## ❓ مشاكل شائعة

### المشكلة: "Build failed"
**الحل:** تأكد من أنك أضفت `DATABASE_URL` بشكل صحيح في Vercel.

### المشكلة: "Database connection error"
**الحل:** تأكد من أن رابط Neon صحيح وأنك نسخته كامل.

### المشكلة: الصفحة لا تعمل
**الحل:** انتظر 2-3 دقائق بعد النشر، ثم افتح الرابط في نافذة خاصة (Incognito).

---

## 📞 مساعدة إضافية

إذا واجهت أي مشكلة، أرسل لي رسالة وسأساعدك فوراً!