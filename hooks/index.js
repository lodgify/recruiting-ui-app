import { useState } from 'react';

export function useInputHandler(initialValue) {
  const [value, setValue] = useState(initialValue);

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    onChange,
  };
}
