import { useState } from 'react';
import {
  FieldError,
  Input,
  Label,
  Text,
  TextField,
} from 'react-aria-components';

const TextInput = ({
  value,
  onChange,
  onBlur,
  id,
  ref,

  invalid,
  errorMessage,

  type = 'text',
  label,
  placeholder,
  description,

  InputSvg,
  ErrorSvg,

  classNames = {},
  //
}) => {
  //
  const [defaultValue, setDefaultValue] = useState('');

  // If given onChange + value args, use them otherwise use internal state
  const isControlledInput = value != null && onChange != null;

  return (
    <TextField
      // Is controlled or uncontrolled?
      {...(isControlledInput
        ? { value, onChange }
        : { defaultValue, onChange: setDefaultValue })}

      className={classNames.textField}
      onBlur={onBlur}
      ref={ref}
      type={type}

      isInvalid={invalid}
    >
      <Label htmlFor={id} className={classNames.label}>
        {label}
      </Label>

      <div className={classNames.inputGroup(invalid)}>
        {InputSvg && InputSvg(invalid)}

        <Input placeholder={placeholder} className={classNames.input} />
      </div>

      {description && (
        <Text className={classNames.description} slot='description'>
          {description}
        </Text>
      )}

      <div className={classNames.fieldErrorGroup}>
        {ErrorSvg && invalid && ErrorSvg}

        <FieldError className={classNames.fieldError}>
          {errorMessage}
        </FieldError>
      </div>
    </TextField>
  );
};

export default TextInput;
