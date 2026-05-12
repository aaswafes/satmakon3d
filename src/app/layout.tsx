import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LocaleProvider } from "@/lib/locale-context";
import { Splash } from "@/components/splash";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAT Makon — Harvard, MIT, Stanford boshlanishi shu yerda",
  description:
    "1500+ ball kafolati bilan SAT va AP tayyorlov markazi. Haftada 3 dars, 5 kishilik guruh, 300+ talaba 1500+ ball oldi. Toshkent · Buxoro · Guliston · Navoiy.",
  metadataBase: new URL("https://satmakon.uz"),
  icons: {
    icon: "/satmakon-shield.png",
    apple: "/satmakon-shield.png",
  },
  openGraph: {
    title: "SAT Makon — 1500+ ball kafolati",
    description:
      "300+ talaba 1500+ ball oldi. Harvard, MIT, Stanford eshigi shu yerdan ochiladi.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">
        <Splash />
        <SmoothScroll />
        <LocaleProvider>
          {children}
          <div className="grain" aria-hidden />
        </LocaleProvider>
      </body>
    </html>
  );
}
