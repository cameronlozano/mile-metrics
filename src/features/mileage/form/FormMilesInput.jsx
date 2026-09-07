import { Icon } from '@iconify/react';
import FieldLabel from '../../../ui/FieldLabel';
import handleError from '../../../utils/handleError';
import ControlledNumericField from '../../../ui/ControlledNumericField';
import Asterisk from '../../../ui/Asterisk';

const FormMilesInput = ({ control, mode, getValues }) => {
  if (mode == null)
    handleError('FormMilesInput requires a mode to be set', {
      control,
      mode,
    });
  if (control == null)
    handleError('FormMilesInput requires a control argument', {
      control,
      mode,
    });

  const inputStyling =
    'w-50 rounded-sm border border-gray-200 bg-white py-1.5 text-center text-sm text-gray-600 transition-all duration-100 focus:ring-3 focus:ring-emerald-500 focus:outline-none focus-visible:ring-offset-2';

  const configLookup = {
    initial: {
      labelText: 'Initial Miles',
      inputName: 'initialMiles',
      rules: {
        required: 'Please provide the starting odometer value',
      },
      id: 'initial-odometer',
      placeholder: 'Starting miles...',
      svg: (
        <Icon icon='solar:spedometer-low-broken' className='text-gray-400' />
      ),
      className: inputStyling,
      asteriskStyling: 'top-0 right-13.5 ',
    },

    ending: {
      labelText: 'Ending Miles',
      inputName: 'endingMiles',
      rules: {
        required: 'Please provide the ending odometer value',
        validate: (value) =>
          Number(value) > Number(getValues('initialMiles')) ||
          'Ending miles must be greater than starting miles',
      },
      id: 'odometer-end',
      placeholder: 'Ending miles...',
      svg: (
        <Icon icon='solar:spedometer-max-broken' className='text-gray-400' />
      ),
      className: inputStyling,
      asteriskStyling: ' top-0 right-11.75 ',
    },
  };

  const {
    labelText,
    inputName,
    required,
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
        <Asterisk className={asteriskStyling || ''} />
        {labelText}
      </FieldLabel>

      <ControlledNumericField
        control={control}
        name={inputName}
        rules={required}
        id={id}
        placeholder={placeholder}
        svg={svg}
        className={className}
      />
    </div>
  );
};

export default FormMilesInput;
