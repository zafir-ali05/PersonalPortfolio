import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head"
import { Squares } from "./components/ui/squares-background"
import type React from "react"

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
        <div className="fixed inset-0 z-0">
          <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
        </div>
        <Header />
        <main className="flex-grow pl-16 relative z-10">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}

