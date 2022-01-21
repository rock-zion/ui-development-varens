      <Searchbar />
      <Header />
Home.defaultProps = {
  new_customers_data: {
    link: {
      href: '/',
      title: 'View More Customers',
    },
    data: [
      {
        profile_image: null,
        customer_id: 'ID#00224',
        first_name: 'Aiden',
        last_name: 'Murray',
      },
      {
        profile_image:
          'https://res.cloudinary.com/rock-zion/image/upload/v1642741576/ben-parker-OhKElOkQ3RE-unsplash.jpg',
        customer_id: 'ID#00223',
        first_name: 'Manuel',
        last_name: 'Morrison',
      },
      {
        profile_image:
          'https://res.cloudinary.com/rock-zion/image/upload/v1642741591/almos-bechtold-3402kvtHhOo-unsplash.jpg',
        customer_id: 'ID#00222',
        first_name: 'Jennie',
        last_name: 'Fowler',
      },
      {
        profile_image:
          'https://res.cloudinary.com/rock-zion/image/upload/v1642741612/stefan-stefancik-QXevDflbl8A-unsplash.jpg',
        customer_id: 'ID#00221',
        first_name: 'Jared',
        last_name: 'Hawkins',
      },
      {
        profile_image:
          'https://res.cloudinary.com/rock-zion/image/upload/v1642741653/jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
        customer_id: 'ID#00220',
        first_name: 'Rena',
        last_name: 'Sanders',
      },
    ],
  },
  transaction_history_data: {
    link: {
      href: '/',
      title: 'View All Transactions',
    },
    data: [
      {
        invoice_no: '#1032',
        status: 'success',
        date_time: 'Jan 21, 2019, 3:30p,',
        amount: '$250.00',
        remark: 'Completed',
      },
      {
        invoice_no: '#1033',
        status: 'failed',
        date_time: 'Jan 21, 2019, 3:30p,',
        amount: '$250.00',
        remark: 'Declined',
      },
      {
        invoice_no: '#1034',
        status: 'pending',
        date_time: 'Jan 20, 2019, 3:30p,',
        amount: '$250.00',
        remark: 'Pending',
      },
      {
        invoice_no: '#1035',
        status: 'success',
        date_time: 'Jan 21, 2019, 3:30p,',
        amount: '$250.00',
        remark: 'Completed',
      },
      {
        invoice_no: '#1036',
        status: 'success',
        date_time: 'Jan 21, 2019, 3:30p,',
        amount: '$250.00',
        remark: 'For Pickup',
      },
    ],
  },
};
