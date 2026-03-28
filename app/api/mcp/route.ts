import { NextResponse } from "next/server";

const SHOP_INFO = {
  name: "焼肉・居酒屋 hanahana",
  genre: "焼肉・ジンギスカン・居酒屋",
  address: "北海道釧路市末広町5-3-2",
  hours: {
    weekday: "月〜木・日 17:00〜22:00",
    weekend: "金・土 17:00〜23:00",
  },
  closed_days: "不定休（事前予約で対応可）",
  access: "JR釧路駅から徒歩約7分",
  seats: "36席（4名席×9卓）",
  private_booking: "可（20名以下）",
  service_charge: "500円",
  price_range: "3,000〜4,000円",
  website: "https://hp-hanahana.vercel.app",
  google_maps:
    "https://www.google.com/maps/search/焼肉居酒屋+hanahana+釧路市末広町5-3-2",
};

export async function GET() {
  return NextResponse.json({
    jsonrpc: "2.0",
    result: {
      name: "hanahana-mcp",
      version: "1.0.0",
      description: "焼肉・居酒屋 hanahana 店舗情報API",
      capabilities: {
        tools: [
          {
            name: "get_shop_info",
            description: "焼肉・居酒屋 hanahanaの店舗情報を取得します",
          },
        ],
      },
      shop_info: SHOP_INFO,
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (body.method === "get_shop_info") {
    return NextResponse.json({
      jsonrpc: "2.0",
      id: body.id,
      result: SHOP_INFO,
    });
  }

  return NextResponse.json(
    {
      jsonrpc: "2.0",
      id: body.id,
      error: { code: -32601, message: "Method not found" },
    },
    { status: 400 }
  );
}
