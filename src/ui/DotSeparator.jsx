import cn from '../utils/cn';

const DotSeparator = ({ renderAs = 'span', className }) => {
  const Element = renderAs;

  return (
    <Element aria-hidden='true' className={className}>
      •
    </Element>
  );
};

export default DotSeparator;
