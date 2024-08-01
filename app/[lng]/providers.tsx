'use client'

import { ModalProvider } from '../../providers/ModalProvider'

export function Providers({
  children,
  lng
}: {
  children: React.ReactNode
  lng: string
}) {
  return (
    <>
      {children}
      <ModalProvider lng={lng} />
    </>
  )
}
