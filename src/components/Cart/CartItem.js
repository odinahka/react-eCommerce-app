import styles from './CartItem.module.css';
import { numberWithCommas } from '../Gadgets/GadgetItem/GadgetItem';
const CartItem = (props) => {
  const price = `N${numberWithCommas(props.price.toFixed(2))}`;

  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.unit}>x {props.unit}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.removeHandler}>−</button>
        <button onClick={props.addHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
