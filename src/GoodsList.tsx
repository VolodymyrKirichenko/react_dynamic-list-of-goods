import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="card__list">
    <List
      sx={{
        width: '100%',
        bgcolor: 'lightgrey',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {goods.map((good) => (
        <ListItem key={`item-${good.id}-${good.name}`}>
          <ListItemText
            primary={good.name}
            sx={{ color: good.color }}
          />
        </ListItem>
      ))}
    </List>
  </div>
);
