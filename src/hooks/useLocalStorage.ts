import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? (JSON.parse(saved) as T) : initialValue;
    } catch (error) {
      // Saved data is corrupted or storage is blocked, so start fresh
      console.warn(`Couldn't read "${key}" from localStorage`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Storage is full or blocked (e.g. private mode); the app still works, it just won't remember
      console.warn(`Couldn't save "${key}" to localStorage`, error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
