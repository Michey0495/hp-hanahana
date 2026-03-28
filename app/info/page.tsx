import type { Metadata } from "next";
import { Section, Separator } from "../components/section";
import { Footer } from "../components/footer";
import { MobilePhoneBar } from "../components/mobile-phone-bar";

export const metadata: Metadata = {
  title: "店舗情報 | 焼肉・居酒屋 hanahana",
  description:
    "焼肉・居酒屋 hanahanaの店舗情報。住所: 北海道釧路市末広町5-3-2。36席、貸切可（20名以下）。月〜木・日 17:00-22:00 / 金・土 17:00-23:00。",
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-6 py-4 border-b border-hh-amber/10 last:border-b-0">
      <span className="text-hh-amber/70 whitespace-nowrap min-w-[6em] text-sm font-antique">
        {label}
      </span>
      <span className="text-hh-cream-dim font-gothic">{children}</span>
    </div>
  );
}

export default function InfoPage() {
  return (
    <>
      <main className="pt-14">
        {/* Header */}
        <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-hh-charcoal">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(168,32,32,0.15) 0%, transparent 70%)",
            }}
          />
          <h1 className="relative z-10 section-heading text-3xl md:text-5xl text-hh-cream text-center">
            店舗情報
          </h1>
        </section>

        <Separator />

        <Section>
          <div className="max-w-lg mx-auto">
            <InfoRow label="店名">焼肉・居酒屋 hanahana</InfoRow>
            <InfoRow label="住所">北海道釧路市末広町5-3-2</InfoRow>
            <InfoRow label="営業時間">
              月〜木・日 17:00 - 22:00
              <br />
              金・土 17:00 - 23:00
            </InfoRow>
            <InfoRow label="定休日">不定休（事前予約で対応可）</InfoRow>
            <InfoRow label="座席数">36席（4名席 × 9卓）</InfoRow>
            <InfoRow label="貸切">可（20名以下）</InfoRow>
            <InfoRow label="予算">3,000円〜4,000円</InfoRow>
            <InfoRow label="サービス料">500円</InfoRow>
            <InfoRow label="アクセス">JR釧路駅から徒歩約7分</InfoRow>
          </div>
        </Section>

        <Separator />

        {/* Google Map */}
        <Section id="map">
          <h2 className="section-heading text-2xl md:text-3xl text-hh-cream mb-10 text-center">
            アクセス
          </h2>
          <div className="w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=釧路市末広町5-3-2&zoom=16"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.3) brightness(0.75)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="焼肉・居酒屋 hanahana 所在地"
            />
          </div>
          <p className="text-center text-hh-cream-dim/60 text-sm mt-4 font-gothic">
            JR釧路駅から徒歩約7分 / 繁華街末広町エリア
          </p>
        </Section>
      </main>

      <Footer />
      <MobilePhoneBar />
    </>
  );
}
