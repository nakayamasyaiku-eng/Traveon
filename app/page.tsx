"use client";

import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type Language = "en" | "zh";

const content = {
  en: {
    hero: {
      eyebrow: "Travel Essentials For Your Better Rest",
      title: "Clean, simple hygiene kits for better rest.",
      description:
        "Traveon prepares compact travel hygiene essentials for guests, hostels, and budget accommodation partners.",
      primaryCta: "Request Business Trial",
      secondaryCta: "Contact Us",
    },
    about: {
      title: "About Us",
      body:
        "We focus on small but high-impact travel hygiene products that help guests feel prepared from the moment they arrive. Our kits are designed for shared bathrooms, short stays, student trips, and budget-friendly travel.",
      points: ["Practical essentials", "Simple guest experience", "Built for travel operators"],
    },
    products: {
      title: "Products",
      subtitle: "A ready-to-use hygiene kit designed for fast handover and daily travel needs.",
      perfectFor: "Perfect For",
      fit: "Hostels, student residences, short-stay apartments, and travelers using shared bathrooms",
      tags: ["Clean", "Compact", "Ready to use"],
      items: ["Traveon pocket kit", "Compressed towel", "Shower slippers", "Disposable toilet seat cover"],
      slides: [
        {
          label: "Traveon Pocket Kit",
          note: "A compact handover package for travel stays.",
          image: "/images/product/Pocket.webp",
        },
        {
          label: "Compressed Towel",
          note: "Lightweight, sealed, and easy to carry.",
          image: "/images/product/CompressedTowel.webp",
        },
        {
          label: "Travel Slippers",
          note: "Simple protection for hostel showers.",
          image: "/images/product/Slipper.webp",
        },
        {
          label: "Toilet Seat Cover",
          note: "Disposable protection for shared bathrooms.",
          image: "/images/product/ToiletCover.webp",
        },
      ],
    },
    scenarios: {
      title: "Application Scenarios",
      subtitle: "Designed for the exact spaces where travelers want a little more comfort and confidence.",
      items: [
        {
          title: "Hostel reception and guest handover",
          description: "Keep kits visible at check-in so guests can buy essentials before they need them.",
          image: "/images/environment/Hall.webp",
        },
        {
          title: "Shared shower and bathroom areas",
          description: "Support cleaner, easier routines in the spaces guests care about most.",
          image: "/images/environment/Shower.webp",
        },
      ],
    },
    business: {
      title: "For Business",
      subtitle: "Add value for your guests and generate extra income with low operational effort.",
      cta: "Request Free Trial",
      steps: [
        { step: "1", title: "Contact us", desc: "Reach out to our B2B team" },
        { step: "2", title: "Free placement", desc: "No upfront cost. Easy setup." },
        { step: "3", title: "Earn per sale", desc: "Keep a margin on every kit sold." },
      ],
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
    contact: {
      title: "Contact",
      subtitle: "Tell us what you need and we will get back to you.",
      nameLabel: "Name:",
      ownerName: "Sakura",
      name: "Your Name",
      message: "How can we help?",
      submit: "Send Message",
    },
  },
  zh: {
    hero: {
      eyebrow: "为更好休息准备的旅行必需品",
      title: "干净、轻便、即取即用的旅行卫生套装。",
      description: "Traveon 为游客、青旅和经济型住宿合作伙伴提供紧凑实用的旅行卫生用品。",
      primaryCta: "申请商务试用",
      secondaryCta: "联系我们",
    },
    about: {
      title: "关于我们",
      body:
        "我们专注于小而关键的旅行卫生用品，帮助客人在抵达后更安心地休息。套装适用于公共浴室、短租住宿、学生旅行和预算型旅行场景。",
      points: ["实用必需品", "简单顺畅的客人体验", "为旅行住宿运营方设计"],
    },
    products: {
      title: "产品",
      subtitle: "一套可快速交付、满足日常旅行需求的即用型卫生套装。",
      perfectFor: "适用场景",
      fit: "青旅、学生公寓、短租公寓，以及使用公共浴室的旅行游客",
      tags: ["干净", "轻便", "即取即用"],
      items: ["Traveon 便携套装", "压缩毛巾", "淋浴拖鞋", "一次性马桶垫"],
      slides: [
        {
          label: "Traveon 便携套装",
          note: "适合住宿交付场景的紧凑包装。",
          image: "/images/product/Pocket.webp",
        },
        {
          label: "压缩毛巾",
          note: "轻便密封，便于携带和交付。",
          image: "/images/product/CompressedTowel.webp",
        },
        {
          label: "旅行拖鞋",
          note: "为青旅淋浴场景提供基础防护。",
          image: "/images/product/Slipper.webp",
        },
        {
          label: "一次性马桶垫",
          note: "为公共卫生间提供一次性防护。",
          image: "/images/product/ToiletCover.webp",
        },
      ],
    },
    scenarios: {
      title: "应用场景",
      subtitle: "围绕旅行者最需要安心感的住宿空间设计。",
      items: [
        {
          title: "青旅前台与客人交付",
          description: "在入住环节展示并交付套装，让客人在真正需要前就准备好卫生用品。",
          image: "/images/environment/Hall.webp",
        },
        {
          title: "公共淋浴与卫生间区域",
          description: "帮助客人在最关注的公共空间里获得更干净、更轻松的使用体验。",
          image: "/images/environment/Shower.webp",
        },
      ],
    },
    business: {
      title: "商务合作",
      subtitle: "以较低运营成本为客人增加便利，同时为住宿方创造额外收益。",
      cta: "申请免费试用",
      steps: [
        { step: "1", title: "联系我们", desc: "联系 Traveon 商务团队" },
        { step: "2", title: "免费铺货", desc: "无需前期费用，设置简单" },
        { step: "3", title: "按销售收益", desc: "每售出一套均可获得利润空间" },
      ],
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
    contact: {
      title: "联系我们",
      subtitle: "告诉我们您的需求，我们会尽快回复。",
      nameLabel: "Name:",
      ownerName: "Sakura",
      name: "您的姓名",
      message: "我们可以如何帮助您？",
      submit: "发送消息",
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeSlide, setActiveSlide] = useState(0);
  const t = content[language];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % t.products.slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [t.products.slides.length]);

  const moveSlide = (direction: number) => {
    setActiveSlide((current) => {
      const slideCount = t.products.slides.length;
      return (current + direction + slideCount) % slideCount;
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-sky-50/50 to-white">
      <Navbar language={language} onLanguageChange={setLanguage} />

      <section className="relative min-h-[680px] bg-white pt-28">
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 pt-24 pb-24 text-center">
          <img
            src="/images/hero/Traveon.svg"
            alt="Traveon"
            className="mx-auto mb-6 h-auto w-[280px] max-w-full sm:w-[420px] md:w-[560px]"
          />
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.18em] text-accent mb-10">
            {t.hero.eyebrow}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#business"
              className="px-8 py-4 bg-accent text-white rounded-full font-medium shadow-glass hover:shadow-glass-hover hover:scale-[1.02] transition-all duration-200 ease-apple"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-textPrimary border border-white/70 rounded-full font-medium shadow-glass hover:shadow-glass-hover hover:scale-[1.02] transition-all duration-200 ease-apple"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 pb-24">
        <section id="about" className="scroll-mt-28 py-20">
          <div className="relative overflow-hidden rounded-lg px-6 py-12 md:px-10 md:py-16 text-white">
            <Image
              src="/images/hero/Hero-upscale-1.5x.webp"
              alt="Airplane trail in a blue sunset sky"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-accent/65" />
            <div className="relative grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <h2 className="text-3xl font-bold">{t.about.title}</h2>
              <div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">{t.hero.title}</h3>
                <p className="text-lg md:text-xl leading-8 text-white/90 mb-6">{t.hero.description}</p>
                <p className="text-lg leading-8 text-white/85 mb-8">{t.about.body}</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {t.about.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/90 px-4 py-3 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="text-sm font-semibold text-textPrimary">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-28 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">{t.products.title}</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">{t.products.subtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto glass-card p-5 md:p-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-inner">
                <div
                  className="flex transition-transform duration-700 ease-apple will-change-transform"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {t.products.slides.map((slide, index) => (
                    <div key={slide.label} className="min-w-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={slide.image}
                          alt={slide.label}
                          fill
                          sizes="(min-width: 768px) 480px, 90vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
                          <div className="text-xs font-semibold text-white/70">0{index + 1}</div>
                          <h3 className="text-2xl font-bold">{slide.label}</h3>
                          <p className="mt-2 text-sm text-white/85">{slide.note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => moveSlide(-1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-accent shadow-glass hover:scale-105 transition-transform"
                  aria-label="Previous product image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => moveSlide(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-accent shadow-glass hover:scale-105 transition-transform"
                  aria-label="Next product image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {t.products.slides.map((slide, index) => (
                    <button
                      key={slide.label}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"}`}
                      aria-label={`Go to ${slide.label}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <ul className="space-y-4 mb-8">
                  {t.products.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-textPrimary font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-textSecondary uppercase tracking-wider mb-2">{t.products.perfectFor}</h4>
                  <p className="text-textPrimary leading-7">{t.products.fit}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.products.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-accent text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-y border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">{t.scenarios.title}</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">{t.scenarios.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.scenarios.items.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg bg-white shadow-glass">
                <div className="relative aspect-[16/10]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{item.title}</h3>
                  <p className="text-sm leading-6 text-textSecondary">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="business" className="scroll-mt-28 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">{t.business.title}</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">{t.business.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {t.business.steps.map((item) => (
              <div key={item.step} className="glass-card p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-textPrimary mt-4 mb-2">{item.title}</h3>
                <p className="text-textSecondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex px-8 py-4 bg-primary text-white rounded-full font-medium shadow-glass hover:shadow-glass-hover hover:scale-[1.02] transition-all duration-200 ease-apple"
            >
              {t.business.cta}
            </a>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28 py-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-textPrimary text-center mb-12">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((faq) => (
              <div key={faq.q} className="glass-card p-6 text-left">
                <h4 className="font-bold text-textPrimary mb-2">{faq.q}</h4>
                <p className="text-textSecondary text-sm leading-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-24">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-textPrimary mb-3">{t.contact.title}</h2>
              <p className="text-textSecondary mb-8">{t.contact.subtitle}</p>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-textPrimary">
                  <span className="font-bold">{t.contact.nameLabel}</span>
                  <span>{t.contact.ownerName}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-textPrimary">
                  <span className="font-bold">WhatsApp:</span>
                  <a href="https://wa.me/420704882703" className="hover:text-primary transition-colors">
                    +420 704 882 703
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-textPrimary">
                  <span className="font-bold">Email:</span>
                  <a href="mailto:Sakura956904363@outlook.com" className="hover:text-primary transition-colors break-all">
                    Sakura956904363@outlook.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="space-y-4">
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:outline-none focus:border-primary transition-colors"
                  placeholder={t.contact.name}
                />
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder={t.contact.message}
                />
                <button type="submit" className="w-full py-3 bg-textPrimary text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                  {t.contact.submit}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
