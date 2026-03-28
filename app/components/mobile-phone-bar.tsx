"use client";

import { MapPinIcon } from "./section";

export function MobilePhoneBar() {
  return (
    <div className="mobile-phone-bar hidden max-md:block">
      <a
        href="https://www.google.com/maps/search/焼肉居酒屋+hanahana+釧路市末広町5-3-2"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 py-2 text-hh-cream font-antique text-lg tracking-wider"
      >
        <MapPinIcon />
        <span>アクセス</span>
      </a>
    </div>
  );
}
