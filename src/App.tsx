import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import Header from './components/header'
import Search from './components/search'
import CheckBox from './components/checkbox'
import List, { Cocktail } from './components/list'
import Modal from './components/modal'
import settings from '../settings.json'
import './styles/main.css'

const App = () => {
  const [drinks, setDrinks] = useState<Cocktail[]>([]);
  const [search, setSearch] = useState<string>('');
  const [favourites, setFavourites] = useState<Record<string, boolean>>({});
  const [sorted, setSorted] = useState<boolean>(false);
  const [selected, setSelected] = useState<Cocktail|null>(null);

  /**
   * Sorts the given cocktails based on whether they're favourited.
   * @param a one cocktail
   * @param b another cocktail
   * @returns sort
   */
  const sort = (a: Cocktail, b: Cocktail): number => favourites[a.idDrink] == favourites[b.idDrink] ? 0 : (favourites[a.idDrink] ? -1 : 1);

  /**
   * Handles the search bar change event.
   * @param event
   */
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  /**
   * Handles the favourite button click event.
   * @param event 
   * @param drink id of the drink to toggle the favourite property on
   */
  const handleFavourites = (event: MouseEvent<HTMLDivElement>, drink: string) => {
    favourites[drink] = !favourites[drink];
    setFavourites(favourites);
  }

  /**
   * Handles the sorting checkbox check event.
   * @param event
   */
  const handleSort = (event: ChangeEvent<HTMLInputElement>) => setSorted(event.target.checked);

  /**
   * Handles the selection event click.
   * @param event 
   * @param drink id of the drink to select
   */
  const handleSelection = (event: MouseEvent<HTMLDivElement>, idDrink: string) => setSelected(drinks.filter(drink => drink.idDrink == idDrink)[0]);

  // fetch drinks before rendering
  useEffect(() => {
    fetch(settings.api + search)
      .then((response) => response.json())
      .then((list) => setDrinks(sorted ? list.drinks.sort(sort) : list.drinks));
  });

  return (
    <div>
      <Header title={settings.title} subtitle={settings.subtitle} tooltip={settings.theHorrifyingTruth}/>
      <div className='body'>
        <Search handler={handleSearch}/>
        <CheckBox label={settings.sort} handler={handleSort}/>
        <List drinks={drinks} favourites={favourites} favouritesHandler={handleFavourites} selectionHandler={handleSelection}/>
      </div>
      {selected ? <Modal cocktail={null}/> : null}
    </div>
  )
}

export default App;
