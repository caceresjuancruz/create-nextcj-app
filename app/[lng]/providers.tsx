'use client'

import ModalProvider from '@/providers/ModalProvider'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import ThemeProvider from '@/providers/ThemeProvider'

export function Providers({
  children,
  lng
}: {
  children: React.ReactNode
  lng: string
}) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange
    >
      <ReactQueryProvider>
        {children}
        <ModalProvider lng={lng} />
      </ReactQueryProvider>
    </ThemeProvider>
  )
}
