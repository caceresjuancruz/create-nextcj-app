'use client'

import { useEffect, useState } from 'react'

interface ModalProviderProps {
  lng: string
}

export default function ModalProvider({ lng }: ModalProviderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <></>
}
