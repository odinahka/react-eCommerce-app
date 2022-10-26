import {useRef, useState} from 'react';

import Input from '../../UI/Input';

import styles from './GadgetItemForm.module.css'

const GadgetItemForm = props => {
    const [unitIsValid, setUnitIsValid] = useState(true);
    const unitInputRef = useRef()
    const submitHandler = event => {
        event.preventDefault();
        const enteredUnit = unitInputRef.current.value;
        const enteredUnitNumber = +enteredUnit;
        if(enteredUnit.trim().length === 0 || enteredUnitNumber < 1 || enteredUnitNumber > 5){
            setUnitIsValid(false);
            return;
        }
        props.addToCartHandler(enteredUnitNumber);

    };
return <form className={styles.form} onSubmit = {submitHandler}>
    <Input ref = {unitInputRef} label = "Unit" input ={{
        id: 'unit_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
        }}/>
    <button>+ Add</button>
    {!unitIsValid && <p>Please enter a valid unit (1 - 5)</p>}
</form>
};
export default GadgetItemForm;