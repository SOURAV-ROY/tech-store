import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function PayPalBtn({ cartTotal, clearCart, history }) {
    const clientId = process.env.REACT_APP_SANDBOX_ID || 'sb';

    return (
        <PayPalScriptProvider options={{ 'client-id': clientId, currency: 'USD' }}>
            <PayPalButtons
                style={{ layout: 'vertical' }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { value: String(cartTotal) } }],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((payment) => {
                        console.log('The payment was succeeded!', payment);
                        clearCart();
                        history.push('/');
                    });
                }}
                onCancel={(data) => {
                    console.log('The payment was cancelled!', data);
                }}
                onError={(err) => {
                    console.log('Error!', err);
                }}
            />
        </PayPalScriptProvider>
    );
}
