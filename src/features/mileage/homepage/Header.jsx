import Center from '../../../ui/layout/Center';
import cn from '../../../utils/cn';

const Header = () => {
  const titleStyling = cn('text-text-heading text-6xl leading-tight font-bold');

  const subtitleStyling = cn(
    'text-text-subtitle text-lg font-medium tracking-tight',
  );

  return (
    <Center width='w-full text-center'>
      <h1 className={titleStyling}>MileMetrics</h1>

      <p className={subtitleStyling}>The smarter way to track every mile</p>
    </Center>
  );
};

export default Header;
