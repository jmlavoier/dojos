import styled from 'styled-components';

export const Header = styled.header`
  background-color: #262424;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
  height: 80px;
`

export const Content = styled.div`
  background-color: #fff;
  font-size: calc(10px + 2vmin);
  height: calc(100vh - 80px);
  display: flex;
`;

export const List = styled.ul`
  max-height: calc(100vh - 80px);
  overflow: scroll;
  margin: 0;
  padding-left: 0;
`;

export const Item = styled.li`
  list-style: none;
  text-align: left;
  height: 60px;
  width: 354px;
`;

export const Button = styled.button`
  background-color: #244C8C;
  border: 0;
  width: 100%;
  height: 100%;
  font-size: calc(10px + 2vmin);
  color: #fff;
  border-bottom: 2px solid rgba(0,0,0,0.25);
  cursor: pointer;
  
  &:hover {
    opacity: 0.90;
  }
`;

export const Text = styled.span`
  font-size: calc(10px + 2vmin);
  color: #7C7C7C;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`