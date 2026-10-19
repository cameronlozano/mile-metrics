import { isFuture, isValid } from 'date-fns';
import { CalendarFold } from 'lucide-react';
import { Controller } from 'react-hook-form';

import Asterisk from '../../../ui/Asterisk';
import Calendar from '../../../ui/Calendar';
import DatePicker from '../../../ui/DatePicker';
import cn from '../../../utils/cn';

import { useFormContext } from './FormContext';

const FormDatePicker = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name='date'

      rules={{
        required: 'Please select a date',
        validate: (value) => {
          const { day, month, year } = value;
          const inputDate = new Date(year, month - 1, day);

          if (isFuture(inputDate))
            return 'Selected Dates cannot be in the future';

          if (!isValid(inputDate)) return 'Date is an invalid date';
        },
      }}

      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <DatePicker
          id='date'
          label='Date'

          value={value}
          onChange={onChange}
          onBlur={onBlur}

          isInvalid={fieldState.invalid}
          fieldState={fieldState}

          classNames={{
            container: cn('w-full'),

            label: cn('pb-space-2xs relative flex justify-center'),

            group: cn(
              'border-border-muted px-space-2xs py-space-xs gap-space-2xs text-text-subtitle mx-auto flex w-full rounded-sm border bg-white text-[10px]',
              fieldState.invalid && 'border-border-error',
            ),
            input: cn('flex justify-center'),

            segment: cn('text-text-heading rounded-xs'),

            placeholder: cn(
              'rounded-xs text-gray-400 transition-all duration-100 outline-none focus-visible:ring-3 focus-visible:ring-emerald-500 focus-visible:ring-offset-1',
            ),
            fieldError: cn(
              'absolute top-2 left-14.5 text-[0.625rem] tracking-tighter text-nowrap text-red-500',
              fieldState.error?.message.length > 20 && 'left-5.75',
            ),
          }}
        >
          {/* DATE PICKER */}
          <DatePicker.Popover
            placement='start'
            offset={85}
            crossOffset={20}
            triggerClassName={cn(
              'rounded-xs transition-all duration-100 outline-none focus-visible:ring-3 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
            )}
            trigger={
              <CalendarFold
                className={cn('text-svg-default cursor-pointer')}
                size={14}
              />
            }
            content={
              <Calendar
                classNames={{
                  container:
                    'flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-slate-50 py-2.5 shadow-md',
                  headerGroup: 'flex items-center justify-evenly gap-1.5',
                  calendarHeader: 'text-lg font-semibold text-gray-500',
                  calendarHeaderCell: cn('font-medium text-gray-500'),
                  arrowLeft:
                    'cursor-pointer outline-none focus-visible:ring-3 rounded-sm focus-visible:ring-emerald-500 text-gray-500 active:text-slate-400',
                  arrowRight:
                    'cursor-pointer outline-none focus-visible:ring-3 rounded-sm focus-visible:ring-emerald-500 text-slate-500 active:text-slate-400',
                  calendarCell:
                    'grid size-9 cursor-pointer place-items-center rounded-full text-sm text-gray-500 data-hovered:rounded-full data-hovered:bg-slate-300 data-hovered:font-medium data-hovered:text-slate-600 data-outside-month:cursor-default data-outside-month:opacity-0 data-today:rounded-full data-today:bg-blue-200/70 data-today:font-medium data-today:text-slate-600 data-pressed:bg-slate-200 data-selected:bg-green-300 data-selected:text-slate-600 data-today:data-hovered:bg-slate-300 data-today:data-pressed:bg-slate-200 data-today:data-selected:bg-green-300 data-selected:data-pressed:bg-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
                }}
              />
            }
          />
        </DatePicker>
      )}
    />
  );
};

export default FormDatePicker;
