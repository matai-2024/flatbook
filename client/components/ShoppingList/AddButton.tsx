import { ShoppingItemData } from '../../../types/Shop'
import useShop from '../../hooks/useShoppingList'

interface Props {
  setNewItem: React.Dispatch<
    React.SetStateAction<{
      shoppingListId: number
      productName: string
      quantity: number
    }>
  >
  newItem: ShoppingItemData
  defaultItem: ShoppingItemData
}

export default function AddButton({ setNewItem, newItem, defaultItem }: Props) {
  const { addMutation } = useShop(String(newItem.shoppingListId))

  const handleAddItem = () => {
    addMutation.mutateAsync(newItem)
    setNewItem(defaultItem)
  }

  return (
    <button onClick={handleAddItem} className="btn btn-square mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  )
}
