//Q5
import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
  ];

  const Searching = (event) => {
    setSearch(event.target.value);
  };

  const filteredPlanets = planets.filter(planet =>
    planet.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search Planets"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={Searching}
        value={search}
      />
      <List>
        {filteredPlanets.map((planet, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText primary={planet} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

export default SearchBar;
