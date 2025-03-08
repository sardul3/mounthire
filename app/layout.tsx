import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mount Hire LLC - Expert IT Career Guidance",
  description:
    "Boost your IT career with expert guidance in Software Engineering, Data Analysis, and Full-Stack Development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'