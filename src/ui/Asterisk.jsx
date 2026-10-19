import cn from '../utils/cn';

const Asterisk = ({ className }) => {
  return (
    <span
      aria-hidden={true}
      className={cn('text-svg-dark absolute scale-70 text-xs', className)}
    >
      *
    </span>
  );
};

export default Asterisk;
