import React from 'react';

import { List as StyledList } from './styled';

interface Props {
  items: string[]
  renderItem: (item: string) => JSX.Element,
}

const List = ({ items, renderItem } : Props) => {
    return (
      <StyledList>
        {items.map((item, index) => renderItem(item))}
      </StyledList>
    )
}

export default List;
