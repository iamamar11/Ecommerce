import React from 'react'
import Logo from '../UI/Logo/Logo'
import './CartRow.scss';

function CartRow(props) {
    return (
        <section className='CartRow'>
            <Logo image={props.image} style={props.style} />
            <p>{props.description}</p>

            <section>
                <button onClick={() => props.incrementHandler(props.id, 'dec')} disabled = {props.quantity < 1}><i className="fas fa-minus-circle"/></button>
                <span className='quantitySpan'>{props.quantity}</span>
                <i className="fas fa-plus-circle" onClick={() => props.incrementHandler(props.id, 'inc')}></i>
            </section>
            
            <span className='priceSpan'>$ {props.price * props.quantity}</span>
        </section>
    )
}

export default CartRow
