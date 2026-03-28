import type { Metadata } from "next";
import Image from "next/image";
import { Section, Separator } from "../components/section";
import { Footer } from "../components/footer";
import { MobilePhoneBar } from "../components/mobile-phone-bar";

export const metadata: Metadata = {
  title: "メニュー | 焼肉・居酒屋 hanahana",
  description:
    "焼肉・居酒屋 hanahanaのメニュー。焼肉・ジンギスカン・居酒屋料理を幅広くご用意。",
};

function MenuCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; price: string }[];
}) {
  return (
    <div className="mb-12">
      <h3 className="font-antique text-lg md:text-xl text-hh-amber tracking-wider mb-6 text-center">
        {title}
      </h3>
      <div className="max-w-md mx-auto">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline justify-between py-3 border-b border-hh-amber/10 last:border-b-0"
          >
            <span className="font-antique text-base md:text-lg tracking-wider text-hh-cream">
              {item.name}
            </span>
            <span className="font-gothic text-sm md:text-base text-hh-cream-dim/70 ml-4 whitespace-nowrap">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <main className="pt-14">
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&h=800&fit=crop&q=80"
            alt="焼肉イメージ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <h1 className="relative z-10 section-heading text-3xl md:text-5xl text-hh-cream text-center">
            メニュー
          </h1>
        </section>

        <Separator />

        {/* メニュー写真 */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            <div className="overflow-hidden rounded aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&q=80"
                alt="お肉イメージ"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=400&fit=crop&q=80"
                alt="肉料理イメージ"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded aspect-square hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=400&fit=crop&q=80"
                alt="料理イメージ"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        <Separator />

        {/* メニュー一覧 */}
        <Section>
          <MenuCategory
            title="焼肉"
            items={[
              { name: "カルビ", price: "時価" },
              { name: "上カルビ", price: "時価" },
              { name: "ロース", price: "時価" },
              { name: "ハラミ", price: "時価" },
              { name: "タン塩", price: "時価" },
            ]}
          />

          <MenuCategory
            title="ジンギスカン"
            items={[
              { name: "ラムジンギスカン", price: "時価" },
              { name: "マトンジンギスカン", price: "時価" },
              { name: "味付けジンギスカン", price: "時価" },
            ]}
          />

          <MenuCategory
            title="ホルモン"
            items={[
              { name: "ホルモン（味噌）", price: "時価" },
              { name: "レバー", price: "時価" },
              { name: "ハツ", price: "時価" },
            ]}
          />

          <MenuCategory
            title="居酒屋メニュー"
            items={[
              { name: "枝豆", price: "時価" },
              { name: "冷奴", price: "時価" },
              { name: "キムチ盛り合わせ", price: "時価" },
              { name: "ナムル盛り合わせ", price: "時価" },
              { name: "サラダ", price: "時価" },
              { name: "ライス", price: "時価" },
            ]}
          />

          <MenuCategory
            title="ドリンク"
            items={[
              { name: "生ビール", price: "時価" },
              { name: "瓶ビール", price: "時価" },
              { name: "ハイボール", price: "時価" },
              { name: "焼酎各種", price: "時価" },
              { name: "日本酒", price: "時価" },
              { name: "サワー各種", price: "時価" },
              { name: "ソフトドリンク", price: "時価" },
            ]}
          />

          <p className="text-center text-hh-cream-dim/40 text-xs mt-8 font-gothic tracking-wider">
            価格は税込です。仕入れ状況により内容・価格が変更になる場合がございます。
            <br />
            別途サービス料 500円を頂戴しております。
          </p>
        </Section>
      </main>

      <Footer />
      <MobilePhoneBar />
    </>
  );
}
