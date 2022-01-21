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
