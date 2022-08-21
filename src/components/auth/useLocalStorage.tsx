import { useState } from "react";

export const useLocalStorage = (keyName: string, defaultValue: null) => {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return value;
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: string | null) => {
    try {
      if (newValue === null) {
        window.localStorage.setItem(keyName, JSON.stringify(newValue));
      } else {
        window.localStorage.setItem(keyName, newValue);
      }
    } catch (err) {}
    setStoredValue(newValue);
  };
  console.log(storedValue);

  return [storedValue, setValue];
};
