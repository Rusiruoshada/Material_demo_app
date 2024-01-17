import type { Metadata } from 'next'
import Navbar from '../component/Navbar/Navbar';
import './globals.css'
import StoreProvider from './StoreProvider';


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
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
