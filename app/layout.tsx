import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { UnlockProvider } from "@/context/UnlockContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Real Estate",
  description: "Experience premium living in the heart of the city",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UnlockProvider>
          {children}
        </UnlockProvider>
      </body>
    </html>
  )
}



import './globals.css'