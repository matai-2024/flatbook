export default function Bills() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Bill Name</th>
            <th>Category</th>
            <th>Due Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Electricity</td>
            <td>Utilities</td>
            <td>20-11-2024</td>
            <td>$120.00</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Rent</td>
            <td>Housing</td>
            <td>01-11-2024</td>
            <td>$1,200.00</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Internet</td>
            <td>Utilities</td>
            <td>10-11-2024</td>
            <td>$60.00</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>4</th>
            <td>Water</td>
            <td>Utilities</td>
            <td>15-11-2024</td>
            <td>$30.00</td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>5</th>
            <td>Friday Dinner</td>
            <td>Fun</td>
            <td>25-09-2024</td>
            <td>$90.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
