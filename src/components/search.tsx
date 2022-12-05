import { ChangeEventHandler } from 'react';
import settings from '../../settings.json'
import '../styles/header.css'

type SearchProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Displays a search bar which changes the search parameter of the application.
 */
const Search = ({onChange}: SearchProps) => {
  return (<input className='search-bar' type='text' onChange={onChange} placeholder={settings.searchPlaceholder}/>)
}

export default Search;