import React from 'react';

import { Item as StyledItem } from './styled';

interface Props {
  children: React.ReactNode,
}

const Item = ({ children } : Props) => (
  <StyledItem>{children}</StyledItem>
)

export default Item;