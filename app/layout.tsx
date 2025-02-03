import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head"
import { BackgroundBeams } from "./components/BackgroundBeams"
import type React from "react" // Added import for React

export const metadata = {
  title: "Zafir Ali - Portfolio",
  description: "Personal portfolio showcasing projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen flex flex-col relative">
        <BackgroundBeams />
        <Header />
        <main className="flex-grow pl-16 relative z-10">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}

