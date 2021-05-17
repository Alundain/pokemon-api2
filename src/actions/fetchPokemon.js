const fetchPokemon = async () => {
   const res = await fetch('https://pokeapi.co/api/v2/ability?offset=20&limit=807');
      try{
         const data = await res.json();
         return data.results.map(({name}) => name);
      }catch(err) {
          throw err;
      }
};

export default fetchPokemon;

