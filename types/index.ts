//Types and interfaces needed for components/pages
export type Language = 'en' | 'es'

export interface LayoutProps {
  params: { lng: Language }
  children: React.ReactNode
}

export interface ParamsProps {
  params: { lng: Language }
}

export interface SearchParamsProps {
  params: { lng: Language }
  searchParams: { [key: string]: string | undefined }
}

export interface UrlQueryParams {
  params: string
  key: string
  value: string | null
}

export interface RemoveUrlQueryParams {
  params: string
  keysToRemove: string[]
}
