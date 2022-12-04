import Card from './card'
import '../styles/list.css'

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string|null;
  strTags: string|null;
  strVideo: string|null;
  strCategory: string;
  strIBA: string|null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string|null;
  strInstructionsDE: string|null;
  strInstructionsFR: string|null;
  strInstructionsIT: string|null;
  strInstructionsZH_HANS: string|null;
  strInstructionsZH_HANT: string|null;
  strDrinkThumb: string;
  strIngredient1: string|null;
  strIngredient2: string|null;
  strIngredient3: string|null;
  strIngredient4: string|null;
  strIngredient5: string|null;
  strIngredient6: string|null;
  strIngredient7: string|null;
  strIngredient8: string|null;
  strIngredient9: string|null;
  strIngredient10: string|null;
  strIngredient11: string|null;
  strIngredient12: string|null;
  strIngredient13: string|null;
  strIngredient14: string|null;
  strIngredient15: string|null;
  strMeasure1: string|null;
  strMeasure2: string|null;
  strMeasure3: string|null;
  strMeasure4: string|null;
  strMeasure5: string|null;
  strMeasure6: string|null;
  strMeasure7: string|null;
  strMeasure8: string|null;
  strMeasure9: string|null;
  strMeasure10: string|null;
  strMeasure11: string|null;
  strMeasure12: string|null;
  strMeasure13: string|null;
  strMeasure14: string|null;
  strMeasure15: string|null;
  strImageSource: string|null;
  strImageAttribution: string|null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};

type ListProps = { drinks: Cocktail[] };

/**
 * Displays a sortable list of cocktails.
 */
const List = ({ drinks }: ListProps) => {
  return (<div className='list'>{drinks ? drinks.map((drink) => (<Card key={drink.idDrink} cocktail={drink} favourite={false}/>)) : <h1>No matching drinks found.</h1>}</div>)
};

export default List;

