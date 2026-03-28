import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";

const BASE_URL = "https://hp-hanahana.vercel.app";

export const metadata: Metadata = {
  title: "焼肉・居酒屋 hanahana | 北海道釧路市末広町",
  description:
    "北海道釧路市末広町の焼肉・居酒屋 hanahana。焼肉・ジンギスカンと居酒屋料理を楽しめるお店。36席、貸切可。月〜木・日 17:00-22:00 / 金・土 17:00-23:00。",
  keywords: ["焼肉", "居酒屋", "ジンギスカン", "hanahana", "釧路", "末広町", "北海道"],
  openGraph: {
    title: "焼肉・居酒屋 hanahana | 北海道釧路市末広町",
    description:
      "焼肉・ジンギスカンと居酒屋料理を楽しめるお店。36席、貸切可。JR釧路駅から徒歩7分。",
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    images: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "焼肉・居酒屋 hanahana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "焼肉・居酒屋 hanahana | 北海道釧路市末広町",
    description:
      "焼肉・ジンギスカンと居酒屋料理を楽しめるお店。36席、貸切可。",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=630&fit=crop&q=80",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "焼肉・居酒屋 hanahana",
  image:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=630&fit=crop&q=80",
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "末広町5-3-2",
    addressLocality: "釧路市",
    addressRegion: "北海道",
    postalCode: "",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.975,
    longitude: 144.374,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "17:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "23:00",
    },
  ],
  servesCuisine: ["焼肉", "ジンギスカン", "居酒屋"],
  priceRange: "$$",
  acceptsReservations: true,
  hasMenu: `${BASE_URL}/menu`,
  maximumAttendeeCapacity: 36,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
