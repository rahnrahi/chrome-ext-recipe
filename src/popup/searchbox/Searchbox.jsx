import React from 'react';
import SearchResults from './SearchResults';
import './Searchbox.css'
import useDebounce from './useDebounce';


function SearchBox() {
  const [search, setSearch] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);

  const fetchRecipes = async (search)=>{
    if(search==''){
      setRecipes([])
      return
    }
    const response = await fetch("https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes");
    const jsonResponse = await response.json();
    search = search.toLowerCase();
    const filteredRecipes = jsonResponse.message.filter(r=>{
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

  const handleSearch = (e) => setSearch(e.target.value);


  return (<div id='search'>
    <input type="text" value={search} onChange={handleSearch} placeholder="Search cuisine" id="seatch-box" />
    <SearchResults recipes={recipes}></SearchResults>
  </div>);
}

export default SearchBox;
