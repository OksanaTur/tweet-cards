import React, { useState } from 'react';
import Select from 'react-select';

import css from './DropDown.module.css';

const options = [
  { value: 'default', label: 'show all' },
  { value: 'follow', label: 'follow' },
  { value: 'following', label: 'following' },
];

const defaultValue = { value: 'default', label: 'show all' };

const DropDown = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = selectedValue => {
    setSelectedValue(selectedValue);
    onChange(selectedValue.value);
  };

  return (
    <Select
      className={css.dropdown_select}
      value={selectedValue}
      options={options}
      onChange={handleChange}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary1: 'rgb(138, 43, 226)',
          primary2: 'pink',
        },
      })}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? '#ae7be3' : '#370d99',
          background: state.isFocused
            ? '#F6F1FC'
            : '#ae7be3',
          borderRadius: state.isFocused ? '12px' : '22px',
        }),
      }}
    />
  );
};

export default DropDown;