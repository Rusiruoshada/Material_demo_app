import type { Metadata } from 'next'
import Navbar from '../component/Navbar/Navbar';
import Providers from '../providers/providers'
import './globals.css'


export const metadata: Metadata = {
  title: 'Lyvivo',
  description: 'All in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  )
}
