import ContextProvider from '@/context/context'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'HP-Fans',
  description: 'Web de información de Harry Potter con quiz y ranking!!',
  icons: {
    icon: '/icon.ico'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='overflow-x-hidden w-screen h-screen'>
        <ContextProvider>
        <Header/>
          {children}
        </ContextProvider> 
        <Footer/>
      </body>
    </html>
  )
}
