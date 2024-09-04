'use client'

import { Language } from '@/types'
import { useEffect, useState } from 'react'

interface ModalProviderProps {
  lng: Language
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
