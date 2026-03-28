import type { Metadata } from "next";
import { Section, Separator, MapPinIcon } from "../components/section";
import { Footer } from "../components/footer";
import { MobilePhoneBar } from "../components/mobile-phone-bar";

export const metadata: Metadata = {
  title: "お問い合わせ | 焼肉・居酒屋 hanahana",
  description:
    "焼肉・居酒屋 hanahanaへのお問い合わせ・ご予約。北海道釧路市末広町5-3-2。月〜木・日 17:00-22:00 / 金・土 17:00-23:00。",
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-14">
        {/* Header */}
        <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-hh-charcoal">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(212,160,74,0.1) 0%, transparent 70%)",
            }}
          />
          <h1 className="relative z-10 section-heading text-3xl md:text-5xl text-hh-cream text-center">
            お問い合わせ
          </h1>
        </section>

        <Separator />

        <Section className="text-center">
          <p className="font-gothic text-hh-cream-dim/70 text-base md:text-lg mb-4">
            ご予約・お問い合わせは直接ご来店ください
          </p>
          <p className="font-gothic text-hh-cream-dim/50 text-sm mb-10">
            繁華街末広町エリア・JR釧路駅から徒歩約7分
          </p>

          <a
            href="https://www.google.com/maps/search/焼肉居酒屋+hanahana+釧路市末広町5-3-2"
            target="_blank"
            rel="noopener noreferrer"
            className="phone-cta"
          >
            <MapPinIcon />
            <span>Google マップで見る</span>
          </a>

          <div className="mt-16 max-w-sm mx-auto space-y-4 font-gothic text-base leading-[1.8]">
            <div className="flex gap-6">
              <span className="text-hh-amber/70 whitespace-nowrap min-w-[5em] text-sm">
                住所
              </span>
              <span className="text-hh-cream-dim">北海道釧路市末広町5-3-2</span>
            </div>
            <div className="flex gap-6">
              <span className="text-hh-amber/70 whitespace-nowrap min-w-[5em] text-sm">
                営業時間
              </span>
              <span className="text-hh-cream-dim">
                月〜木・日 17:00 - 22:00
                <br />
                金・土 17:00 - 23:00
              </span>
            </div>
            <div className="flex gap-6">
              <span className="text-hh-amber/70 whitespace-nowrap min-w-[5em] text-sm">
                定休日
              </span>
              <span className="text-hh-cream-dim">不定休（事前予約で対応可）</span>
            </div>
          </div>
        </Section>

        <Separator />

        {/* アクセス */}
        <Section>
          <h2 className="section-heading text-2xl md:text-3xl text-hh-cream mb-10 text-center">
            アクセス
          </h2>
          <div className="w-full aspect-[16/9] mb-8 overflow-hidden rounded">
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
          <div className="text-center space-y-2">
            <p className="font-gothic text-hh-cream-dim text-base">
              北海道釧路市末広町5-3-2
            </p>
            <p className="font-gothic text-hh-cream-dim/60 text-sm">
              JR釧路駅から徒歩約7分
            </p>
          </div>
        </Section>
      </main>

      <Footer />
      <MobilePhoneBar />
    </>
  );
}
