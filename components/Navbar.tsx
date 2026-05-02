"use client";

import Link from "next/link";

export type Language = "en" | "zh";

type NavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  ctaLabel?: string;
};

const navItems = {
  en: [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "For Business", href: "#business" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  zh: [
    { label: "关于我们", href: "#about" },
    { label: "产品", href: "#products" },
    { label: "商务合作", href: "#business" },
    { label: "常见问题", href: "#faq" },
    { label: "联系", href: "#contact" },
  ],
};

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#d8deea] bg-white/95 backdrop-blur-2xl">
      <div className="mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between gap-3 px-5 md:gap-4 md:px-8">
        <Link href="/" className="flex min-w-0 shrink items-center text-[#061a3a]" aria-label="Traveon home">
          <img src="/images/hero/Traveon.svg" alt="Traveon" className="nav-logo-image" />
        </Link>

        <div className="no-scrollbar hidden items-center gap-5 overflow-x-auto text-sm font-bold text-[#344054] md:flex lg:gap-7">
          {navItems[language].map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition-colors hover:text-[#2E6FD8]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <div className="language-switch flex items-center rounded-full border border-[#d6dce8] bg-white/75 p-1 text-xs font-black shadow-sm">
            <a
              href="?lang=en"
              onClick={(event) => {
                event.preventDefault();
                onLanguageChange("en");
              }}
              className={`rounded-full px-2.5 py-1.5 transition-colors md:px-3 ${
                language === "en" ? "bg-[#0A1F3C] text-white" : "text-[#344054] hover:text-[#2E6FD8]"
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </a>
            <a
              href="?lang=zh"
              onClick={(event) => {
                event.preventDefault();
                onLanguageChange("zh");
              }}
              className={`rounded-full px-2.5 py-1.5 transition-colors md:px-3 ${
                language === "zh" ? "bg-[#0A1F3C] text-white" : "text-[#344054] hover:text-[#2E6FD8]"
              }`}
              aria-pressed={language === "zh"}
            >
              中文
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
