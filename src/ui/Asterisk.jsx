import cn from '../utils/cn';

const Asterisk = ({ className }) => {
  return (
    <span
      aria-hidden={true}
      className={cn('absolute text-xs text-gray-600', className)}
    >
      *
    </span>
  );
};

export default Asterisk;
