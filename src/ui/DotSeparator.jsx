import cn from '../utils/cn';

const DotSeparator = ({ renderAs = 'span', className }) => {
  const Element = renderAs;

  return (
    <Element
      aria-hidden='true'
      className={cn('text-(length:--font-8px) text-gray-400', className)}
    >
      •
    </Element>
  );
};

export default DotSeparator;
