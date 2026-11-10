import cn from '../../utils/cn';

const Grid = ({ children, render, gap, minWidth = '250px', className }) => {
  const Element = render ?? 'div';

  return (
    <Element
      style={{ '--minimum': minWidth }}
      className={cn(
        'grid grid-cols-[repeat(auto-fit,minmax(min(var(--minimum),100%),1fr))]',
        'place-items-center',
        gap,
        className,
      )}
    >
      {children}
    </Element>
  );
};

export default Grid;
