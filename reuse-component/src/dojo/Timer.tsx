import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MINUTES = 5;
const ONE_SEC = 1000;
const ONE_MIN = 60;
const AUDIENCE = [
  'João Milton',
  'Tamara',
  'Agnaldo'
]

type Time = number;

const initialTime: Time = 0;

const useCronometer = () => {
  const [time, setTime] = useState<Time>(initialTime);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime((state) => state - ONE_SEC);
      }
    }, ONE_SEC);

    return () => {
      clearTimeout(timer);
    }
  }, [time]);


  const start = () => setTime(ONE_SEC*ONE_MIN*MINUTES);

  const min = Math.floor((time/ONE_MIN/ONE_SEC) << 0);
  const sec = Math.floor((time/ONE_SEC) % 60);

  return { min, sec, start } as const;
}

const useDojo = (audience: string[]) => {
  const [index, setIndex] = useState(-1);

  const next = () => setIndex((i) => i === audience.length - 1 ? 0 : i + 1);

  const pilot = audience[index];
  const copilot = audience[index === 0 ? audience.length - 1 : index - 1];

  return {
    next,
    pilot,
    copilot,
  }
}

const zeroLeft = (value: number) => value < 10 ? `0${value}` : value;

const Wrapper = styled.div`
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 80px;
  width: 400px;
  text-align: left;
`

const Card = () => {
  const { pilot, copilot, next } = useDojo(AUDIENCE);
  const { min, sec, start } = useCronometer();

  useEffect(() => {
    if (min === 0 && sec === 0) {
      start();
      next();
    }
  }, [min, sec, next, start]);

  return (
    <Wrapper>
      <p>{`${zeroLeft(min)}:${zeroLeft(sec)}`}</p>
      <p>{`Piloto: ${pilot}`}</p>
      <p>{`Copiloto: ${copilot}`}</p>
    </Wrapper>
  );
}

export default Card;
