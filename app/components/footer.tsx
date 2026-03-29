import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-hh-amber/10 py-12 pb-24 md:pb-12">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-antique text-hh-cream/60 text-sm tracking-wider">
            焼肉・居酒屋 hanahana
          </p>
          <nav className="flex gap-6">
            <Link href="/" className="nav-link text-xs">
              トップ
            </Link>
            <Link href="/menu" className="nav-link text-xs">
              メニュー
            </Link>
            <Link href="/info" className="nav-link text-xs">
              店舗情報
            </Link>
            <Link href="/contact" className="nav-link text-xs">
              お問い合わせ
            </Link>
          </nav>
        </div>
        <div className="text-center space-y-2">
          <p className="font-gothic text-hh-cream-dim/50 text-[10px] tracking-wider">
            ※掲載写真はイメージです。実際の料理・店内とは異なります。
          </p>
          <p className="font-gothic text-hh-cream-dim/40 text-xs tracking-wider">
            本サイトはEZOAIによるデモ制作です
          </p>
        </div>
      </div>
    </footer>
  );
}
