import { useState } from 'react';

const useDojo = (audience: string[]) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => i === audience.length - 1 ? 0 : i + 1);
  const previous = () => setIndex((i) => i === 0 ? audience.length - 1 : i - 1);

  const pilot = audience[index];
  const copilot = audience[index === 0 ? audience.length - 1 : index - 1];

  return {
    next,
    previous,
    pilot,
    copilot,
  }
}

export default useDojo;
