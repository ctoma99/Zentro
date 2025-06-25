import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ZentroAI',
  description: 'Boost your productivity with AI prompt kits',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
