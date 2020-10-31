import { useState, useCallback } from "react";

export default (initValue: string): [value: string, handler: (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};
