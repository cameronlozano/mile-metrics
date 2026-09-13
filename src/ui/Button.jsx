import { twMerge } from 'tailwind-merge';
import { Button as reactAriaButton } from 'react-aria-components';
import cn from '../utils/cn';

export default function Button({
  type = 'button',
  disabled = false,
  className = '',
  children,
  onClick,
  variant,
  renderAs,
  to,
}) {
  let variantStyling;
  const stylingLookup = {
    submit: cn(
      'text-md bg-color-brand-primary hover:bg-color-brand-primary-darker active:bg-color-brand-primary-muted rounded-lg border px-3 py-3.5 text-center font-bold tracking-wider text-white ring-offset-2 transition-all duration-100 outline-none hover:cursor-pointer focus-visible:ring-3 focus-visible:ring-emerald-600 focus-visible:ring-offset-3 active:scale-95',
    ),
  };

  if (variant != null) variantStyling = stylingLookup[variant];

  const Element = renderAs ?? reactAriaButton;

  return (
    <Element
      type={type}
      disabled={disabled}
      to={to}
      className={twMerge(
        'w-full cursor-pointer transition-all duration-100',
        variant && variantStyling,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Element>
  );
}
