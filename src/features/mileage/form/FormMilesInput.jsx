import { useFormContext } from './FormContext';
import ControlledNumericField from '../../../ui/ControlledNumericField';
import handleError from '../../../utils/handleError';
import cn from '../../../utils/cn';

import FieldLabel from '../../../ui/FieldLabel';
import Asterisk from '../../../ui/Asterisk';
import { Icon } from '@iconify/react';

const FormMilesInput = ({ mode }) => {
  const { control } = useFormContext();

  if (mode == null)
    handleError('FormMilesInput requires a mode to be set', {
      control,
      mode,
    });

  const inputStyling = (fieldState) =>
    cn(
      'border-border-muted py-space-xs text-text-subtitle w-full rounded-sm border bg-white text-center text-[10px] focus:ring-3 focus:ring-emerald-500 focus:outline-none focus-visible:ring-offset-2',
      fieldState.invalid && 'border-border-error',
    );

  const configLookup = {
    // INITIAL STYLING
    initial: {
      inputName: 'initialMiles',
      id: 'initial-odometer',

      placeholder: 'Starting miles...',
      labelText: 'Initial Miles',

      rules: {
        required: 'Please provide the starting odometer value',
        validate: (initialMiles, { endingMiles }) => {
          const hasInitialMiles = initialMiles !== null;
          const hasEndingMiles = endingMiles !== null;

          if (!hasInitialMiles) return 'Please provide the initial miles';
          if (initialMiles < 0)
            return 'Initial Miles can not be a negative number';

          if (hasEndingMiles && initialMiles >= endingMiles)
            return 'Ending miles must be greater than starting miles';

          return true;
        },
      },

      svg: () => (
        <Icon
          icon='solar:spedometer-low-broken'
          className={cn('text-svg-default')}
        />
      ),

      className: inputStyling,
      asteriskStyling: cn('top-0 -right-0.5'),
    },

    // ENDING STYLING
    ending: {
      inputName: 'endingMiles',
      id: 'odometer-end',

      placeholder: 'Ending miles...',
      labelText: 'Ending Miles',

      rules: {
        required: 'Please provide the ending odometer value',
        validate: (endingMiles, { initialMiles }) => {
          const hasEndingMiles = endingMiles !== null;
          const hasInitialMiles = initialMiles !== null;

          if (!hasEndingMiles) return 'Please provide the ending miles';

          if (endingMiles < 0)
            return 'Ending miles cannot be a negative number';

          if (hasInitialMiles && endingMiles <= initialMiles)
            return 'Ending miles must be greater than starting miles';

          return true;
        },
      },

      svg: () => (
        <Icon
          icon='solar:spedometer-max-broken'
          className={cn('text-svg-default')}
        />
      ),

      className: inputStyling,
      asteriskStyling: cn('top-0 right-3'),
    },
  };

  const {
    labelText,
    inputName,
    rules,
    id,
    placeholder,
    svg,
    className,
    asteriskStyling,
  } = configLookup[mode];

  return (
    <div className='flex flex-col text-center'>
      <FieldLabel className='relative text-center' htmlFor={id}>
        <Asterisk className={asteriskStyling} />
        {labelText}
      </FieldLabel>

      <ControlledNumericField
        control={control}
        name={inputName}
        rules={rules}
        id={id}
        placeholder={placeholder}
        svg={svg}
        className={className}
      />
    </div>
  );
};

export default FormMilesInput;
