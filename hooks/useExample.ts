//use tanstack query for client side requests
import { example } from '@/actions/example.action'
import { useQuery } from '@tanstack/react-query'

export const useExample = () => {
  return useQuery({
    queryKey: ['example'],
    queryFn: () => example()
  })
}
