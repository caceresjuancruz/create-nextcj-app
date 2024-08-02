//Types and interfaces needed for components/pages
export type Language = 'en' | 'es'

export interface LayoutProps {
  params: { lng: string }
  children: React.ReactNode
}

export interface ParamsProps {
  params: { lng: string }
}

export interface SearchParamsProps {
  params: { lng: string }
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
