import { ChangeEventHandler } from 'react';
import '../styles/header.css'

type CheckBoxProps = {
  label: string;
  handler: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Simple checkbox with label.
 */
 const CheckBox = ({ label, handler }: CheckBoxProps) => {
  return (
    <div className='checkbox'>
      <input type='checkbox' onChange={handler}/>
      <label>{label}</label>
    </div>
  )
};

export default CheckBox;