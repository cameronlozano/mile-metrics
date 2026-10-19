import {
  DatePicker as AriaDatePicker,
  Button as AriaButton,
  DateInput,
  DateSegment,
  FieldError,
  Group,
} from 'react-aria-components';

import FieldLabel from './FieldLabel';

import {
  Popover as AriaPopover,
  DialogTrigger,
} from 'react-aria-components/Popover';

import cn from '../utils/cn';
import Asterisk from './Asterisk';

const DatePicker = ({
  value,
  onChange,
  onBlur,
  isInvalid,
  fieldState,

  id,
  label,
  children,
  classNames = {},
}) => {
  return (
    <AriaDatePicker
      isInvalid={isInvalid}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={classNames.container}
    >
      <FieldLabel className={classNames.label}>
        {label}

        <Asterisk className='absolute -top-0.5 right-11.5' />
      </FieldLabel>

      <Group className={cn('relative flex items-center', classNames.group)}>
        {children}
        <DateInput id={id} className={cn(classNames.input)}>
          {(segment) => (
            <DateSegment
              segment={segment}
              className={({ isPlaceholder }) =>
                cn(
                  segment.type === 'literal' ? 'px-px' : '',
                  isPlaceholder ? classNames.placeholder : classNames.segment,
                )
              }
            />
          )}
        </DateInput>
      </Group>

      <FieldError className='relative'>
        <p className={classNames.fieldError}>
          {fieldState.error?.message ?? ''}
        </p>
      </FieldError>
    </AriaDatePicker>
  );
};

const Popover = ({
  trigger,
  content,
  placement,
  offset,
  crossOffset,
  triggerClassName,
}) => {
  return (
    <DialogTrigger>
      <AriaButton className={cn(triggerClassName)}>{trigger}</AriaButton>

      <AriaPopover
        className='absolute'
        placement={placement}
        offset={offset}
        crossOffset={crossOffset}
      >
        {content}

        <div className='absolute -bottom-12 left-2 flex flex-col gap-1.5 text-xs text-nowrap text-gray-600'>
          <p className='flex gap-1.5'>
            <span className='size-4 rounded-full bg-blue-300' />
            <span className='font-medium'>Today</span>
          </p>

          <p className='flex gap-1.5'>
            <span className='size-4 rounded-full bg-emerald-400/85' />
            <span className='font-medium capitalize'>selected date</span>
          </p>
        </div>
      </AriaPopover>
    </DialogTrigger>
  );
};

DatePicker.Popover = Popover;

export default DatePicker;
