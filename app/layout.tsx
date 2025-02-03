import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Head from "next/head"
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
        <Header />
        <main className="flex-grow pl-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

