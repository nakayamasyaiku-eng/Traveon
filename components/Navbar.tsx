"use client";

import Image from "next/image";
import Link from "next/link";

export type Language = "en" | "zh";

type NavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const navItems = {
  en: [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "For Business", href: "#business" },
    { label: "For Person", href: "#for-person" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  zh: [
    { label: "关于我们", href: "#about" },
    { label: "产品", href: "#products" },
    { label: "商务合作", href: "#business" },
    { label: "个人购买", href: "#for-person" },
    { label: "常见问题", href: "#faq" },
    { label: "联系", href: "#contact" },
  ],
};

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__brand" aria-label="Traveon home">
          <Image
            src="/images/hero/Traveon.svg"
            alt="Traveon"
            width={154}
            height={48}
            priority
            className="nav-logo-image"
          />
        </Link>

        <div className="site-nav__links">
          {navItems[language].map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="site-nav__language" aria-label="Language switcher">
          <button
            type="button"
            onClick={() => onLanguageChange("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => onLanguageChange("zh")}
            aria-pressed={language === "zh"}
          >
            中文
          </button>
        </div>
      </div>
    </nav>
  );
}
