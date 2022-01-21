export const Search = () => {
  return (
    <input
      className={classNames(style.search_input, 'border-0 ml-2')}
      type='text'
      placeholder='Search...'
    />
  );
};
