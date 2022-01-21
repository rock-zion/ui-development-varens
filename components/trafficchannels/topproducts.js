      <table className='mt-auto table table-hove table-borderless'>
        <thead>
          <tr>
            <th className={tr_th} scope='col-1'>
              ITEM
            </th>
            <th className={tr_th} scope='col-1'>
              CHANGE
            </th>
            <th className={tr_th} scope='col-1'>
              PRICE
            </th>
            <th className={tr_th} scope='col-1'>
              SOLD
            </th>
            <th className={tr_th} scope='col-1'>
              SALES
            </th>
          </tr>
        </thead>
        <tbody>
          {table_content.map(item => (
            <tr key={item.item} className={table_row}>
              <td className={tr_td}>{item.item}</td>
              <td className={tr_td}>
                {item.gain ? <SmGain /> : <SmLoss />}
                {item.change}%
              </td>
              <td className={tr_td}>${item.price}</td>
              <td className={tr_td}>{formatNum(item.sold)}</td>
              <td className={tr_td}>${formatNum(item.sales)}</td>
            </tr>
          ))}
        </tbody>
      </table>
