//Types and interfaces needed for components/pages
export interface LayoutProps {
  params: { lng: string }
  children: React.ReactNode
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
