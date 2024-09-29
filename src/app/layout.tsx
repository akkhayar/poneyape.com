import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import LenisWrapper from "@/lib/lenis-wrapper";
import Footer from "@/components/common/Footer";
import { FirebaseProvider } from "@/context/firebaseContext";
import Head from "next/head";
import { Inter, Poppins, Roboto } from "next/font/google";

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
      <body
        className={`${inter.className} ${poppins.variable} ${roboto.variable}`}
      >
        <FirebaseProvider>
          <Header />
          <LenisWrapper>{children}</LenisWrapper>
          <Footer />
        </FirebaseProvider>
        <script
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
