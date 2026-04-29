"use client";

import Link from "next/link";

type Language = "en" | "zh";

type NavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
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
    { label: "联系我们", href: "#contact" },
  ],
};

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-100 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-5 md:px-6 min-h-16 flex items-center justify-between gap-5">
        <Link href="/" className="shrink-0 text-xl md:text-2xl font-black text-black" aria-label="Traveon home">
          TRAVEON
        </Link>
        <div className="no-scrollbar flex items-center gap-3 overflow-x-auto py-3 text-sm font-medium text-textSecondary">
          {navItems[language].map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
          <div className="flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                language === "en" ? "bg-accent text-white" : "text-textSecondary hover:text-accent"
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("zh")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                language === "zh" ? "bg-accent text-white" : "text-textSecondary hover:text-accent"
              }`}
              aria-pressed={language === "zh"}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
