import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bangers = localFont({
  src: [
    {
      path: "fonts/Bangers-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const lato = localFont({
  src: [
    {
      path: "fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--lato",
});

export const metadata: Metadata = {
  title: "Lito bike tours • Zadar",
  description:
    "Discover Zadar like never before with our guided bike tours! We're a team of young, enthusiastic locals passionate about combining outdoor adventure with unforgettable sightseeing experiences.",
  icons: {
    icon: "/header-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bangers.className} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
