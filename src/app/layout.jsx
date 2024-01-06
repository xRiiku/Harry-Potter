import ContextProvider from '@/context/context'
import './globals.css'

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
      <body>
        <ContextProvider>
          {children}
        </ContextProvider> 
      </body>
    </html>
  )
}
