import React, { useState } from 'react'
import fetchPokemon from '../actions/fetchPokemon'


const Pokemon = () => {
    
    const [items, setItems] = useState([])
    const onClick =  async () => {
        try{
            const arr = await fetchPokemon();
            setItems(arr);
        }catch(err){
            alert(err);
        }
    };
    
    const listItems = items.map((name, key) => <li key= {key}>{name}</li>)

    return (
        <form>
            <div class="container">
                <h1>Pokemon API</h1>
                <button  type="button" class="btn btn-secondary" onClick= {onClick}>Fetch Pokemon</button>  
                <ul>{listItems}</ul>  
            </div>
        </form>

        
    );
};

export default Pokemon
