import { Inter } from 'next/font/google'
import Header from "@/components/Header/page"
import Footer from "@/components/Footer/page"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
       <main className=' min-h-screen'>
          {children}
       </main>
        <Footer/>
        </body>
    </html>
  )
}
