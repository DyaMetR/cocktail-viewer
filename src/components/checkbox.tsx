import { ChangeEventHandler } from 'react';
import '../styles/header.css'

type CheckBoxProps = {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Simple checkbox with label.
 */
 const CheckBox = ({ label, onChange }: CheckBoxProps) => {
  return (
    <div className='checkbox'>
      <input type='checkbox' onChange={onChange}/>
      <label>{label}</label>
    </div>
  )
};

export default CheckBox;