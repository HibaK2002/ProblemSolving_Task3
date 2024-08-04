import React from 'react';
import NamesList from './Components/NamesList';
import Paragraph from './Components/Paragraph'; 
import Form from './Components/Form'; 
import Counter from './Components/Counter';
import DropDown from './Components/DropDown';
import Filter from './Components/Filter';
import Timer from './Components/Timer';
import Todo from './Components/Todo';
import DataFetching from './Components/DataFetching';

function App() {
  const users = [
    { name: 'Hiba' },
    { name: 'Ayah' },
    { name: 'Ali' },
  ];

  return (
    <div>
      <div>Q1</div>
      <NamesList users={users} />
      <hr />
      <div>Q2</div>
      <Paragraph />
      <hr />
      <div>Q3</div>
      <Form/>
      <hr />
      <div>Q4</div>
      <DataFetching/>
      <hr />
      <div>Q5</div>
      <Filter/>
      <hr />
      <div>Q6</div>
      <Timer/>
      <hr />
      <div>Q7</div>
      <Counter/>
      <hr />
      <div>Q8</div>
      <DropDown/>
      <hr />
      <div>Q9</div>
      <Todo/>
    </div>
  );
}

export default App;
