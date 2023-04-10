import React from "react";


function RecipeSearchBar({ searchQuery, setSearchQuery }) {

    return (
        <div className='searchcontainer'>
            <input className="search-input"
                    value={searchQuery}
                    placeholder="search search search"
                    onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default RecipeSearchBar

// const afterSearch = songs.filter((song)=>
//     song.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     song.genre.toLowerCase().includes(searchQuery.toLowerCase())
//   );