import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BackgroundBeams } from "./components/BackgroundBeams"
import type { Metadata } from "next"
import type React from "react" // Added import for React

export const metadata: Metadata = {
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
      <body className="min-h-screen flex flex-col relative">
        <BackgroundBeams />
        <Header />
        <main className="flex-grow pl-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

