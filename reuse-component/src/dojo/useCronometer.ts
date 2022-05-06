import { useState, useEffect } from 'react';

const MINUTES = 3;
const PREPARE_SEC = 10;
const ONE_SEC = 1000;
const ONE_MIN = 60;

const START_TIME = MINUTES*ONE_MIN*ONE_SEC;
const PREPARE_TIME = PREPARE_SEC*ONE_SEC;

enum STATUS {
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  RESET = 'RESET',
  PREPARING = 'PREPARING',
}

interface State {
  time: number;
  status: STATUS;
  hydrated: boolean;
}

const initialTime: State = {
  time: START_TIME,
  status: STATUS.PAUSE,
  hydrated: false,
};

const isPlay = (s: STATUS) => s === STATUS.PLAY;
const isPreparing = (s: STATUS) => s === STATUS.PREPARING;
const isPause = (s: STATUS) => s === STATUS.PAUSE;
const isReset = (s: STATUS) => s === STATUS.RESET;

const useCronometer = () => {
  const [{
    time,
    status,
    hydrated,
  }, 
    setState,
  ] = useState<State>(initialTime);

  useEffect(() => {
    const store = localStorage.getItem('dojo-cronometer');

    const {
      time: valueTime,
      status: valueStatus,
    } = store ? JSON.parse(store) : initialTime;
    
    if (valueTime && valueStatus && !hydrated) {
      setState({
        time: valueTime,
        status: valueStatus,
        hydrated: true,
      });
    }

    if (hydrated) {
      console.log('set-value: ', time, status);
      localStorage.setItem('dojo-cronometer', JSON.stringify({
        time,
        status,
      }));
    }
   
  }, [hydrated, time, status]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlay(status) || isPreparing(status)) {
        setState((state) => ({ 
          ...state,
          time: state.time - ONE_SEC < 0 ? 0 : state.time - ONE_SEC,
        }));
      }
    }, ONE_SEC);

    if (!isPlay(status) && !isPreparing(status)) {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    }
  }, [time, status]);

  const start = () => setState((state) => ({
    ...state,
    status: STATUS.PLAY,
  }));

  const pause = () => setState((state) => ({
    ...state,
    status: STATUS.PAUSE,
  }));

  const reset = () => setState((state) => ({
    ...state,
    time: START_TIME,
    status: STATUS.RESET,
  }));
  
  const resetAndStart = () => setState((state) => ({
    ...state,
    time: START_TIME,
    status: STATUS.PLAY,
  }));

  const preparing = () => setState((state) => ({
    ...state,
    time: PREPARE_TIME,
    status: STATUS.PREPARING,
  }));

  const min = Math.floor((time/ONE_MIN/ONE_SEC) << 0);
  const sec = Math.floor((time/ONE_SEC) % 60);

  const meta = {
    isPause: isPause(status),
    isPlay: isPlay(status),
    isPreparing: isPreparing(status),
  }

  return {
    meta,
    min, 
    sec, 
    start,
    pause,
    reset,
    resetAndStart,
    preparing,
  } as const;
}

export default useCronometer;
