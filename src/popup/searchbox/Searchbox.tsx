import React from 'react';
import SearchResults from './SearchResults';
import './Searchbox.scss'
import useDebounce from './UseDebounce';
import { API_URL } from '../constants';


const SearchBox = (): React.ReactElement=> {
  const [search, setSearch] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);

  const fetchRecipes = async (search: string)=>{
    if(search==''){
      setRecipes([])
      return
    }
    const response = await fetch(API_URL);
    const jsonResponse = await response.json();
    search = search.toLowerCase();
    const filteredRecipes = jsonResponse.message.filter((r: any)=>{
      const lowerName = r.name.toLowerCase();
      return lowerName.includes(search)
    })
    setRecipes(filteredRecipes);
  }

  // DeBounce Function
  useDebounce(() => {
    fetchRecipes(search)
    }, [search], 500
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);


  return (<div id='search'>
    <input type="text" value={search} onChange={handleSearch} placeholder="Search cuisine" id="seatch-box" />
    <SearchResults recipes={recipes}></SearchResults>
  </div>);
}

export default SearchBox;
