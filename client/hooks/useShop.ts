import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ShoppingItem, ShoppingItemData } from '../../types/Shop'
import { addShopItem, delShopItem, getShoppingList } from '../apis/shop'

function useShop(flatId: string) {
  const { getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['shopping-list'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const shoppingList = await getShoppingList(accessToken, flatId)
      return shoppingList as ShoppingItem[]
    },
  })

  const addMutation = useMutation({
    mutationFn: async (item: ShoppingItemData) => {
      const accessToken = await getAccessTokenSilently()
      return await addShopItem(accessToken, item)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['shopping-list'] })
    },
  })

  const delMutation = useMutation({
    mutationFn: async (itemId: number) => {
      const accessToken = await getAccessTokenSilently()
      return await delShopItem(accessToken, flatId, itemId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['shopping-list'] })
    },
  })

  return { data, isLoading, isError, error, addMutation, delMutation }
}

export default useShop
