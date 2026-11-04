import cn from '../../utils/cn';

const Box = ({
  children,
  renderAs,

  height,
  width,

  margin,
  padding,

  border,
  borderStyles,

  background,

  className,
}) => {
  const Element = renderAs ?? 'div';
  return (
    <Element
      className={cn(
        height,
        width,

        padding,
        margin,

        border,
        borderStyles,

        background,
        className,
      )}
    >
      {children}
    </Element>
  );
};

export default Box;
