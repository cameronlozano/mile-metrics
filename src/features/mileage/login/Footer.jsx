import cn from '../../../utils/cn';

const Footer = () => {
  // #region styles
  const containerStyles = cn(
    'px-space-sm pb-space-2xs flex w-full items-end justify-between',
  );

  const textStyles = cn('text-text-faint flex text-[8px]');
  // #endregion styles

  return (
    <div className={containerStyles}>
      <p className={textStyles}>Mileage Tracking</p>

      <p className={textStyles}>International use supported</p>
    </div>
  );
};

export default Footer;
