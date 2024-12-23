import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: "ClipRiZe　～あなたをバズらせる切り抜き動画制作～",
  description: "ClipRiZe　あなたをバズらせる切り抜き動画制作",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
