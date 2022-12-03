import { useEffect, useState } from 'react'
import Header from './components/header'
import List, { Cocktail } from './components/list'
import settings from '../settings.json'
import './styles/main.css'

const App = () => {
  const [drinks, setDrinks] = useState<Cocktail[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetch(settings.api + search)
      .then((response) => response.json())
      .then((list) => setDrinks(list.drinks));
  }, [setSearch]);

  return (
    <div>
      <Header title={settings.title} subtitle={settings.subtitle} tooltip={settings.theHorrifyingTruth}/>
      <List drinks={drinks}/>
    </div>
  )
}

export default App;
