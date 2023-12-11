import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import StyledComponentsRegistry from './../lib/registry'

const roboto = Roboto({ 
  weight: ['400', '700'], 
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Rocketseat class',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className} style={{margin: 0, padding:0}}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
