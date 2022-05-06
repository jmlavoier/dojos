import React, { useEffect } from 'react';
import styled from 'styled-components';

import useSound from 'use-sound';
import useCronometer from './useCronometer';
import useDojo from './useDojo';

import playSVG from './assets/svgs/play.svg';
import pauseSVG from './assets/svgs/pause.svg';
import resetSVG from './assets/svgs/reset.svg';
import nextSVG from './assets/svgs/next.svg';
import previousSVG from './assets/svgs/previous.svg';

const applause = require('./assets/sounds/applause.mp3');

const zeroLeft = (value: number) => value < 10 ? `0${value}` : value;

const Clock = styled.div`
  font-size: 40px;
  font-weight: bold;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  width: 130px;
  text-align: center;
`

interface Props {
  size?: number;
}

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Button = styled.div`
  display: inline;
  cursor: pointer;
  margin: 3px;
`
const Icon = styled.img<Props>`
  height: ${(props) => props?.size ? `${props.size}px` : '40px'};
`

const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 80px;
  width: 400px;
  text-align: left;
  padding: 10px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 10px;
  margin: 10px;
`

const List = styled.ul``

const Item = styled.li`
  list-style: none;
  font-size: 24px;
  margin-left: 40px
`

const AUDIENCE = [
  'João',
  'Vini',
  'Rafael',
  'Priscila',
  'Lais',
  'Hermes',
  'Kim',
];

const Card = () => {
  const { pilot, copilot, next, previous } = useDojo(AUDIENCE);
  const { meta, min, sec, start, pause, reset, resetAndStart, preparing } = useCronometer();
  const [ play ] = useSound(applause);

  useEffect(() => {
    if (meta.isPlay && min <= 0 && sec <= 0) {
      play();
      preparing();
      next();
    } else if (meta.isPreparing && min <= 0 && sec <= 0) {
      resetAndStart();
    }
  }, [meta, min, sec, next, start, play, resetAndStart, preparing]);

  return (
    <Wrapper>
      <Actions>
        <Clock>{`${zeroLeft(min)}:${zeroLeft(sec)}`}</Clock>
      </Actions>
      <List>
        <Item>{`Piloto: ${pilot}`}</Item>
        <Item>{`Copiloto: ${copilot}`}</Item>
      </List>
      <Actions>
        <Button onClick={() => previous()} ><Icon alt="previous" src={previousSVG} /></Button>
        <Button onClick={() => reset()}><Icon alt="reset" src={resetSVG} /></Button>
        <Button onClick={() => start()}><Icon size={60} alt="play" src={playSVG} /></Button>
        <Button onClick={() => pause()}><Icon alt="pause" src={pauseSVG} /></Button>
        <Button onClick={() => next()}><Icon alt="next" src={nextSVG} /></Button>
      </Actions>
    </Wrapper>
  );
}

export default Card;
