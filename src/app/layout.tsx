import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider, ThemeProvider } from "@/shared/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Find Work Test App",
  description: "Made for Find Work Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html
        lang="en"
        className="h-full w-full"
        style={{ scrollbarGutter: "stable" }}
        suppressHydrationWarning
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased p-2 md:py-4 md:px-6`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
