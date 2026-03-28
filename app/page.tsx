import Image from "next/image";
import Link from "next/link";
import { Section, Separator } from "./components/section";
import { Footer } from "./components/footer";
import { MobilePhoneBar } from "./components/mobile-phone-bar";

export default function Home() {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop&q=80"
            alt="居酒屋の雰囲気"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(168,32,32,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <p className="font-gothic text-hh-amber/70 text-xs md:text-sm tracking-[0.4em] mb-6">
              北海道釧路市末広町
            </p>

            <h1 className="font-antique text-5xl md:text-7xl lg:text-8xl text-hh-cream font-normal tracking-wider leading-tight">
              hanahana
            </h1>

            <p className="font-antique text-hh-cream/50 text-lg md:text-xl tracking-[0.2em] mt-3">
              焼肉・居酒屋
            </p>

            <p className="font-gothic text-hh-cream/70 text-base md:text-lg tracking-[0.15em] mt-8 max-w-md">
              肉の旨み、酒の温もり。
              <br />
              釧路の夜を、ここで。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link
                href="/menu"
                className="px-8 py-3 bg-hh-red border border-hh-red-bright/30 text-hh-cream font-antique text-sm tracking-widest hover:bg-hh-red-bright/80 transition-all duration-200 cursor-pointer"
              >
                メニューを見る
              </Link>
              <Link
                href="/info"
                className="px-8 py-3 border border-hh-amber/40 text-hh-cream font-antique text-sm tracking-widest hover:bg-hh-amber/10 transition-all duration-200 cursor-pointer"
              >
                店舗情報
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="font-gothic text-[10px] tracking-[0.3em] text-hh-cream-dim/50">
              SCROLL
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="animate-bounce"
              aria-hidden="true"
            >
              <path
                d="M8 4L8 18M8 18L2 12M8 18L14 12"
                stroke="#D4A04A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>
        </section>

        {/* こだわり */}
        <Separator />
        <Section id="concept">
          <h2 className="section-heading text-2xl md:text-3xl text-hh-cream mb-10 text-center">
            焼肉とジンギスカン、
            <br className="md:hidden" />
            そして居酒屋の楽しみ
          </h2>
          <div className="mb-10 overflow-hidden rounded">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=500&fit=crop&q=80"
              alt="焼肉イメージ"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 font-gothic text-base md:text-lg leading-[1.9] text-hh-cream-dim/80">
            <p>
              hanahanaは、焼肉・ジンギスカンに
              <br className="hidden md:block" />
              居酒屋メニューも揃えたお店です。
            </p>
            <p>
              4名席が9卓、全36席。
              <br className="hidden md:block" />
              仲間との語らいにも、少人数の集まりにも。
              <br className="hidden md:block" />
              20名以下なら貸切もご相談いただけます。
            </p>
          </div>
        </Section>

        {/* 営業案内 */}
        <Separator />
        <Section id="hours">
          <h2 className="section-heading text-2xl md:text-3xl text-hh-cream mb-10 text-center">
            営業案内
          </h2>
          <div className="max-w-sm mx-auto space-y-5 font-gothic text-base leading-[1.8]">
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
            <div className="flex gap-6">
              <span className="text-hh-amber/70 whitespace-nowrap min-w-[5em] text-sm">
                予算
              </span>
              <span className="text-hh-cream-dim">3,000円〜4,000円</span>
            </div>
          </div>
        </Section>

        {/* アクセス */}
        <Separator />
        <Section id="access">
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
