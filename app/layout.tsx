import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import SmoothScroll from "./context/ScrollProviderContext";
import NavBar from "./components/NavBar";

const belanosima = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-belanosima",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${belanosima.className} dark antialiased`}>
        <>
          <SmoothScroll>
            <main style={{ background: "linear-gradient(to right, #2e026d, #15162c)" }} className="main-container">
              <NavBar />
              {children}
            </main>
          </SmoothScroll>
        </>
      </body>
    </html>
  );
}
