import USAMap from 'react-usa-map';
  const statesCustomConfig = () => {
    return {
      CA: {
        fill: '#5542F6',
        clickHandler: event =>
          console.log('Custom handler for NJ', event.target.dataset),
      },
      TX: {
        fill: '#5542F6',
      },
      NY: {
        fill: '#5542F6',
      },
      WA: {
        fill: '#5542F6',
      },
      KA: {
        fill: '#5542F6',
      },
    };
  };

  const mapHandler = event => {
    alert(event.target.dataset.name);
  };
      <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
      <div className={style.ct_table_wrapper}>
        <table className='table table-hove table-borderless'>
          <thead>
            <tr>
              <th
                className='border-bottom display-1 fw-bold text-secondary p-0 pb-2'
                scope='col-1'>
                STATE
              </th>
              <th
                className='border-bottom display-1 fw-bold text-secondary p-0 pb-2'
                scope='col-1'>
                ORDERS
              </th>
              <th
                className='p-0 pb-2 border-bottom display-1 fw-bold text-secondary d-flex justify-content-end'
                scope='col-1'>
                SALES
              </th>
            </tr>
          </thead>
          <tbody>
            {table_content.map(item => (
              <tr key={item.orders}>
                <td className='display-2 fw-bold text-dark'>{item.country}</td>
                <td className='display-2 fw-normal text-dark'>
                  {formatNum(item.orders)}
                </td>
                <td className='display-2 fw-normal text-dark d-flex justify-content-end'>
                  ${formatNum(item.sales)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
CountryTrafficChannels.defaultProps = {
  table_header: ['STATES', 'ORDERS', 'SALES'],
  table_content: [
    {
      country: 'California',
      orders: 12202,
      sales: 150200,
    },
    {
      country: 'Texas',
      orders: 11950,
      sales: 147715,
    },
    {
      country: 'New York',
      orders: 11198,
      sales: 120322,
    },
    {
      country: 'Washington',
      orders: 9885,
      sales: 119008,
    },
    {
      country: 'Kansas',
      orders: 8560,
      sales: 102803,
    },
  ],
};
