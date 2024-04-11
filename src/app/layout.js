import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  
  title: 'Portfolio de Ziyad Ossart',
  description: 'Court portfolio de Ziyad Ossart, étudiant en informatique à l\'école Enigma.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
