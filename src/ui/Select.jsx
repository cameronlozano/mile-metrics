import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
  Button,
  ComboBox,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from 'react-aria-components';
import cn from '../utils/cn';

const Select = ({
  options,
  value,
  onChange,
  optionsMessage,
  inputPlaceholder,
  label,
  toggleIndicator = <ChevronDown />,
  classNames = {},
}) => {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options?.filter((option) =>
          option.toLowerCase().includes(query.toLowerCase()),
        );

  const hasOptions = filteredOptions.length > 0;

  return (
    <ComboBox
      menuTrigger='focus'
      className={classNames.container}
      value={value}
      onChange={(value) => {
        onChange(value);
        setQuery(value ?? '');
      }}
      inputValue={query}
      onInputChange={setQuery}
    >
      <div className='relative flex flex-col'>
        {label && <Label className={classNames.label}>{label}</Label>}

        <Group>
          <Input
            spellCheck={false}
            autoCorrect='false'
            placeholder={inputPlaceholder || '...select an option...'}
            className={cn(
              `w-full rounded-sm bg-white ${toggleIndicator ? 'pr-8' : ''}`,
              classNames.input,
              value && classNames.selectedInput,
            )}
          />
          <Button>
            {toggleIndicator && (
              <span className='absolute top-8.5 -right-8 flex cursor-pointer items-center px-2'>
                {toggleIndicator}
              </span>
            )}
          </Button>
        </Group>

        <Popover>
          <ListBox className={classNames.optionsPanel}>
            {hasOptions ? (
              filteredOptions.map((option) => (
                <ListBoxItem
                  key={option}
                  id={option}
                  className={classNames.option}
                >
                  {option}
                </ListBoxItem>
              ))
            ) : (
              <ListBoxItem isDisabled={true} className={classNames.option}>
                {optionsMessage}
              </ListBoxItem>
            )}
          </ListBox>
        </Popover>
      </div>
    </ComboBox>
  );
};

export default Select;
