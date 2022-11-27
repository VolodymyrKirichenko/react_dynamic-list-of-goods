import React, { useState } from 'react';
import './App.scss';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(good => setGoods(good));
  };

  const get5FirstGoods = () => {
    get5First().then(good => setGoods(good));
  };

  const getRedGoods = () => {
    getRed().then(good => setGoods(good));
  };

  return (
    <div className="app">
      <div className="card">
        <Paper elevation={5}>
          <Box
            sx={{
              backgroundColor: 'lightgrey',
            }}
          >
            <div className="card__content">
              <div className="card__title">
                <h1>Dynamic list of Goods</h1>
              </div>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  data-cy="all-button"
                  onClick={getAllGoods}
                >
                  Load all goods
                </Button>
                <Button
                  data-cy="first-five-button"
                  onClick={get5FirstGoods}
                >
                  Load 5 first goods
                </Button>
                <Button
                  data-cy="red-button"
                  onClick={getRedGoods}
                >
                  Load red goods
                </Button>
              </ButtonGroup>

              <GoodsList goods={goods} />
            </div>
          </Box>
        </Paper>
      </div>
    </div>
  );
};
