  const sizes = classNames(
    'bg-light_blue text-white',
    { [`${style.sm_img_wrapper}`]: size === 'sm' },
    { [`${style.lg_img_wrapper}`]: size === 'lg' }
  );
