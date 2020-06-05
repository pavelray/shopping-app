import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart.dropdown.style.scss';

export const CartDropdown = () =>(

    <div className='cart-dropdown'>
        <div className='cart-items'>
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;