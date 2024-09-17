import { ShoppingItemData } from '../../../types/Shop'

interface Props {
  setNewItem: React.Dispatch<
    React.SetStateAction<{
      shoppingListId: number
      productName: string
      quantity: number
    }>
  >
  newItem: ShoppingItemData
  quantity: number
}

export default function Quantity({ setNewItem, newItem, quantity }: Props) {
  const handleChangeQuantity = (direction: string): void => {
    let newQ = quantity

    if (direction === 'plus') {
      newQ++
    } else if (direction === 'minus' && newQ > 1) {
      newQ--
    }

    setNewItem({ ...newItem, quantity: newQ })
  }

  return (
    <div className="mb-4 ml-4 flex flex-row content-center justify-center pb-4">
      <div className="flex flex-col">
        <button onClick={() => handleChangeQuantity('plus')}>
          <svg
            className="h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
          </svg>
        </button>
        <input
          type="button"
          name="quantity"
          onChange={() => handleChangeQuantity}
          value={quantity}
        />
        <button onClick={() => handleChangeQuantity('minus')}>
          <svg
            className="h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
