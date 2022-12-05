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
   * @param a a cocktail
   * @param b another cocktail
   * @returns sort order
   */
  const sort = (a: Cocktail, b: Cocktail): number => {
    const aDrink = Boolean(favourites[a.idDrink]);
    const bDrink = Boolean(favourites[b.idDrink]);
    return aDrink == bDrink ? 0 : (aDrink ? -1 : 1);
  }

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
    event.stopPropagation();
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
  const handleSelection = (event: MouseEvent<HTMLDivElement>, idDrink: string|null) => setSelected(drinks.filter(drink => drink.idDrink == idDrink)[0]);
  
  /**
   * Handles the selection removal (and thus, closing the modal).
   * @param event
   */
  const handleCloseModal = (event: MouseEvent<HTMLDivElement>) => setSelected(null);

  /**
   * Fetch drinks before rendering.
   */
  useEffect(() => {
    fetch(settings.api + search)
      .then((response) => response.json())
      .then((list) => setDrinks(sorted ? list.drinks.sort(sort) : list.drinks));
  });

  return (
    <div>
      <Header title={settings.title} subtitle={settings.subtitle} secret={settings.theHorrifyingTruth}/>
      <Search onChange={handleSearch}/>
      <CheckBox label={settings.sortLabel} onChange={handleSort}/>
      <List drinks={drinks} favourites={favourites} favHandler={handleFavourites} onClick={handleSelection}/>
      {selected ? <Modal cocktail={selected} onClick={handleCloseModal}/> : null}
    </div>
  )
}

export default App;
