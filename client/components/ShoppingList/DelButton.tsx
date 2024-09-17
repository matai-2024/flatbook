import useShop from '../../hooks/useShop'

interface Props {
  flatId: string
  itemId: number
}

export default function DelButton({ flatId, itemId }: Props) {
  const { delMutation } = useShop(flatId)

  const handleDelItem = () => {
    delMutation.mutateAsync(itemId)
  }

  return (
    <button
      onClick={handleDelItem}
      className="btn btn-square btn-outline"
      data-testid={`delete-item-button`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}
