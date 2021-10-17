import React, { useState } from 'react';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
const actions = ['War', 'Collapse'];
const countries = [
  'Albania',
  'Latvia',
  'Andorra',
  'Liechtenstein',
  'Armenia',
  'Lithuania',
  'Austria',
  'Luxembourg',
  'Azerbaijan',
  'Malta',
  'Belarus',
  'Moldova',
  'Belgium',
  'Monaco',
  'Bosnia and Herzegovina',
  'Montenegro',
  'Bulgaria',
  'Netherlands',
  'Croatia',
  'Norway',
  'Cyprus',
  'Poland',
  'Czechia',
  'Portugal',
  'Denmark',
  'Romania',
  'Estonia',
  'Russia',
  'Finland',
  'San Marino',
  'Macedonia',
  'Serbia',
  'France',
  'Slovakia',
  'Georgia',
  'Slovenia',
  'Germany',
  'Spain',
  'Greece',
  'Sweden',
  'Hungary',
  'Sweden',
  'Iceland',
  'Switzerland',
  'Ireland',
  'Turkey',
  'Italy',
  'Ukraine',
  'Kosovo',
  'The United Kingdom',
];
let i;

function App() {
  const [text, setText] = useState('');

  function actionPicker() {
    console.log(actions.length);
    i = Math.round(Math.random() * actions.length);
    return actions[i - 1];
  }

  function countryPicker() {
    console.log(countries.length);
    i = Math.round(Math.random() * countries.length);
    return countries[i - 1];
  }
  function picker() {
    let action = actionPicker();
    let country = countryPicker();
    if (action === "Collapse") {
      setText(`${country} has collapsed!`)
    } else if (action === "War") {
      setText(`${country} is going to war!`)
    }
  }
  return (
    <div className="App">
      <Button onClick={picker} colorScheme="blue">
        Go!
      </Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
