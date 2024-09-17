import { ShoppingItem } from '../../../types/Shop'
import useShop from '../../hooks/useShoppingList'
import AddItem from './AddItem'
import DelButton from './DelButton'

interface Props {
  flatId: string
}

export default function ShopList({ flatId }: Props) {
  const { data: shopList, isLoading, isError, error } = useShop(flatId)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !shopList) {
    return <p>Failed {String(error)}</p>
  }

  if (shopList) {
    // render shopping list
    return (
      <>
        <AddItem flatId={flatId} />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            {shopList.map((listItem: ShoppingItem) => (
              <tbody key={listItem.id}>
                {/* row 1 */}
                <tr className="hover">
                  <th></th>
                  <th></th>
                  <td>{listItem.productName}</td>
                  <th>{listItem.quantity}</th>
                  <th>
                    <DelButton flatId={flatId} itemId={listItem.id} />
                  </th>
                  <th></th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </>
    )
  } else {
    return <p>No data...</p>
  }
}
