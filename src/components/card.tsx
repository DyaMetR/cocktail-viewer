import { Cocktail } from './list'
import '../styles/list.css'
import favouritedHeart from '../assets/favourite.png'
import notFavouritedHeart from '../assets/neutral.png'

type CardProps = {
  cocktail: Cocktail;
  favourite: boolean;
}

/**
 * Contains the information of a cocktail and allows it to be favourited.
 */
const Card = ({ cocktail, favourite }: CardProps) => {
  return (
    <div className='card'>
      <img className='img-preview' src={cocktail.strDrinkThumb}/>
      <img className={'favourite ' + (favourite ? 'favourited' : 'unfavourited')} src={favourite ? favouritedHeart : notFavouritedHeart}/>
      <div className='details'>
        <h1>{cocktail.strDrink}</h1>
        <span>{cocktail.strInstructions}</span>
      </div>
    </div>
  )
};

//<span className='category'>{cocktail.strCategory}</span>

export default Card;