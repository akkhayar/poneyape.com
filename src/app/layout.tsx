import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import LenisWrapper from "@/lib/lenis-wrapper";
import Footer from "@/components/common/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "poneyape",
  description: "Poneyape",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className={`${inter.className} ${poppins.variable} ${roboto.variable}`}>
        <Header />
        <LenisWrapper>{children}</LenisWrapper>
        <Footer />
        <script
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
