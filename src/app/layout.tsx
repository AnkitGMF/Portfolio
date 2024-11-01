import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ankit Khurana',
  description: 'Portfolio Website of Ankit Khurana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      
<Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
<Script id='analytics'>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${JSON.stringify(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)});`}
</Script>
      <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
