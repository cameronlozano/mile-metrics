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
      'border border-gray-400 bg-emerald-600 px-3 py-3.5 font-semibold tracking-wider text-white',
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
