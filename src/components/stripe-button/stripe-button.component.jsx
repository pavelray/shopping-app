import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqwpcBYhm6JVm3dRuEd1RCAQJkdMGEwRcdAKOnRs1Q3lqQEpPXaHx3Gra0hNAdSIwNWtTEx4zDW506tWiEez8tu00WAQEsuSX';

    const onToken = token =>{
        console.log(token);
        alert('Payment Success');
    }

    return(
        <StripeCheckout 
            lable='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency="INR"
        />
    )
}

export default StripeCheckoutButton;