import { ChangeEventHandler } from 'react';
import '../styles/header.css'

type SearchProps = {
  handler: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Displays a search bar which changes the search parameter of the application.
 */
const Search = ({handler}: SearchProps) => {
  return (<input className='search-bar' type='text' onChange={handler}/>)
}

export default Search;