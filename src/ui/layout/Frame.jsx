import cn from '../../utils/cn';

const Frame = ({
  children,
  renderAs,
  aspectRatio = 'aspect-[16/9]',
  className,
}) => {
  const Element = renderAs ?? 'div';

  return (
    <Element
      className={cn(
        'flex w-full items-center justify-center overflow-hidden',
        aspectRatio,
        className,
      )}
    >
      {children}
    </Element>
  );
};

export default Frame;
