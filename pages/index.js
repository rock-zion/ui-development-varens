import { Header } from 'components/header';
import { Overview } from 'components/overview';
import style from 'styles/overview.module.scss';
import classNames from 'classnames';
import { RevenueVsOrders } from 'components/revenue-vs-orders';
import { TrafficChannels } from 'components/trafficchannels';
import { Transaction } from 'components/cards/transaction';
import { NewCustomer } from 'components/profiles/new_customer';
import { TransactionHistory } from 'components/profiles/transaction_history';
import { BarChart } from 'components/charts/barchart';
import { default as SmGain } from 'assets/SmGain.svg';
import { default as SmLoss } from 'assets/SmLoss.svg';
import { CountryTrafficChannels } from 'components/trafficchannels/country_traffic_channels';
import { TopProducts } from 'components/trafficchannels/topproducts';
import { Searchbar } from 'components/header/searchbar';

export default function Home({
  new_customers_data: nc_data,
  transaction_history_data: th_data,
}) {
  const revenue_row_wrapper = classNames(
    style.revenue_row_wrapper,
    'mt-3',
    'mb-2'
  );

  const customers_row_wrapper = classNames(style.customers_row_wrapper, 'mt-3');
  return (
    <div>
      <Searchbar />
      <Header />
      <Overview />
      <div className={revenue_row_wrapper}>
        <RevenueVsOrders />
        <TrafficChannels />
      </div>
      <div className={style.traffic_channels_wrapper}>
        <CountryTrafficChannels />
        <TopProducts />
      </div>
      <div className={customers_row_wrapper}>
        <Transaction
          link={nc_data.link}
          hasToolbar
          hasFooter
          title='New Customers'>
          {nc_data.data.map(item => (
            <NewCustomer
              key={item.customer_id}
              profile_image={item?.profile_image}
              first_name={item?.first_name}
              last_name={item?.last_name}
              customer_id={item?.customer_id}
            />
          ))}
        </Transaction>

        <Transaction
          link={th_data.link}
          hasToolbar
          hasFooter
          title='Transaction Customers'>
          {th_data.data.map(item => (
            <TransactionHistory
              date_time={item?.date_time}
              key={item?.invoice_no}
              invoice_no={item?.invoice_no}
              status={item?.status}
              remark={item?.remark}
              amount={item?.amount}
            />
          ))}
        </Transaction>
        <Transaction title='Real-Time Sale'>
          <div className='d-flex justify-content-between mb-4'>
            <div className='d-flex flex-column'>
              <span className='text-secondary display-2 fw-normal mb-1'>
                Refunded
              </span>
              <div className='d-flex align-items-center'>
                <span className='fw-bolder display-4 mr-1'> $160,200</span>
                <SmGain />
                <span className='display-1 fw-normal ml-1'>0.20%</span>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <span className='text-secondary display-2 fw-normal mb-1'>
                Avg. Sales per day
              </span>
              <div className='d-flex align-items-center'>
                <span className='fw-bolder display-4 mr-1'>$22,180</span>
                <SmLoss />
                <span className='display-1 fw-normal ml-1'>1.04%</span>
              </div>
            </div>
          </div>
          <div className='d-flex flex-column'>
            <div className={style.barchart_wrapper}>
              <BarChart />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <span
                className={classNames(
                  style.labels_tday,
                  'd-flex',
                  'align-items-center',
                  'display-2'
                )}>
                Today
              </span>
              <span
                className={classNames(
                  style.labels_yday,
                  'd-flex',
                  'align-items-center',
                  'display-2',
                  'ml-3'
                )}>
                Yesterday
              </span>
            </div>
          </div>
        </Transaction>
      </div>
    </div>
  );
}

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
