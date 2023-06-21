
import './globals.css'
import { Inter } from 'next/font/google'
import ScrollToTopButton from './scrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Landing Page and Newsletter',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <ScrollToTopButton />
    </html>
  )
}
