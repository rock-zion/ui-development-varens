const LinkItem = React.forwardRef(
  ({ getActiveColor, linkIsActive, text, onClick, IMG, href }, ref) => {
    //
    const link_wrapper = classNames('d-flex', 'px-3', style.link_wrapper, {
      'bg-primary_light text-dark': linkIsActive(href),
    });

    const link = classNames(
      style.link,
      'text-secondary',
      'd-flex',
      'align-items-center',
      {
        'text-dark': linkIsActive(href),
      }
    );

    return (
      <div className={link_wrapper} ref={ref}>
        <div className='d-flex'>
          <div className='mr-3 align-items-center'>
            <IMG fill={getActiveColor(href)} />
          </div>
          <a className={link} onClick={onClick} href={href}>
            {text}
          </a>
        </div>
      </div>
    );
  }
);
Sidebar.defaultProps = {
  sidebar_links: [
    { title: 'Overview', url: '/overview', IMG: Overview },
    { title: 'Product', url: '/products', IMG: Products },
    { title: 'Orders', url: '/orders', IMG: Orders },
    { title: 'Customers', url: '/customers', IMG: Customers },
    { title: 'Manage Reviews', url: '/managereviews', IMG: ManageReviews },
    { title: 'Checkout', url: '/checkout', IMG: Checkout },
    { title: 'Settings', url: '/settings', IMG: Setting },
  ],
};

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react
