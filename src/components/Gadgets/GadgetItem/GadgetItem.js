import { useContext } from 'react';
import GadgetItemForm from './GadgetItemForm';
import CartContext from '../../../store/cart-context';
import styles from './GadgetItem.module.css'

export const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const GadgetItem = props => {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = unit => {
     cartCtx.addItem({
         id: props.gadget.id,
         name: props.gadget.name,
         unit: unit,
         price: props.gadget.price
     })
    };
    const price = `N${numberWithCommas(props.gadget.price.toFixed(2))}`;

return <li className={styles.gadget}>
    <div>
        <h3>{props.gadget.name}</h3>
        <div className={styles.description}>{props.gadget.description}</div>
        <div className={styles.price}>{price}</div>
    </div>
    <div><GadgetItemForm id = {props.gadget.id} addToCartHandler = {addToCartHandler}/></div>
</li>
};

export default GadgetItem;