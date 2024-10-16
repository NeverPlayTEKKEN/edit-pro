import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClipRiZe　～あなたをバズらせる切り抜き動画制作～",
  description: "ClipRiZe　あなたをバズらせる切り抜き動画制作",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
