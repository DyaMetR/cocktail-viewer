import { Cocktail } from './list'
import '../styles/list.css'
import notFavourite from '../assets/regular.png'

type CardProps = { cocktail: Cocktail };

/**
 * Contains the information of a cocktail and allows it to be favourited.
 */
const Card = ({ cocktail }: CardProps) => {
  return (
    <div className='card'>
      <img className='preview' src={cocktail.strDrinkThumb}/>
      <img className='favourite' src={notFavourite}/>
      <div className='details'>
        <h1>{cocktail.strDrink}</h1>
        <span>{cocktail.strInstructions}</span>
      </div>
    </div>
  )
};

//<span className='category'>{cocktail.strCategory}</span>

export default Card;