import cn from '../../../utils/cn';
import HeroActions from './HeroActions';

const Header = () => {
  const containerStyling = cn('flex h-full flex-col');
  const titleContainerStyling = cn('flex flex-col');
  const heroActionsContainer = cn('pb-space-2xs my-auto');

  const titleStyling = cn('text-text-heading pt-space-2xs font-bold');

  const subtitleStyling = cn(
    'text-text-subtitle mb-space-2xs text-[8px] font-light tracking-tighter',
  );

  const descriptionStyling = cn(
    'text-text-subtitle w-[75%] text-[6px] font-semibold text-balance',
  );

  return (
    <div className={containerStyling}>
      <div className={titleContainerStyling}>
        <h1 className={titleStyling}>MileMetrics</h1>

        <p className={subtitleStyling}>The smarter way to track every mile</p>

        <p className={descriptionStyling}>
          Log your drives, organize your records, and get IRS-ready reports -
          all in one place
        </p>
      </div>

      <div className={heroActionsContainer}>
        <HeroActions />
      </div>
    </div>
  );
};

export default Header;
