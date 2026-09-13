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

  type = 'text',
  label,
  placeholder,
  description,
  Svg,
  svgSize,

  classNames = {},
}) => {
  const [defaultValue, setDefaultValue] = useState('');

  const isControlledInput = value != null && onChange != null;

  return (
    <TextField
      // If given onChange + value args, use them else use internal state
      {...(isControlledInput
        ? { value, onChange }
        : { defaultValue, onChange: setDefaultValue })}
      className={classNames.textField}
      onBlur={onBlur}
      ref={ref}
      type={type}
    >
      <div className={classNames.inputGroup}>
        <Label htmlFor={id} className={classNames.label}>
          {label}
        </Label>

        <Input placeholder={placeholder} className={classNames.input} />
        {Svg && Svg}
      </div>

      {description && (
        <Text className={classNames.description} slot='description'>
          {description}
        </Text>
      )}

      <FieldError className={classNames.fieldError} />
    </TextField>
  );
};

export default TextInput;
