import { Controller } from 'react-hook-form';
import cn from '../../../utils/cn';
import RadioTile from '../../../ui/RadioTile';
import { BriefcaseBusinessIcon, HeartHandshakeIcon, User } from 'lucide-react';

const FormTiles = ({ control, index }) => {
  return (
    <Controller
      control={control}
      name={`locations.${index}.category`}
      rules={{
        required: 'Please select a category for all locations',
      }}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <RadioTile
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            onBlur(e);
          }}
          fieldState={fieldState}

          label='category'
          options={[
            {
              value: 'personal',
              content: (
                <>
                  <User
                    size={19}
                    className='mr-auto group-data-selected:text-emerald-600'
                  />
                  <p className='ml-auto'>Personal</p>
                </>
              ),
            },
            {
              value: 'business',
              content: (
                <>
                  <BriefcaseBusinessIcon
                    size={19}
                    className='mr-auto group-data-selected:text-emerald-600'
                  />
                  <p className='ml-auto'>Business</p>
                </>
              ),
            },

            {
              value: 'charity',
              content: (
                <>
                  <HeartHandshakeIcon
                    size={19}
                    className='mr-auto group-data-selected:text-emerald-600'
                  />
                  <p className='ml-auto'>Charity</p>
                </>
              ),
            },
          ]}
          classNames={{
            radioGroup: cn('flex justify-center gap-25'),
            radioLabel: cn('sr-only'),
            radioField: cn(''),
            radioButton: cn(
              'group flex cursor-pointer place-items-center gap-2 rounded-sm border border-gray-300 px-5 py-1.5 text-sm tracking-tighter text-gray-500 transition-all duration-90 hover:scale-105 active:scale-90 active:text-gray-400 data-focus-visible:ring-2 data-focus-visible:ring-emerald-500 data-hovered:scale-105 data-hovered:text-gray-600 data-selected:border-emerald-600 data-selected:bg-emerald-100/50 data-selected:font-medium data-selected:text-emerald-700',
              fieldState.invalid && 'border-red-500',
            ),

            textInputContainer: cn(
              'group w-40 rounded-sm border border-gray-300 py-1 focus-within:border-emerald-600 data-selected:border-emerald-600',
              fieldState.invalid && 'border-red-500',
            ),
            textInput: cn(
              'group font-medium text-gray-500 group-data-selected:text-emerald-700 focus-within:text-emerald-700 data-selected:placeholder:text-gray-400',
            ),
            textInputSVG: cn(
              'text-gray-500 transition-all duration-90 group-focus-within:text-emerald-700 group-data-selected:text-emerald-700',
            ),
            fieldError: cn(
              'absolute top-40 left-35.25 text-[0.625rem] tracking-tighter text-nowrap text-red-500',
            ),
          }}
        />
      )}
    />
  );
};

export default FormTiles;
