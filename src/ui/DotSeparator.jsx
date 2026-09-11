import cn from '../utils/cn';

const DotSeparator = ({ renderAs = 'span', className }) => {
  const Element = renderAs;

  return (
    <Element
      aria-hidden='true'
      className={cn('text-[0.625rem] text-gray-500', className)}
    >
      •
    </Element>
  );
};

export default DotSeparator;
