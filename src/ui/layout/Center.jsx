import cn from '../../utils/cn';

const Center = ({ children, maxInlineSize = 'max-inline-fit', className }) => {
  return (
    <div className={cn('mx-auto box-content', maxInlineSize, className)}>
      {children}
    </div>
  );
};

export default Center;
