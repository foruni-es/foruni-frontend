import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'foruni',
  description: 'La plataforma de comunicación para la comunidad universitaria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full bg-gray-100">
      <body className={`h-full ${inter.className}`}>{children}</body>
    </html>
  )
}
