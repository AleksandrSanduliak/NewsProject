import { useState, useCallback } from "react";
const useLocalStorage = (key) => {
  const [storage, setStorage] = useState(() => {
    const data = window.localStorage.getItem(key);
    return data ? JSON.parse(data) : "";
  });

  const setValue = useCallback(
    (value) => {
      setStorage(value);
      console.log(value, "uselocal");
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );
  return { storage, setStorage, setValue };
};
export default useLocalStorage;
