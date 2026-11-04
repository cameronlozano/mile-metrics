import cn from '../../utils/cn';

const Stack = ({
  renderAs = 'div',
  children,

  spacing,
  alignment,

  className,
}) => {
  const Element = renderAs;

  return (
    <Element
      className={cn(
        'flex flex-col justify-start',
        alignment,
        spacing,
        className,
      )}
    >
      {children}
    </Element>
  );
};

export default Stack;
