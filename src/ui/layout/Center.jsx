import cn from '../../utils/cn';

const Center = ({ render, children, width = 'max-inline-fit', className }) => {
  const Element = render ?? 'div';

  return (
    <Element className={cn('mx-auto box-content', width, className)}>
      {children}
    </Element>
  );
};

export default Center;
