'use client'

import ModalProvider from '@/providers/ModalProvider'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

export function Providers({
  children,
  lng
}: {
  children: React.ReactNode
  lng: string
}) {
  return (
    <>
      <ReactQueryProvider>
        {children}
        <ModalProvider lng={lng} />
      </ReactQueryProvider>
    </>
  )
}
