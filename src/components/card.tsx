import { Cocktail, FavouriteEventHandler, SelectionEventHandler } from './list'
import settings from '../../settings.json'
import favouritedHeart from '../assets/favourite.png'
import notFavouritedHeart from '../assets/non_favourite.png'
import '../styles/card.css'

type CardProps = {
  cocktail: Cocktail;
  favourited: boolean;
  favHandler: FavouriteEventHandler;
	onClick: SelectionEventHandler;
}

/**
 * Contains the information of a cocktail and allows it to be favourited.
 */
const Card = ({ cocktail, favourited, favHandler, onClick }: CardProps) => {
  return (
    <div className='card' title={settings.modalOpenTooltip} onClick={event => onClick(event, cocktail.idDrink)}>
      <img className='photo' src={cocktail.strDrinkThumb}/>
      <img
        className={'favourite ' + (favourited ? 'favourited' : 'unfavourited')}
        src={favourited ? favouritedHeart : notFavouritedHeart}
        title={favourited ? settings.unfavouriteTooltip : settings.favouriteTooltip}
        onClick={event => favHandler(event, cocktail.idDrink)}
        />
      <div className='details'>
        <h1>{cocktail.strDrink}</h1>
        <span>{cocktail.strInstructions}</span>
      </div>
    </div>
  )
};

export default Card;
