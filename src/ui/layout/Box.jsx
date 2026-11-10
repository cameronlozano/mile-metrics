import cn from '../../utils/cn';

const Box = ({
  children,
  render,

  height,
  width,

  margin,
  padding,

  border,
  borderStyles,

  background,

  className,
}) => {
  const Element = render ?? 'div';
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
