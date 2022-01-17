import React from 'react';
import CartCSS from '../components/Cart.module.css'
import {FiShoppingCart} from 'react-icons/fi'

interface Props {

}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {isOpen: false};
    }

    render() {
        return (
            <div className={CartCSS.cartContainer}>
                <button className={CartCSS.button} type="button" onClick={event => this.handleClick(event)}>
                    <FiShoppingCart/>
                    <span>2 pizza(s)</span>
                </button>
                <div className={CartCSS.cartDropDown} style={{
                    display: this.state.isOpen ? 'block' : 'none'
                }}>
                    <ul>
                        <li>Napoletana</li>
                        <li>Marinara</li>
                    </ul>
                </div>
            </div>
        );
    }

    handleClick = (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        console.log(event.target);
        if ((event.target as HTMLElement).nodeName === 'SPAN') {
            console.log('this is SPAN')
        }
        this.setState((prevState) => ({isOpen: !prevState.isOpen}))
    }
}

export default Cart;
