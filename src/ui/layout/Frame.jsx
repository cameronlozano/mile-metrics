import cn from '../../utils/cn';

const Frame = ({
  aspectRatio = 'aspect-[16/9]',
  border,
  borderStyles,
  className,

  children,
  render,
}) => {
  const Element = render ?? 'div';

  return (
    <Element
      className={cn(
        'flex w-full items-center justify-center overflow-hidden',
        aspectRatio,
        border,
        borderStyles,
        className,
      )}
    >
      {children}
    </Element>
  );
};

export default Frame;
