import './globals.css'
import { inter } from './fonts'

export const metadata = {
  title: 'Ramón Rosa - Full Stack Developer',
  description: 'Ramón Rosa es un ingeniero de software enfocado en el desarrollo web y con conocimientos de Full Stack. Mi pasión es llevar a cabo las ideas del cliente y convertirlas en una realidad, además de trabajar por mejorar la experiencia de los usuarios día a día.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
