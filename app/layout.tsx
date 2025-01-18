import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Zafir Ali - Portfolio',
  description: 'Personal portfolio showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-violet-900 to-sky-900">
        <Header />
        <main className="flex-grow pl-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

