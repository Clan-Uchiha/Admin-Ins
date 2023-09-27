import './globals.css'
import type { Metadata } from 'next'
import { Urbanist} from 'next/font/google'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'D-Validate',
  description: 'D-Validate is a Block Chain based Digital Certificate Validation System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
