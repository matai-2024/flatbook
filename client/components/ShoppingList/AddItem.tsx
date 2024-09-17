import { useState } from 'react'
import AddButton from './AddButton'
import { ShoppingItemData } from '../../../types/Shop'
import Quantity from './Quantity'

interface Props {
  flatId: string
}

export default function AddItem({ flatId }: Props) {
  const defaultItem: ShoppingItemData = {
    shoppingListId: +flatId,
    productName: '',
    quantity: 1,
  }

  const [newItem, setNewItem] = useState<ShoppingItemData>(defaultItem)

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
  > = (event) => {
    const { name, value } = event.target
    setNewItem((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <div className="flex flex-row justify-center gap-4">
      <Quantity
        setNewItem={setNewItem}
        newItem={newItem}
        quantity={newItem.quantity}
      />
      <input
        name="productName"
        value={newItem.productName}
        onChange={handleChange}
        type="text"
        placeholder="Add item..."
        className="bg-link input mr-4 mt-2 rounded-none border-[0] border-b border-[#cccccc] px-3   py-3 text-lg text-[#444444] focus:outline-none focus:outline-none focus:outline-none"
      />
      <AddButton
        setNewItem={setNewItem}
        newItem={newItem}
        defaultItem={defaultItem}
      />
    </div>
  )
}
