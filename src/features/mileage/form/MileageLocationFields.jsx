import { Controller, useWatch } from 'react-hook-form';
import Select from '../../../ui/Select';
import useGetGeoOptions from '../../../hooks/useGetGeoOptions';
import { ChevronUp } from 'lucide-react';
import cn from '../../../utils/cn';
import Asterisk from '../../../ui/Asterisk';

const MileageLocationFields = ({ control, index, resetField }) => {
  const { countries, regions, localities } = useGetGeoOptions(control, index);

  const selectedCountry = useWatch({
    control,
    name: `locations.${index}.country`,
  });

  const selectedRegion = useWatch({
    control,
    name: `locations.${index}.region`,
  });

  const sharedSelectProps = {
    toggleIndicator: (
      <ChevronUp
        size={20}
        className='text-gray-500 transition-all group-data-open:rotate-540'
      />
    ),
    classNames: {
      container: cn('group font-data w-50'),
      label: cn(
        'text-md relative pb-1 text-center font-medium text-nowrap text-gray-600/90',
      ),
      input: (fieldState) =>
        cn(
          'group w-50 cursor-pointer border border-gray-200 p-1.5 text-center text-sm text-slate-400 outline-none placeholder:text-gray-400 hover:bg-slate-100',
          fieldState.invalid && 'border-red-500',
        ),
      optionsPanel: cn(
        'z-50 max-h-60 w-50 cursor-pointer overflow-y-auto rounded-md border border-gray-300 bg-gray-50 py-0.5 text-center outline-none',
      ),
      option: cn(
        'px-1 py-0.5 text-sm text-gray-600 capitalize hover:bg-slate-100 hover:text-slate-700 active:bg-slate-200 data-focused:bg-emerald-200',
      ),
      fieldErrorContainer: 'relative',
      fieldError: cn(
        'absolute top-8.5 right-10 text-[0.625rem] tracking-tighter text-nowrap text-red-500',
      ),
      selectedInput: cn('text-gray-700'),
    },
  };

  return (
    <>
      {/* COUNTRY */}
      <div className='relative'>
        <Asterisk className='top-px right-15.5' />

        <Controller
          control={control}
          name={`locations.${index}.country`}
          rules={{
            required: 'Please select the country...',
          }}
          render={({ field, fieldState }) => {
            return (
              <Select
                {...sharedSelectProps}
                options={countries.map((country) => country.name)}
                optionsMessage='Select a country...'
                label='Country'
                inputPlaceholder='Select a country...'
                value={field.value}
                onChange={(value) => {
                  resetField(`locations.${index}.region`);
                  resetField(`locations.${index}.locality`);
                  field.onChange(value);
                }}
                fieldState={fieldState}
              />
            );
          }}
        />
      </div>
      {/* REGION */}
      <Controller
        control={control}
        name={`locations.${index}.region`}
        rules={{ required: 'Please select the region...' }}
        render={({ field, fieldState }) => {
          return (
            <div className='relative'>
              <Asterisk className='top-px right-16.75' />

              <Select
                {...sharedSelectProps}
                options={regions.map((region) => region.name)}
                label={'Region'}
                optionsMessage={
                  !selectedCountry
                    ? 'Select a country...'
                    : regions.length < 1
                      ? 'No regions found...'
                      : 'Select a region...'
                }
                inputPlaceholder={'Select a region...'}
                value={field.value}
                onChange={(value) => {
                  resetField(`locations.${index}.locality`);

                  field.onChange(value);
                }}
                fieldState={fieldState}
              />
            </div>
          );
        }}
      />
      {/* LOCALITY */}
      <Controller
        control={control}
        name={`locations.${index}.locality`}
        rules={{ required: 'Please select the locality' }}
        render={({ field, fieldState }) => (
          <div className='relative'>
            <Asterisk className='right-15.5' />

            <Select
              {...sharedSelectProps}
              options={localities.map((locality) => locality.name)}
              label={'Locality'}
              optionsMessage={
                !selectedCountry
                  ? 'Select a country...'
                  : !selectedRegion
                    ? 'Select a region...'
                    : localities.length < 1
                      ? 'No localities found...'
                      : 'Select a locality...'
              }
              inputPlaceholder={'Select a locality...'}
              value={field.value}
              onChange={field.onChange}
              fieldState={fieldState}
            />
          </div>
        )}
      />
    </>
  );
};

export default MileageLocationFields;
