"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ElementType } from "react";
import {
  Bed,
  Building2,
  CheckCircle2,
  ChevronDown,
  Droplet,
  GraduationCap,
  Hotel,
  Mail,
  MessageCircle,
  PackageCheck,
  Phone,
  Settings2,
  ShowerHead,
  Sparkles,
  TrendingUp,
  UserRound,
} from "lucide-react";
import LogoIntro from "../components/LogoIntro";
import Navbar, { type Language } from "../components/Navbar";

const asset = (path: string) => path;

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

type KitItem = {
  number: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  icon: ElementType;
};

type UseCase = {
  title: string;
  image?: string;
  alt?: string;
  icon?: ElementType;
};

type Benefit = {
  title: string;
  body: string;
  icon: ElementType;
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
      <path d="M9 7h6M10 10h4" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

const content = {
  en: {
    logoLine: "Clean comfort, ready for every stay.",
    hero: {
      title: "Clean comfort, ready for every stay.",
      body: "Compact hygiene kits for hostels, shared bathrooms, and modern budget travel.",
      primary: "Request a Free Trial",
      secondary: "Explore Stay Kit",
    },
    reveal: {
      title: "Traveon Stay Kit.",
      body: "A compact hygiene set designed for shared travel spaces.",
      labels: ["Bath Slippers", "Compressed Bath Towel", "Toilet Seat Cover"],
    },
    kit: [
      {
        number: "01",
        title: "Clean steps, even in shared bathrooms.",
        body: "Soft travel slippers help guests move comfortably between beds, showers, and common areas.",
        image: asset("/images/product/Slipper.webp"),
        alt: "Blue travel slippers at a shared bathroom entrance",
        icon: ShowerHead,
      },
      {
        number: "02",
        title: "Small before use. Ready in seconds.",
        body: "Sealed and portable, the compressed towel expands when needed and keeps packing light.",
        image: asset("/images/product/CompressedTowel.webp"),
        alt: "Compressed bath towel with folded towels",
        icon: Droplet,
      },
      {
        number: "03",
        title: "A simple barrier for shared facilities.",
        body: "Designed for shared bathrooms, public restrooms, and budget travel environments.",
        image: asset("/images/product/ToiletCover.webp"),
        alt: "Disposable toilet seat cover in a shared bathroom",
        icon: ToiletIcon,
      },
    ] as KitItem[],
    spaces: {
      title: "Designed for shared travel spaces.",
      items: [
        {
          title: "Hotel Lobby",
          image: asset("/images/environment/Hall.png"),
          alt: "Warm wooden hostel lobby with reception and lounge seating",
        },
        {
          title: "Shared Bathrooms",
          image: asset("/images/environment/Bathroom.png"),
          alt: "Clean shared bathroom with showers, mirrors, and sinks",
        },
        {
          title: "Shared Beds",
          image: asset("/images/environment/Beds.png"),
          alt: "Shared hostel bunk beds with curtains and warm lighting",
        },
      ] as UseCase[],
    },
    sales: {
      businessTitle: "A. For Business Partners",
      businessBody: "A low-risk way to improve guest comfort and create extra revenue.",
      benefits: [
        { title: "No upfront cost", body: "Start with a free product placement trial.", icon: PackageCheck },
        { title: "Easy to operate", body: "Compact kits, trusted supply, simple display.", icon: Settings2 },
        {
          title: "Extra revenue per Stay Kit",
          body: "Offer guests a practical hygiene upgrade when they need it most.",
          icon: TrendingUp,
        },
      ] as Benefit[],
      formTitle: "Interested in working with us?",
      formBody: "Leave your information and we will get in touch.",
      personTitle: "B. For Individual Travelers",
      personBody: "Buy Traveon Stay Kit directly if you need it.",
      personPoints: [
        {
          title: "High-quality essentials",
          body: "Clean core items selected for shared-stay comfort.",
        },
        {
          title: "Compact and easy to carry",
          body: "Lightweight packaging fits easily into any travel bag.",
        },
        {
          title: "Trusted by modern travelers",
          body: "Simple hygiene support for hostels, short stays, and budget trips.",
        },
      ],
      pickup: "Local pickup in Prague area 7 days a week.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Do hostel partners need to pay upfront?",
          a: "No. During the trial stage, we place the products at your hostel for free so you can test demand first.",
        },
        {
          q: "What if the products do not sell?",
          a: "During the trial stage, unsold products can be returned to us. Bulk order terms are agreed in advance.",
        },
        {
          q: "How do partners earn revenue?",
          a: "For every kit sold at your location, your business keeps the agreed profit margin.",
        },
        {
          q: "Can Traveon deliver locally in Czech?",
          a: "Yes. We currently support local delivery and handover across the Czech area.",
        },
      ],
    },
    about: {
      title: "About Us",
      body: "We design compact travel hygiene kits that make shared stays cleaner, easier, and more comfortable.",
      badges: ["Based in Prague", "Local Support", "Quality Supply", "Sustainable"],
    },
    contact: {
      title: "Let's Connect",
      body: "We're here to help.",
      phone: "+420 704 882 703",
      email: "Sakura956904363@outlook.com",
      location: "Prague, Czech Republic",
    },
  },
  zh: {
    logoLine: "干净舒适，为每一次停留准备好。",
    hero: {
      title: "干净舒适，为每一次停留准备好。",
      body: "面向青旅、共享浴室与现代经济型旅行的轻便卫生套装。",
      primary: "申请免费试用",
      secondary: "了解 Stay Kit",
    },
    reveal: {
      title: "Traveon Stay Kit.",
      body: "为共享旅行空间设计的轻便卫生套装。",
      labels: ["浴室拖鞋", "压缩浴巾", "一次性马桶垫"],
    },
    kit: [
      {
        number: "01",
        title: "即使在共享浴室，也能安心迈步。",
        body: "柔软旅行拖鞋帮助住客在床位、淋浴间和公共区域之间舒适移动。",
        image: asset("/images/product/Slipper.webp"),
        alt: "共享浴室入口旁的蓝色旅行拖鞋",
        icon: ShowerHead,
      },
      {
        number: "02",
        title: "使用前小巧，几秒即可展开。",
        body: "独立密封、便于携带，压缩浴巾在需要时展开，让行李保持轻便。",
        image: asset("/images/product/CompressedTowel.webp"),
        alt: "压缩浴巾与折叠浴巾",
        icon: Droplet,
      },
      {
        number: "03",
        title: "为共享设施提供简单隔离。",
        body: "适用于共享浴室、公共卫生间和预算旅行环境。",
        image: asset("/images/product/ToiletCover.webp"),
        alt: "共享卫生间内的一次性马桶垫",
        icon: ToiletIcon,
      },
    ] as KitItem[],
    spaces: {
      title: "专为共享旅行空间设计。",
      items: [
        { title: "青旅", icon: Bed },
        { title: "共享浴室", icon: ShowerHead },
        { title: "学生旅行", icon: GraduationCap },
        { title: "经济型酒店", icon: Building2 },
        { title: "短住场景", icon: Hotel },
      ] as UseCase[],
    },
    sales: {
      businessTitle: "A. 商务合作伙伴",
      businessBody: "低风险提升住客舒适度，同时创造额外收益。",
      benefits: [
        { title: "无需前期成本", body: "从免费产品摆放试用开始。", icon: PackageCheck },
        { title: "运营简单", body: "套装小巧、供应稳定、陈列简单。", icon: Settings2 },
        { title: "每套产品创造收益", body: "在住客最需要时提供实用卫生升级选择。", icon: TrendingUp },
      ] as Benefit[],
      formTitle: "有兴趣合作吗？",
      formBody: "留下信息，我们会尽快联系你。",
      personTitle: "B. 个人旅行者",
      personBody: "如有需要，可直接购买 Traveon Stay Kit。",
      personPoints: ["高品质旅行必需品", "小巧便携", "受到现代旅行者信赖"],
      pickup: "布拉格地区支持 7 天本地取货。",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "青旅合作伙伴需要提前付款吗？",
          a: "不需要。试用阶段我们会免费放置产品，帮助你先测试市场需求。",
        },
        {
          q: "如果产品没有卖出去怎么办？",
          a: "试用阶段未售出的产品可以退回给我们。批量订单条款会提前在合同中确认。",
        },
        {
          q: "合作伙伴如何获得收益？",
          a: "每售出一套 Stay Kit，你的业务会保留双方约定的利润空间。",
        },
        {
          q: "Traveon 可以在捷克本地配送吗？",
          a: "可以。我们目前支持捷克地区的本地配送和交接。",
        },
      ],
    },
    about: {
      title: "About Us",
      body: "我们设计轻便的旅行卫生套装，让共享住宿更干净、更简单、更舒适。",
      badges: ["立足布拉格", "本地支持", "稳定供应", "可持续"],
    },
    contact: {
      title: "Let's Connect",
      body: "我们随时为你提供帮助。",
      phone: "+420 704 882 703",
      email: "Sakura956904363@outlook.com",
      location: "Prague, Czech Republic",
    },
  },
};

const useCaseScenes = [
  {
    title: "Hotel Lobby",
    zhTitle: "酒店大堂",
    image: asset("/images/environment/Hall.png"),
    alt: "Warm wooden hostel lobby with reception and lounge seating",
  },
  {
    title: "Shared Bathrooms",
    zhTitle: "共享洗浴室",
    image: asset("/images/environment/Bathroom.png"),
    alt: "Clean shared bathroom with showers, mirrors, and sinks",
  },
  {
    title: "Shared Beds",
    zhTitle: "共享床铺",
    image: asset("/images/environment/Beds.png"),
    alt: "Shared hostel bunk beds with curtains and warm lighting",
  },
];

const faqGroups = {
  en: [
    {
      title: "For business partners",
      items: [
        {
          q: "Do hostel partners need to pay upfront?",
          a: "No. During the trial stage, we place the products at your hostel for free. You can test the market first, and all sales revenue during the trial will be kept by your business. After the trial is successful, we can move to bulk purchasing. The purchase price and selling price will be clearly stated in the contract.",
        },
        {
          q: "What if the products do not sell?",
          a: "During the trial stage, unsold products can be returned to us. We want the cooperation to be low-risk and easy to start. For bulk orders, the purchase quantity will be decided by each partner based on their own business needs. Overstock, shortage, and related inventory terms will be agreed in advance in the contract.",
        },
        {
          q: "How do partners earn revenue?",
          a: "For every kit sold at your location, your business keeps the agreed profit margin. Partners earn from every kit sold at their location.",
        },
        {
          q: "Can Traveon deliver locally in Czech?",
          a: "Yes. We currently support local delivery and handover in the whole Czech area.",
        },
      ],
    },
    {
      title: "For travelers",
      items: [
        {
          q: "Can individual travelers buy the kit?",
          a: "Yes. We currently offer free product handover and delivery in the Prague area, seven days a week.",
        },
        {
          q: "What is included in the Stay Kit?",
          a: "The standard kit includes travel slippers, a compressed towel, and a disposable toilet seat cover.",
        },
      ],
    },
  ],
  zh: [
    {
      title: "商务合作伙伴",
      items: [
        {
          q: "青旅合作伙伴需要预先付款吗？",
          a: "不需要。在试用阶段，我们会免费将产品放置在你的青旅。你可以先测试市场，试用期间的全部销售收入都将由你的业务保留。试用成功后，我们可以进入批量采购。采购价格和销售价格将会在合同中清楚写明。",
        },
        {
          q: "如果产品没有卖出去怎么办？",
          a: "在试用阶段，未售出的产品可以退还给我们。我们希望合作低风险、易开始。对于批量订单，采购数量将由每位合作伙伴根据自身业务需求决定。库存过剩、库存不足及相关库存条款将提前在合同中约定。",
        },
        {
          q: "合作伙伴如何获得收入？",
          a: "每售出一套产品，你的业务将保留双方约定的利润空间。合作伙伴通过其场地售出的每一套产品获得收入。",
        },
        {
          q: "Traveon 可以在捷克本地配送吗？",
          a: "可以。我们目前支持整个捷克地区的本地配送与交接。",
        },
      ],
    },
    {
      title: "个人旅行者",
      items: [
        {
          q: "个人旅行者可以购买套装吗？",
          a: "可以。我们目前在布拉格地区提供免费产品交接和配送服务，每周七天均可。",
        },
        {
          q: "Stay Kit 里包含什么？",
          a: "标准套装包含旅行拖鞋、压缩浴巾和一次性马桶垫。",
        },
      ],
    },
  ],
};

const aboutUsCopy = {
  zh: [
    "通过干净、轻便、即取即用的旅行卫生套装",
    "搭建公共、舒适、可持续的居住空间关系",
    "我们相信，人人都拥有 自由而舒适地休息并享受生活的权利。",
    "Traveon 为游客、青旅和经济型住宿合作伙伴提供紧凑实用的旅行卫生用品。",
    "我们专注于小而关键的旅行卫生用品，帮助客人在抵达后更安心地休息。套装适用于公共浴室、短租住宿、学生旅行和预算型旅行场景。",
    "简单的产品",
    "即刻的舒适",
  ],
  en: [
    "Clean. Compact. Ready.",
    "We design simple travel hygiene kits\nto enable shared, comfortable, and sustainable living.",
    "Everyone deserves to rest freely and live comfortably.",
    "Traveon delivers essential hygiene kits\nfor travelers and modern accommodations.",
    "Ideal for shared bathrooms, short stays, student travel,\nand budget-friendly trips.",
    "Simple products.\nImmediate comfort.",
  ],
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [heroVideoFailed, setHeroVideoFailed] = useState(false);
  const t = content[language];

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

  return (
    <main className="traveon-page">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      <section className="brand-landing" aria-label="Traveon opening logo">
        <div className="site-rail intro-card">
          <LogoIntro
            logoSrc={asset("/images/hero/Traveon.svg")}
            videoSrc="/LOGO.mp4"
            alt="Traveon Travel Essentials"
          />
          <p>{t.logoLine}</p>
          <div className="intro-actions">
            <Link href="#business" className="btn-primary">
              {t.hero.primary}
            </Link>
            <Link href="#products" className="btn-secondary">
              {t.hero.secondary}
            </Link>
            <Link href="#contact" className="btn-secondary">
              {language === "zh" ? "联系我" : "Contact Us"}
            </Link>
          </div>
          <a className="down-button" href="#hero" aria-label="Scroll to hero">
            <ChevronDown size={18} />
          </a>
        </div>
      </section>

      <section id="hero" className="site-rail hero-panel scroll-mt-24">
        {heroVideoFailed ? (
          <Image
            src={asset("/images/hero/Hero-upscale-1.5x.webp")}
            alt="Traveon travel essentials on a bed by an airplane window"
            width={2048}
            height={921}
            sizes="(max-width: 900px) 92vw, 880px"
            className="hero-video-frame"
            priority
          />
        ) : (
          <video
            aria-label="Traveon travel essentials on a bed by an airplane window"
            autoPlay
            className="hero-video-frame"
            loop
            muted
            onError={() => setHeroVideoFailed(true)}
            playsInline
            poster={asset("/images/hero/Hero-upscale-1.5x.webp")}
            preload="metadata"
            src="/HERO.mp4"
          />
        )}
      </section>

      <section id="products" className="site-rail product-reveal scroll-mt-24">
        <div className="product-reveal__copy">
          <h2>{t.reveal.title}</h2>
          <p>{t.reveal.body}</p>
        </div>
        <div className="product-reveal__visual">
          <Image
            src={asset("/images/product/Pocket.webp")}
            alt="Traveon travel essentials pocket bag placed on a hostel bed"
            width={2048}
            height={921}
            sizes="(max-width: 900px) 92vw, 600px"
            className="product-reveal__image"
          />
        </div>
      </section>

      <section className="site-rail inside-kit" aria-label="Inside the Traveon Stay Kit">
        {t.kit.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.number} className="kit-card">
              <div className="kit-card__copy">
                <span className="kit-card__title-icon">
                  <Icon size={18} />
                </span>
                <div className="kit-card__text">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </div>
              <div className="kit-card__image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1120}
                  height={630}
                  sizes="(max-width: 900px) 92vw, 480px"
                />
              </div>
            </article>
          );
        })}
      </section>

      <section id="use-cases" className="site-rail shared-spaces scroll-mt-24">
        <h2>{t.spaces.title}</h2>
        <div className="shared-spaces__row">
          {useCaseScenes.map((scene, index) => {
            const item = t.spaces.items[index];
            return (
              <article key={scene.title} className="shared-card">
                <Image
                  src={item?.image ?? scene.image}
                  alt={item?.alt ?? scene.alt}
                  width={1120}
                  height={630}
                  sizes="(max-width: 900px) 92vw, 280px"
                />
                <span>{language === "zh" ? scene.zhTitle : item?.title ?? scene.title}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="business" className="site-rail sale-section scroll-mt-24">
        <article className="sale-card">
          <h2>{t.sales.businessTitle}</h2>
          <p className="sale-lead">{t.sales.businessBody}</p>
          <div className="sale-benefits">
            {t.sales.benefits.map((benefit) => (
              <div key={benefit.title} className="sale-benefit">
                <span className="icon-badge">
                  <CheckCircle2 size={19} />
                </span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="#faq" className="btn-secondary sale-link">
            {language === "zh" ? "了解更多" : "Learn More"}
          </Link>
        </article>

        <article className="sale-form-card">
          <h2>{t.sales.formTitle}</h2>
          <p>{t.sales.formBody}</p>
          <form action={`mailto:${t.contact.email}`} className="contact-form" encType="text/plain" method="post">
            <label>
              {language === "zh" ? "姓名" : "Full Name"}
              <input name="name" placeholder={language === "zh" ? "你的姓名" : "Your name"} type="text" />
            </label>
            <label>
              {language === "zh" ? "邮箱" : "Email"}
              <input name="email" placeholder={language === "zh" ? "你的邮箱" : "name@example.com"} type="email" />
            </label>
            <label>
              {language === "zh" ? "电话号码" : "Phone Number"}
              <input name="phone" placeholder="+420 123 456 789" type="tel" />
            </label>
            <label>
              {language === "zh" ? "留言内容" : "Content"}
              <textarea
                name="message"
                placeholder={language === "zh" ? "请告诉我们你的住宿场景或需求。" : "Tell us about your property or needs."}
                rows={3}
              />
            </label>
            <button className="btn-primary" type="submit">
              {language === "zh" ? "提交" : "Submit"}
            </button>
          </form>
        </article>

        <article id="for-person" className="sale-card sale-person-card scroll-mt-24">
          <h2>{t.sales.personTitle}</h2>
          <p className="sale-lead">{t.sales.personBody}</p>
          <div className="sale-benefits person-points">
            {t.sales.personPoints.map((point) => {
              const title = typeof point === "string" ? point : point.title;
              const body = typeof point === "string" ? "" : point.body;
              return (
                <div key={title} className="sale-benefit person-benefit">
                  <span className="icon-badge">
                    <CheckCircle2 size={19} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    {body ? <p>{body}</p> : null}
                  </div>
                </div>
              );
            })}
          </div>
          <a href={`mailto:${t.contact.email}`} className="btn-secondary sale-link">
            {language === "zh" ? "立即购买" : "Buy Now"}
          </a>
          <p className="pickup-note">{t.sales.pickup}</p>
        </article>
      </section>

      <section id="faq" className="site-rail faq-section scroll-mt-24">
        <h2>{language === "zh" ? "常见问题" : t.faq.title}</h2>
        <div className="faq-list">
          {faqGroups[language].map((group) => (
            <div key={group.title} className="faq-group">
              <h3>{group.title}</h3>
              {group.items.map((item) => (
                <details key={item.q} className="faq-row">
                  <summary>
                    <span>{item.q}</span>
                    <ChevronDown size={18} />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="site-rail about-v4 scroll-mt-24">
        <div className="about-v4__mask">
          <div className="about-v4__copy">
            <h2>{language === "zh" ? "关于我们" : "About Us"}</h2>
            <div className="about-v4__doc">
              {aboutUsCopy[language].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="site-rail contact-v4 scroll-mt-24">
        <div className="contact-v4__intro">
          <h2>Start Your Journey with Traveon</h2>
          <div className="contact-v4__actions">
            <Link href="#business" className="contact-cta contact-cta--primary">
              Get Started
            </Link>
            <Link href="#contact" className="contact-cta contact-cta--secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="contact-lines">
          <a href={`https://wa.me/${t.contact.phone.replace(/\D/g, "")}`}>
            <MessageCircle size={24} />
            <span>
              <strong>WhatsApp</strong>
              {t.contact.phone}
            </span>
          </a>
          <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`}>
            <Phone size={24} />
            <span>
              <strong>Phone</strong>
              {t.contact.phone}
            </span>
          </a>
          <a href={`mailto:${t.contact.email}`}>
            <Mail size={24} />
            <span>
              <strong>Email</strong>
              {t.contact.email}
            </span>
          </a>
        </div>
      </section>

    </main>
  );
}
