import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Noto_Serif_JP,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-jp-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-jp-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Club Distiny | 最高の女、ここに集まる。",
  description:
    "Club Distiny（クラブ ディスティニー）— 都会の夜に存在する会員制高級キャバクラ。妖艶で洗練された特別な一夜を。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${playfair.variable} ${cormorant.variable} ${notoSerifJP.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-ivory overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
