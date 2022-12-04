import { Cocktail, FavouriteEventHandler } from './list'
import settings from '../../settings.json'
import favouritedHeart from '../assets/favourite.png'
import notFavouritedHeart from '../assets/neutral.png'
import '../styles/list.css'

type CardProps = {
  cocktail: Cocktail;
  favourite: boolean;
  onClick: FavouriteEventHandler;
}

/**
 * Contains the information of a cocktail and allows it to be favourited.
 */
const Card = ({ cocktail, favourite, onClick }: CardProps) => {
  return (
    <div className='card'>
      <img className='photo' src={cocktail.strDrinkThumb}/>
      <img 
        className={'favourite ' + (favourite ? 'favourited' : 'unfavourited')} 
        src={favourite ? favouritedHeart : notFavouritedHeart}
        title={favourite ? settings.unfavourite : settings.favourite}
        onClick={event => onClick(event, cocktail.idDrink)}
        />
      <div className='details'>
        <h1>{cocktail.strDrink}</h1>
        <span>{cocktail.strInstructions}</span>
      </div>
    </div>
  )
};

//<span className='category'>{cocktail.strCategory}</span>

export default Card;