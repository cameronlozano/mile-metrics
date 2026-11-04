import cn from '../../utils/cn';
const Cluster = ({
  children,
  renderAs = 'div',

  justify = 'justify-start',
  wrap = 'flex-wrap',
  gap = 'gap-y-0 gap-x-0',
}) => {
  // Allows polymorphic rendering.
  const Element = renderAs;

  return (
    <Element className={cn(`flex items-center`, gap, justify, wrap)}>
      {children}
    </Element>
  );
};

export default Cluster;
