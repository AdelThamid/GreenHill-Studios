import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const font = Inter(
  { subsets: ["latin"],
    weight: '400'
  }
);

 
export const metadata: Metadata = {
  title: "GreenHill Studios",
  description: "Generated by create KenzaiX Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {

  return (
    <html lang="en">
      <body
        className={font.className}
      >
        
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/1adc1242-9710-423e-b3c3-883dda56807d/webchat/config.js" defer></script>
        {children}
      </body>
    </html>
  );
}