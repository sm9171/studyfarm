import { useCallback, useState } from "react";

export default function useInput(
  initialValue: string = ""
): [value: string, handle: (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState(initialValue);

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handle];
}
