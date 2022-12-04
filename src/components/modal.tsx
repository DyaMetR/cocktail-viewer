import { Cocktail } from './list'
import '../styles/main.css'

type ModalProps = { cocktail: Cocktail | null; }

/**
 * Displays a modal with the details of a cocktail.
 */
 const Modal = ({ cocktail }: ModalProps) => {
  return (
    <div className='modal'>
      <h1>test</h1>
    </div>
  )
};

export default Modal;