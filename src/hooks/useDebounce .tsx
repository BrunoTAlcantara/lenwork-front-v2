"use client";
import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, value]);

  return debounceValue;
}

export default useDebounce;
