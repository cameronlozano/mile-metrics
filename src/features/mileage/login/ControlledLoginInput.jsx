import { Controller } from 'react-hook-form';

import { useLoginContext } from './LoginContext';

import TextInput from '../../../ui/TextInput';
import handleError from '../../../utils/handleError';

const ControlledLoginInput = ({ mode, inputConfig = {} }) => {
  const { control } = useLoginContext();
  const { icons = {}, classNames = {} } = inputConfig;

  if (mode == null)
    handleError('ControlledLoginInput requires a mode argument', {
      control,
      mode,
      inputConfig,
    });

  const loginFieldConfig = {
    //
    // Email config
    email: {
      name: 'email',
      id: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'you@example.com',

      rules: {
        required: 'Please provide your email',
      },

      InputSvg: icons.email?.inputSvg || icons.inputSvg,

      ErrorSvg: icons.email?.fieldErrorSvg || icons.fieldErrorSvg,

      className: {
        textField: classNames.email?.textField || classNames.textField,

        inputGroup: classNames.email?.inputGroup || classNames.inputGroup,

        label: classNames.email?.label || classNames.label,

        input: classNames.email?.input || classNames.input,

        description: classNames.email?.description || classNames.description,

        fieldErrorGroup:
          classNames.email?.fieldErrorGroup || classNames.fieldErrorGroup,

        fieldError: classNames.email?.fieldError || classNames.fieldError,
      },
    },

    // Password config
    password: {
      name: 'password',
      id: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',

      rules: {
        required: 'Please provide your password',
      },

      InputSvg: icons.password?.inputSvg || icons.inputSvg,

      ErrorSvg: icons.password?.fieldErrorSvg || icons.fieldErrorSvg,

      className: {
        textField: classNames.password?.textField || classNames.textField,

        inputGroup: classNames.password?.inputGroup || classNames.inputGroup,

        label: classNames.password?.label || classNames.label,

        input: classNames.password?.input || classNames.input,

        description: classNames.password?.description || classNames.description,

        fieldErrorGroup:
          classNames.password?.fieldErrorGroup || classNames.fieldErrorGroup,

        fieldError: classNames.password?.fieldError || classNames.fieldError,
      },
    },
  };

  const {
    name,
    type,
    id,
    rules,

    label,
    placeholder,

    InputSvg,
    ErrorSvg,

    className,
  } = loginFieldConfig[mode];

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}

      render={({ field, fieldState: { invalid, error } }) => (
        //
        <TextInput
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          ref={field.ref}

          id={id}
          type={type}
          label={label}
          placeholder={placeholder}

          InputSvg={InputSvg}
          ErrorSvg={ErrorSvg}

          classNames={className}

          invalid={invalid}
          errorMessage={error?.message}
        />
      )}
    />
  );
};

export default ControlledLoginInput;
