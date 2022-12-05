import { Cocktail, SelectionEventHandler } from './list'
import settings from '../../settings.json'
import '../styles/modal.css'

type ModalProps = {
	cocktail: Cocktail;
	handler: SelectionEventHandler;
}

/**
 * Displays a modal with the details of a cocktail.
 */
 const Modal = ({ cocktail, handler }: ModalProps) => {
  return (
    <div className='modal-background' title={settings.modalCloseTooltip} onClick={event => handler(event, null)}>
			<div className='modal-body'>
				<div>
					<img className='photo' src={cocktail.strDrinkThumb}/>
					<div className='modal-header'>
						<h1>{cocktail.strDrink}</h1>
						<div className='modal-category'>{cocktail.strCategory}</div>
						<div className='modal-glass'><b>{settings.modalGlass}</b>{cocktail.strGlass}</div>
					</div>
				</div>
				<div>
					<div><b>{settings.modalIngredients}</b></div>
					<ul>
					{
						[
							cocktail.strIngredient1,
							cocktail.strIngredient2,
							cocktail.strIngredient3,
							cocktail.strIngredient4,
							cocktail.strIngredient5,
							cocktail.strIngredient6,
							cocktail.strIngredient7,
							cocktail.strIngredient8,
							cocktail.strIngredient9,
							cocktail.strIngredient10,
							cocktail.strIngredient11,
							cocktail.strIngredient12,
							cocktail.strIngredient13,
							cocktail.strIngredient14,
							cocktail.strIngredient15,
						].map((ingredient, i) => ingredient ? <li key={i}>{ingredient}</li> : null)
					}
					</ul>
				</div>
				<div><b>{settings.modalInstructions}</b>{cocktail.strInstructions}</div>
			</div>
    </div>
  )
};

export default Modal;
