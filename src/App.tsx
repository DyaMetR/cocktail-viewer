import { ChangeEvent, useEffect, useState } from 'react'
import Header from './components/header'
import Search from './components/search'
import List, { Cocktail } from './components/list'
import settings from '../settings.json'
import './styles/main.css'

const App = () => {
  const [drinks, setDrinks] = useState<Cocktail[]>([]);
  const [search, setSearch] = useState<string>('');

  // event handler for the search bar
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  // fetch drinks before rendering
  useEffect(() => {
    fetch(settings.api + search)
      .then((response) => response.json())
      .then((list) => setDrinks(list.drinks));
  }, [search]);

  return (
    <div>
      <Header title={settings.title} subtitle={settings.subtitle} tooltip={settings.theHorrifyingTruth}/>
      <Search handler={handleSearch}/>
      <List drinks={drinks}/>
    </div>
  )
}

export default App;
