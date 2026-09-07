import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

const ControlledNumericField = ({
  control,
  name,
  rules,
  id,
  className,
  placeholder,
  svg,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        // If given a fn, provide fn with fieldState
        const resolver = (prop) =>
          typeof prop === 'function' ? prop(fieldState) : prop;

        const resolvedClassName = resolver(className);
        const resolvedSvg = resolver(svg);
        console.log(fieldState.error);
        return (
          <div className='relative flex flex-col'>
            <div className='absolute top-1/2 left-1 -translate-y-2'>
              {resolvedSvg}
            </div>

            {console.log({ invalid: fieldState.invalid })}

            <div className='pb-1'>
              <NumericFormat
                id={id}
                name={field.name}
                value={field.value ?? ''}
                onBlur={field.onBlur}
                thousandSeparator=','
                className={resolvedClassName}
                placeholder={placeholder}
                onValueChange={(values) => field.onChange(values.floatValue)}
              />

              {fieldState.error && (
                <p className='absolute top-10 left-0 text-[0.625rem] text-nowrap text-red-600'>
                  {fieldState.error.message}
                </p>
              )}
            </div>
          </div>
        );
      }}
    />
  );
};

export default ControlledNumericField;
