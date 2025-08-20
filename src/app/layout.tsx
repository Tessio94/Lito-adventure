import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LoadingSpinner from "@/components/LoadingSpinner";

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
    icon: "/logo-favicon.svg",
  },
  openGraph: {
    title: "Lito bike tours • Zadar",
    description: "Discover Zadar like never before with our guided bike tours!",
    url: "https://lito-adventure.com",
    images: [
      {
        url: "https://lito-adventure.com/cover2.jpg",
        width: 1920,
        height: 1080,
        alt: "Grad Zadar",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <LoadingSpinner />
        {children}
      </body>
    </html>
  );
}
