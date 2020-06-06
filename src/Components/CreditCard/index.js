import React, { memo,useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styles from './credit.module.css'

const CreditCard = memo(function CredittCard    (props) {
    const initialCreditState = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
      };    

const [creditStates, setCreditStates] = useState(initialCreditState)

const handleInputFocus = ({target:{name}={}}) => {
    setCreditStates({ 
        ...creditStates,
        focus: name });
  }
  
  const handleInputChange = ({target:{name, value}={}}) => {
    setCreditStates({ 
        ...creditStates,
        [name]: value });
  }

    return (
        <div id={styles.bigGrid}>
        <Cards
          cvc={creditStates.cvc}
          expiry={creditStates.expiry}
          focused={creditStates.focus}
          name={creditStates.name}
          number={creditStates.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        	<input
            type="text"
            name="name"
            placeholder="Customer name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        	<input
            type="text"
            name="expiry"
            placeholder="MM/YY Expiry"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        	<input
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
    )
})
export default CreditCard
