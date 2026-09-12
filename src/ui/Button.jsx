import { twMerge } from 'tailwind-merge';
import { Button as BaseUIButton } from '@base-ui/react/button';
import cn from '../utils/cn';

export default function Button({
  type = 'button',
  disabled = false,
  className = '',
  children = '',
  onClick = undefined,
  variant,
}) {
  let variantStyling;
  const stylingLookup = {
    primary: cn(
      'border border-gray-400 bg-emerald-600/90 px-3 py-3.5 font-semibold tracking-wider text-white transition-all duration-100 outline-none hover:bg-emerald-600 focus-visible:ring-3 focus-visible:ring-emerald-600 focus-visible:ring-offset-3 active:scale-95 active:bg-emerald-600/70',
    ),
  };

  if (variant != null) variantStyling = stylingLookup[variant];

  return (
    <BaseUIButton
      type={type}
      disabled={disabled}
      className={twMerge(
        'flex cursor-pointer rounded-full text-center text-sm transition-all duration-100',
        className,
        variant && variantStyling,
      )}
      onClick={onClick}
    >
      {children}
    </BaseUIButton>
  );
}
