import './globals.css';

export const metadata = {
  title: 'ZentroAI',
  description: 'Boost your productivity with AI prompt kits',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
