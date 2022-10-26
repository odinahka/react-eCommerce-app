import { useEffect, useState } from 'react';

import Card from '../UI/Card'
import GadgetItem from './GadgetItem/GadgetItem';
import styles from './AvailableGadgets.module.css'


const AvailableGadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    useEffect(() => {
        const fetchGadgets = async () => {
         
         const response = await fetch('https://react-http-post-35139-default-rtdb.firebaseio.com/Gadgets.json');
         if(!response.ok){
            throw new Error ('Something went wrong');
         };
         const responseData = await response.json();

         const loadedGadgets = [];

         for(const key in responseData){
             loadedGadgets.push({
              id: key,
              name: responseData[key].Name,
              description: responseData[key].Description,
              price: responseData[key].Price
          })  
         };
         setGadgets(loadedGadgets);
         setIsLoading(false);
        
        };
    
         fetchGadgets().catch(error => {
            setIsLoading(false)
            setHttpError(error.message)
         });  
    }, []);
    if(isLoading){
        return(
            <section className={styles.GadgetsLoading}>
                <p>Loading...</p>
            </section>
        );
    }
    if(httpError){
        return(
            <section className={styles.GadgetsError}>
                <p>{httpError}</p>
            </section>
        )
    }
    const gadgetsList = gadgets.map(gadget => <GadgetItem gadget = {gadget} key = {gadget.id}/>);
 return <section className={styles.gadgets}>
     <Card>
      <ul>
         {gadgetsList}
     </ul>  
     </Card>

 </section>
};

export default AvailableGadgets;