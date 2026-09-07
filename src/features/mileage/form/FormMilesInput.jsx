import { Icon } from '@iconify/react';
import FieldLabel from '../../../ui/FieldLabel';
import handleError from '../../../utils/handleError';
import ControlledNumericField from '../../../ui/ControlledNumericField';
import Asterisk from '../../../ui/Asterisk';
import cn from '../../../utils/cn';
import { useFormContext } from './FormContext';

const FormMilesInput = ({ mode }) => {
  const { control } = useFormContext();

  if (mode == null)
    handleError('FormMilesInput requires a mode to be set', {
      control,
      mode,
    });

  const inputStyling = (fieldState) =>
    cn(
      'w-50 rounded-sm border border-gray-200 bg-white py-1.5 text-center text-sm text-gray-600 transition-all duration-100 focus:ring-3 focus:ring-emerald-500 focus:outline-none focus-visible:ring-offset-2',
      fieldState.invalid && 'border-red-500',
    );
  const configLookup = {
    // INITIAL STYLING
    initial: {
      labelText: 'Initial Miles',
      inputName: 'initialMiles',
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
      id: 'initial-odometer',
      placeholder: 'Starting miles...',
      svg: () => (
        <Icon
          icon='solar:spedometer-low-broken'
          className={cn('text-gray-400')}
        />
      ),
      className: inputStyling,
      asteriskStyling: cn('top-0 right-13.5'),
    },

    // ENDING STYLING
    ending: {
      labelText: 'Ending Miles',
      inputName: 'endingMiles',
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
      id: 'odometer-end',
      placeholder: 'Ending miles...',
      svg: () => (
        <Icon
          icon='solar:spedometer-max-broken'
          className={cn('text-gray-400')}
        />
      ),
      className: inputStyling,
      asteriskStyling: cn('top-0 right-11.75'),
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
    <div className='flex flex-col gap-1 text-center'>
      <FieldLabel
        className='text-md relative text-center'
        htmlFor='initial-odometer'
      >
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
