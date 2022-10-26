import { useRef, useState } from "react";

import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isNotFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        postal: enteredPostalIsValid,
        city: enteredCityIsValid
    })

    const formIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;

    if(!formIsValid){
      return;
  }
    props.submitOrderHandler({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity
  })
    };





  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={`${styles.control} ${formInputValidity.name ? '' : styles.invalid}`}>
        <label htmlFor="name">Your name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${styles.control} ${formInputValidity.street ? '' : styles.invalid}`}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={`${styles.control} ${formInputValidity.postal ? '' : styles.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formInputValidity.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={`${styles.control} ${formInputValidity.city ? '' : styles.invalid}`}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="submit">Confirm</button>
        <button onClick={props.cancelHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default Checkout;
