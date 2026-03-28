"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hh-bg/90 backdrop-blur-sm border-b border-hh-amber/10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-antique text-hh-cream text-base tracking-wider"
        >
          hanahana
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">
            トップ
          </Link>
          <Link href="/menu" className="nav-link">
            メニュー
          </Link>
          <Link href="/info" className="nav-link">
            店舗情報
          </Link>
          <Link href="/contact" className="nav-link">
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span
            className={`block w-5 h-px bg-hh-cream transition-transform duration-200 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-hh-cream transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-hh-cream transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-hh-bg/95 backdrop-blur-sm border-b border-hh-amber/10 px-6 py-6 flex flex-col gap-5">
          <Link href="/" className="nav-link text-base" onClick={() => setOpen(false)}>
            トップ
          </Link>
          <Link href="/menu" className="nav-link text-base" onClick={() => setOpen(false)}>
            メニュー
          </Link>
          <Link href="/info" className="nav-link text-base" onClick={() => setOpen(false)}>
            店舗情報
          </Link>
          <Link href="/contact" className="nav-link text-base" onClick={() => setOpen(false)}>
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
