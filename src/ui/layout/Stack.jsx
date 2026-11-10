import cn from '../../utils/cn';

const Stack = ({
  render = 'div',
  children,

  spacing,
  alignment,

  className,
}) => {
  const Element = render;

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
