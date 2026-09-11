<div align="center">

# منصة أدا · ADA Platform

**منصة تعليمية رقمية عربية — واجهة حديثة بالكامل بدعم RTL، مبنية على معمارية Monorepo.**

[![Live](https://img.shields.io/badge/Live-mystore888.netlify.app-7C3AED?style=flat-square&logo=netlify&logoColor=white)](https://mystore888.netlify.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-workspaces-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#-الترخيص)

</div>

---

## نظرة عامة

**منصة أدا** هي مشروع ويب متكامل يقدّم تجربة تعليمية رقمية باللغة العربية. يجمع المستودع بين واجهة المستخدم، وخادم الـ API، والمكتبات المشتركة داخل مستودع واحد (Monorepo) تُدار حزمه عبر **pnpm workspaces**، مع أنواع TypeScript صارمة ومشتركة بين جميع الحزم.

يعتمد المشروع على أساسٍ مُحكم من ناحية **الأمان** (رؤوس HTTP وقائية، CORS مقيّد، Helmet، حدود لحجم الطلبات) و**الأداء** (تحميل خطوط مُحسَّن، قواعد تخزين مؤقت طويلة الأمد للأصول المُبصمة، حزم إنتاج مضغوطة).

🔗 **العرض الحيّ:** <https://mystore888.netlify.app>

---

## أبرز المزايا

| | |
| --- | --- |
| 🌐 **عربية أصيلة** | تصميم يدعم الاتجاه من اليمين إلى اليسار (RTL) بالكامل مع خط IBM Plex Sans Arabic. |
| ⚡ **أداء عالٍ** | حزمة JS أقل من ~66&nbsp;KB منقولة، خطوط محمّلة مسبقًا، وتخزين مؤقت غير قابل للتغيّر للأصول. |
| 🔒 **أمان افتراضي** | رؤوس CSP وX-Frame-Options وReferrer-Policy وPermissions-Policy، وقائمة أصول مسموحة للـ CORS. |
| 🧩 **معمارية معيارية** | فصل واضح بين الواجهة والخادم والمكتبات المشتركة عبر مساحات عمل pnpm. |
| 📐 **عقد API موحّد** | مواصفة OpenAPI واحدة تُشتق منها أنواع العميل والخادم. |
| 🔍 **جاهز لمحركات البحث** | وسوم Open&nbsp;Graph وTwitter Card، ورابط canonical، وملفا robots.txt وsitemap.xml. |

---

## المكدّس التقني

**الواجهة** — React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui (Radix UI) · Wouter · TanStack Query · Framer Motion

**الخادم** — Node.js · Express · Helmet · Zod · esbuild

**البيانات** — PostgreSQL · Drizzle ORM · Drizzle Kit

**الأدوات** — pnpm workspaces · TypeScript Project References · Prettier · OpenAPI

**النشر** — Netlify (واجهة ثابتة + إعادة توجيه SPA)

---

## بنية المستودع

```text
My-store/
├── artifacts/
│   ├── ada-platform/      # واجهة الموقع (React + Vite) — المنشورة على Netlify
│   ├── api-server/        # خادم الـ API (Express + TypeScript)
│   └── mockup-sandbox/    # بيئة معاينة للنماذج الأولية
├── lib/
│   ├── db/                # مخطط قاعدة البيانات (Drizzle ORM)
│   ├── api-spec/          # مواصفة OpenAPI
│   └── api-client-react/  # عميل API لـ React Query
├── scripts/               # سكربتات مساعدة للمستودع
├── netlify.toml           # إعدادات بناء ونشر Netlify
├── pnpm-workspace.yaml    # تعريف مساحات العمل وكتالوج الإصدارات
└── tsconfig.base.json     # الإعدادات المشتركة لـ TypeScript
```

---

## المتطلبات

- **Node.js** 22 أو أحدث
- **pnpm** 10 أو أحدث (المستودع يرفض npm وyarn عمدًا)

---

## التشغيل محليًا

```bash
# 1) استنساخ المستودع
git clone https://github.com/ADA888777/My-store.git
cd My-store

# 2) تثبيت الاعتماديات لكل مساحات العمل
pnpm install

# 3) تشغيل الواجهة على http://localhost:5173
pnpm --filter ada-platform dev

# 4) (اختياري) تشغيل خادم الـ API
pnpm --filter api-server dev
```

---

## الأوامر المتاحة

| الأمر | الوصف |
| --- | --- |
| `pnpm install` | تثبيت اعتماديات جميع مساحات العمل. |
| `pnpm run typecheck` | فحص الأنواع للمكتبات وجميع الحزم. |
| `pnpm run build` | فحص الأنواع ثم بناء كل الحزم للإنتاج. |
| `pnpm --filter ada-platform dev` | تشغيل خادم التطوير للواجهة. |
| `pnpm --filter api-server dev` | تشغيل خادم الـ API في وضع التطوير. |

---

## متغيرات البيئة

| المتغيّر | الحزمة | الوصف |
| --- | --- | --- |
| `PORT` | api-server | منفذ الاستماع (افتراضيًا 3000). |
| `CORS_ORIGINS` | api-server | قائمة أصول مسموح بها مفصولة بفواصل. |
| `BODY_LIMIT` | api-server | الحد الأقصى لحجم جسم الطلب (افتراضيًا 100kb). |
| `DATABASE_URL` | lib/db | سلسلة اتصال PostgreSQL. |

> ⚠️ لا تُودِع ملفات `.env` في المستودع؛ فهي مستثناة في `.gitignore`.

---

## النشر

تُنشر الواجهة تلقائيًا على **Netlify** انطلاقًا من الفرع `main`:

- **مجلد النشر:** `artifacts/ada-platform/dist`
- **إعادة التوجيه:** ملف `public/_redirects` لتوجيه مسارات الـ SPA إلى `index.html`
- **الرؤوس والتخزين المؤقت:** ملف `public/_headers`

---

## الأمان والأداء

- رؤوس أمان على مستوى الحافة: `X-Content-Type-Options`، `X-Frame-Options`، `Referrer-Policy`، `Permissions-Policy`، `Content-Security-Policy`.
- تخزين مؤقت غير قابل للتغيّر (immutable) للأصول المُبصمة، وبدون تخزين لـ `index.html`.
- `helmet` وقائمة أصول مسموحة للـ CORS وحدّ لحجم جسم الطلب على الخادم.
- تقليل عدد ملفات الخطوط مع `preload` و`font-display: swap`.
- إتاحة التكبير للمستخدم (لا يوجد `maximum-scale`) لدعم إمكانية الوصول.

---

## الترخيص

هذا المشروع مرخّص تحت رخصة **MIT**.

---

<div align="center">

صُنع بعناية لخدمة المحتوى العربي ✦

</div>
