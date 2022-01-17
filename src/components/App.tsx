import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';
import AppCSS from './App.module.css';
import PizzaSVG from '../svg/pizza.svg';

const App = () => {
    return (
        <div className={AppCSS.container}>
            <div className={AppCSS.header}>
                <PizzaSVG width="120" height="120"></PizzaSVG>
                <div className={AppCSS.siteTitle}>Delicious Pizzas</div>
            </div>
            <ul>
                {pizzas.map(pizza => {
                    return (<Pizza key={pizza.id} pizza={pizza}></Pizza>)
                })}
            </ul>
        </div>

    );
}

export default App;

