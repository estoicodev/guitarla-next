import './globals.css'
import './normalize.css'
import { outfit } from './fonts'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { GlobalStateProvider } from '../context/GlobalContext';

export const metadata = {
  title: {
    default: 'GuitarLA Shop',
    template: 'GuitarLA - %s',
  },
  description: 'GuitarLA Shop in Los Angeles, CA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <GlobalStateProvider>
          <div className='app'>
            <Header />
            {children}
            <Footer />
          </div>
        </GlobalStateProvider>
      </body>
    </html>
  )
}
