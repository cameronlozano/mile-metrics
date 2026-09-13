import { Controller } from 'react-hook-form';
import handleError from '../../../utils/handleError';
import cn from '../../../utils/cn';
import { LockKeyhole, Mail } from 'lucide-react';
import TextInput from '../../../ui/TextInput';
import { useLoginContext } from './LoginContext';

const ControlledLoginInput = ({ mode }) => {
  if (mode == null)
    handleError('Input requires a mode argument', {
      control,
      mode,
    });

  const { control } = useLoginContext();

  const loginFieldConfig = {
    // USERNAME CONFIG
    username: {
      name: 'username',
      rules: {
        required: 'Please provide your username',
      },
      id: 'username',
      type: 'email',
      label: 'Email Address',
      placeholder: 'you@example.com',
      Svg: (
        <Mail
          aria-hidden='true'
          size={21}
          className='text-color-field-label absolute bottom-4.25 left-4.5'
        />
      ),
      className: {
        textField: cn(''),

        inputGroup: cn('relative flex flex-col gap-1.5'),

        label: cn('text-color-field-label pl-0.75 font-medium'),

        input: cn(
          'placeholder:text-color-field-placeholder w-110 rounded-lg border border-slate-200 bg-white px-14 py-3.5 text-gray-800 placeholder:tracking-wide',
        ),
      },
    },

    // PASSWORD CONFIG
    password: {
      name: 'password',
      rules: {
        required: 'Please provide your password',
      },
      id: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      Svg: (
        <LockKeyhole
          aria-hidden='true'
          size={21}
          className='text-color-field-label absolute bottom-4.25 left-4.5'
        />
      ),
      className: {
        textField: cn(''),

        inputGroup: cn('relative flex flex-col gap-1.5'),

        label: cn('text-color-field-label pl-0.75 font-medium'),

        input: cn(
          'placeholder:text-color-field-placeholder w-110 rounded-lg border border-slate-200 bg-white px-14 py-3.5 text-gray-800 placeholder:tracking-wide',
        ),
      },
    },
  };

  const { name, rules, id, type, label, placeholder, Svg, className } =
    loginFieldConfig[mode];

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}

      render={({ field, fieldState }) => (
        <TextInput
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          id={id}
          ref={field.ref}

          type={type}
          label={label}
          placeholder={placeholder}
          Svg={Svg}

          classNames={className}
        />
      )}
    />
  );
};

export default ControlledLoginInput;
