import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //keys() returns an array of the keys
    //map() returns an array after calling a function on each element
    //..Array returns an array with args given
    // Burger ingredient 'i' is quantity
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            //Will return an array a 2d array
            //for each ingredient we are returning an array with the size being quantity
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        //this will convert 2d array to 1d array
        //arr being initial array adding all elements to it
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;