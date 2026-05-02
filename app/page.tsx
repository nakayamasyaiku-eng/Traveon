"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ElementType } from "react";
import {
  Bed,
  Building2,
  Droplet,
  Mail,
  MessageCircle,
  PackageCheck,
  Phone,
  Settings2,
  ShowerHead,
  TrendingUp,
} from "lucide-react";
import Navbar, { type Language } from "../components/Navbar";

const asset = (path: string) => path;

type ProductStory = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  icon: ElementType;
  reverse?: boolean;
};

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

function ToiletIcon({ size = 24, strokeWidth = 2, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 4h10v5.5a4.5 4.5 0 0 1-4.5 4.5H10A3 3 0 0 1 7 11V4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M6 14h12l-1.2 4.6A2 2 0 0 1 14.9 20H9.1a2 2 0 0 1-1.9-1.4L6 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 7h6M10 10h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

const content = {
  en: {
    nav: {
      cta: "Get Started",
      contact: "Contact Us",
      business: "For Business",
    },
    hero: {
      title: "Clean Compact Ready",
      description: "Everyone deserves to rest freely and live comfortably.",
    },
    intro: {
      eyebrow: "OUR PRODUCT",
      productName: "Stay Kit",
      title: "Everything You Need",
      highlight: "All in One Kit",
      body: "Thoughtfully designed essentials for a clean and comfortable journey.",
    },
    productStories: [
      {
        eyebrow: "ALL-IN-ONE KIT",
        title: "Everything You Need",
        body: "A compact Traveon handover kit for shared stays, short trips, and practical guest comfort.",
        image: asset("/images/product/Pocket.webp"),
        alt: "Traveon stay kit on a hostel bed",
        icon: PackageCheck,
      },
      {
        eyebrow: "CLEAN COMFORT",
        title: "Soft travel slippers",
        body: "Clean comfort for shared showers and quick arrivals.",
        image: asset("/images/product/Slipper.webp"),
        alt: "Blue travel slippers outside a bathroom",
        icon: ShowerHead,
        reverse: true,
      },
      {
        eyebrow: "LIGHT & READY",
        title: "Compressed towel",
        body: "Sealed, portable, and ready in seconds.",
        image: asset("/images/product/CompressedTowel.webp"),
        alt: "Compressed towels beside clean white towels",
        icon: Droplet,
      },
      {
        eyebrow: "SAFE & HYGIENIC",
        title: "Toilet seat cover",
        body: "A clean barrier for shared bathrooms and peace of mind.",
        image: asset("/images/product/ToiletCover.webp"),
        alt: "Disposable toilet seat cover and box",
        icon: ToiletIcon,
        reverse: true,
      },
    ] as ProductStory[],
    spaces: {
      eyebrow: "DESIGNED FOR SHARED SPACES",
      title: "where you can use our product for?",
      items: [
        {
          title: "Hostels",
          image: asset("/images/environment/Beds.png"),
          alt: "Hostel bunk beds with privacy curtains",
          icon: Bed,
        },
        {
          title: "Shared Bathrooms",
          image: asset("/images/environment/Bathroom.png"),
          alt: "Modern shared bathroom sinks",
          icon: ShowerHead,
        },
        {
          title: "Common Areas",
          image: asset("/images/environment/Hall.png"),
          alt: "Warm hostel lounge and reception",
          icon: Building2,
        },
      ],
    },
    business: {
      eyebrow: "FOR HOSTELS & HOTELS",
      title: "A Simple Solution. Real Benefits.",
      benefits: [
        {
          title: "Start with zero cost",
          body: "No upfront investment. We provide everything.",
          icon: PackageCheck,
        },
        {
          title: "Easy to set up",
          body: "Quick placement, minimal effort on your side.",
          icon: Settings2,
        },
        {
          title: "Earn from every stay",
          body: "Generate extra income effortlessly.",
          icon: TrendingUp,
        },
      ],
      stepsTitle: "How it works",
      steps: ["Contact us", "Free product placement", "Earn from every sale"],
      cta: "Request a Free Trial",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Is there any upfront payment for hostels?",
          a: "No upfront payment is required for our business partners.",
        },
        {
          q: "How do we make money?",
          a: "You generate revenue from each kit sold at your location.",
        },
        {
          q: "What if the kits do not sell?",
          a: "Returns are allowed. We want this to be risk-free for your team.",
        },
        {
          q: "Can I buy your products in advance as an individual TO C customer?",
          a: "Yes. We currently support tourists in the Prague area with free delivery and handover seven days a week.",
        },
      ],
    },
    trust: {
      title: "Based in Prague. Built for Europe.",
      body: "We are based in Prague and building a travel essentials business for Europe.",
      logos: ["PLUS PRAGUE", "THE ROAD HOSTEL", "ONEFAM PRAGUE", "CZECH INN"],
    },
    about: {
      eyebrow: "ABOUT US",
      lines: [
        "Clean. Compact. Ready.",
        "We design simple travel hygiene kitsto enable shared, comfortable, and sustainable living.",
        "Everyone deserves to rest freely and live comfortably.",
        "Traveon delivers essential hygiene kitsfor travelers and modern accommodations.",
        "Ideal for shared bathrooms, short stays, student travel,and budget-friendly trips.",
        "Simple products.Immediate comfort.",
      ],
    },
    contact: {
      title: "Start Your Journey with Traveon",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Phone",
    },
  },
  zh: {
    nav: {
      cta: "开始使用",
      contact: "联系我们",
      business: "商务合作",
    },
    hero: {
      title: "干净 轻便 即刻可用",
      description: "人人都值得自由休息，舒适生活。",
    },
    intro: {
      eyebrow: "我们的产品",
      productName: "Stay Kit 旅居套装",
      title: "旅程所需",
      highlight: "一套齐备",
      body: "为干净、舒适的旅程准备的轻便旅行用品。",
    },
    productStories: [
      {
        eyebrow: "一套齐备",
        title: "旅程所需",
        body: "适合公共住宿、短途停留和客人入住交接的紧凑旅行卫生套装。",
        image: asset("/images/product/Pocket.webp"),
        alt: "Traveon 旅行套装放在青旅床铺上",
        icon: PackageCheck,
      },
      {
        eyebrow: "洁净舒适",
        title: "轻便旅行拖鞋",
        body: "适合公共浴室、淋浴和快速入住的洁净舒适体验。",
        image: asset("/images/product/Slipper.webp"),
        alt: "蓝色旅行拖鞋放在浴室门口",
        icon: ShowerHead,
        reverse: true,
      },
      {
        eyebrow: "轻便即用",
        title: "压缩毛巾",
        body: "独立密封，轻便易带，遇水即可展开。",
        image: asset("/images/product/CompressedTowel.webp"),
        alt: "压缩毛巾和白色毛巾摆放在洗手台",
        icon: Droplet,
      },
      {
        eyebrow: "安心卫生",
        title: "一次性马桶垫",
        body: "为公共卫浴提供安心洁净的隔离保护。",
        image: asset("/images/product/ToiletCover.webp"),
        alt: "一次性马桶垫和包装盒",
        icon: ToiletIcon,
        reverse: true,
      },
    ] as ProductStory[],
    spaces: {
      eyebrow: "专为共享空间设计",
      title: "我们的产品适用于哪些场景？",
      items: [
        {
          title: "青旅",
          image: asset("/images/environment/Beds.png"),
          alt: "带隐私帘的青旅床铺",
          icon: Bed,
        },
        {
          title: "公共浴室",
          image: asset("/images/environment/Bathroom.png"),
          alt: "现代公共浴室洗手台",
          icon: ShowerHead,
        },
        {
          title: "公共区域",
          image: asset("/images/environment/Hall.png"),
          alt: "温暖的青旅大厅和前台",
          icon: Building2,
        },
      ],
    },
    business: {
      eyebrow: "面向青旅与酒店",
      title: "简单合作，真实收益",
      benefits: [
        {
          title: "零成本开始",
          body: "无需前期投入，我们提供完整产品。",
          icon: PackageCheck,
        },
        {
          title: "设置简单",
          body: "快速摆放，减少您的运营负担。",
          icon: Settings2,
        },
        {
          title: "每次住宿都创造收益",
          body: "轻松获得额外收入。",
          icon: TrendingUp,
        },
      ],
      stepsTitle: "合作流程",
      steps: ["联系我们", "免费产品摆放", "从每次销售中获得收益"],
      cta: "申请商务试用",
    },
    faq: {
      title: "常见问题",
      items: [
        {
          q: "青旅或住宿方需要提前付款吗？",
          a: "不需要。我们的商务合作伙伴无需支付前期费用。",
        },
        {
          q: "住宿方如何获得收益？",
          a: "每在您的场所售出一套产品，您都可以获得对应销售收益。",
        },
        {
          q: "如果产品没有卖出去怎么办？",
          a: "可以退回。我们希望合作对您的团队来说是低风险、易尝试的。",
        },
        {
          q: "如果我是个人 TO C 用户，想要提前购买你们的产品可以吗？",
          a: "可以。目前我们支持在布拉格地区旅行的游客一周七天免费配送与交易交付。",
        },
      ],
    },
    trust: {
      title: "立足布拉格，面向欧洲旅行。",
      body: "我们立足布拉格，做面向欧洲的旅行生意。",
      logos: ["PLUS 布拉格", "THE ROAD 青旅", "ONEFAM 布拉格", "CZECH INN"],
    },
    about: {
      eyebrow: "关于我们",
      lines: [
        "通过干净、轻便、即取即用的旅行卫生套装",
        "搭建公共、舒适、可持续的居住空间关系",
        "我们相信，人人都拥有 自由而舒适地休息并享受生活的权利。",
        "Traveon 为游客、青旅和经济型住宿合作伙伴提供紧凑实用的旅行卫生用品。",
        "我们专注于小而关键的旅行卫生用品，帮助客人在抵达后更安心地休息。套装适用于公共浴室、短租住宿、学生旅行和预算型旅行场景。",
        "简单的产品",
        "即刻的舒适",
      ],
    },
    contact: {
      title: "开启你的 Traveon 旅程",
      whatsapp: "WhatsApp",
      email: "邮箱",
      phone: "电话",
    },
  },
};

const contact = {
  phone: "+420 704 882 703",
  email: "Sakura956904363@outlook.com",
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("traveon-language", nextLanguage);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", nextLanguage);
      window.history.replaceState(null, "", url.toString());
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLanguage = params.get("lang");
    const storedLanguage = window.localStorage.getItem("traveon-language");
    const nextLanguage = urlLanguage === "zh" || urlLanguage === "en" ? urlLanguage : storedLanguage;

    if (nextLanguage === "zh" || nextLanguage === "en") {
      setLanguage(nextLanguage);
    }
  }, []);

  const t = content[language as Language];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-traveon-950">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      <section className="brand-landing flex min-h-screen items-center bg-white px-0 pb-28 pt-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
          <Image
            src={asset("/images/hero/Traveon.svg")}
            alt="Traveon Travel Essentials"
            width={920}
            height={410}
            priority
            className="brand-showcase-logo h-auto w-full max-w-[760px]"
          />
          <p className="mt-10 text-lg font-black tracking-normal text-traveon-950 md:text-2xl">
            {t.hero.title}
          </p>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-traveon-800 md:text-lg">
            {t.hero.description}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <Link href="#products" className="btn-secondary">
              {t.nav.cta}
            </Link>
            <Link href="#business" className="btn-primary">
              {t.business.cta}
            </Link>
            <Link href="#contact" className="btn-secondary">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>

      <section
        id="hero"
        className="hero-section relative min-h-[650px] overflow-hidden scroll-mt-24 md:min-h-[760px]"
      >
        <Image
          src={asset("/images/hero/Hero-upscale-1.5x.webp")}
          alt="Traveon travel essentials on a bed by an airplane window"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section id="products" className="section-shell scroll-mt-24 bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.32fr_0.68fr]">
          <div className="relative overflow-hidden rounded-[28px] shadow-soft">
            <Image
              src={asset("/images/product/Pocket.webp")}
              alt="Complete Traveon stay kit with slippers towel and toilet seat cover"
              width={1148}
              height={646}
              className="h-full min-h-[380px] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">{t.intro.eyebrow}</p>
            <p className="mt-3 text-3xl font-black leading-tight text-traveon-950 md:text-4xl">
              {t.intro.productName}
            </p>
            <p className="mt-8 whitespace-nowrap text-[2.65rem] font-black leading-none text-blue-600 md:text-[3rem] lg:text-[3.35rem]">
              {t.intro.highlight}
            </p>
            <h2 className="mt-5 whitespace-nowrap text-[2.15rem] font-black leading-tight text-traveon-950 md:text-[2.45rem] lg:text-[2.75rem]">
              {t.intro.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600 md:text-xl">
              {t.intro.body}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {t.productStories
          .filter((story) => story.eyebrow !== "ALL-IN-ONE KIT")
          .map((story, index) => {
            const Icon = story.icon;
            return (
              <section
                key={story.title}
                className="product-band"
              >
                <div className="product-copy">
                  <div className="icon-badge">
                    <Icon size={30} strokeWidth={2.1} />
                  </div>
                  <p className="eyebrow mt-6">{story.eyebrow}</p>
                  <h3>{story.title}</h3>
                  <p>{story.body}</p>
                </div>
                <div className="product-image">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    width={1120}
                    height={630}
                    className="h-full w-full object-cover"
                  />
                </div>
              </section>
            );
          })}
      </div>

      <section id="use-cases" className="section-shell scroll-mt-24 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="eyebrow">{t.spaces.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">{t.spaces.title}</h2>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {t.spaces.items.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="space-card">
                  <div className="overflow-hidden rounded-[18px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={640}
                      height={360}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-5 flex items-center justify-center gap-3 text-xl font-black">
                    <Icon size={24} className="text-blue-600" /> {item.title}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="business" className="scroll-mt-24 bg-blue-50/70 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">{t.business.eyebrow}</p>
            <h2 className="mt-3 max-w-md text-4xl font-black leading-tight md:text-5xl">
              {t.business.title}
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {t.business.benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title}>
                    <div className="icon-badge">
                      <Icon size={30} />
                    </div>
                    <h3 className="mt-5 text-xl font-black">{benefit.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{benefit.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="rounded-[24px] bg-white p-8 shadow-soft">
            <h3 className="text-xl font-black">{t.business.stepsTitle}</h3>
            <div className="mt-7 space-y-5">
              {t.business.steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-traveon-200 text-sm font-black">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
            <Link href="#contact" className="btn-primary mt-8 w-full justify-center">
              {t.business.cta}
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell scroll-mt-24 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-black leading-tight md:text-5xl">{t.faq.title}</h2>
          <div className="mt-12 space-y-5">
            {t.faq.items.map((item) => (
              <article key={item.q} className="rounded-[24px] bg-white p-8 shadow-soft md:p-10">
                <h3 className="text-xl font-black text-traveon-950 md:text-2xl">{item.q}</h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-black">{t.trust.title}</h2>
          <p className="mt-3 text-lg text-slate-600">{t.trust.body}</p>
          <div className="mt-10 grid gap-8 text-xl font-black tracking-[0.22em] text-slate-400 md:grid-cols-4">
            {t.trust.logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section relative scroll-mt-24 overflow-hidden py-24 md:py-32">
        <Image
          src={asset("/images/hero/Bottom.webp")}
          alt="Airplane trail in a blue sky"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-traveon-950/75" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="about-eyebrow">{t.about.eyebrow}</p>
          <div className="about-copy mt-10 max-w-5xl space-y-5 text-left">
            {t.about.lines.map((line, index) => (
              line === "Simple products.Immediate comfort." ? (
                <div key={line} className="space-y-1">
                  <p>Simple products.</p>
                  <p>Immediate comfort.</p>
                </div>
              ) : (
                <p key={line} className={index === 0 ? "whitespace-nowrap" : ""}>
                  {line}
                </p>
              )
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section scroll-mt-24 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.92fr_0.72fr] md:items-center md:justify-between">
          <div>
            <h2 className="contact-title whitespace-nowrap">{t.contact.title}</h2>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="#products" className="btn-light">
                {t.nav.cta}
              </Link>
              <a href={`mailto:${contact.email}`} className="btn-dark-outline">
                {t.nav.contact}
              </a>
            </div>
          </div>
          <div className="grid gap-5">
            <a href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`} className="contact-link">
              <MessageCircle size={28} />
              <span>
                <strong>{t.contact.whatsapp}</strong>
                {contact.phone}
              </span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contact-link">
              <Phone size={28} />
              <span>
                <strong>{t.contact.phone}</strong>
                {contact.phone}
              </span>
            </a>
            <a href={`mailto:${contact.email}`} className="contact-link">
              <Mail size={28} />
              <span>
                <strong>{t.contact.email}</strong>
                {contact.email}
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
