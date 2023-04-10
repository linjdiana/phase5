import React from "react";
function RecipeSearchBar({searchQuery, setSearchQuery}) {
    return (
        <div className='searchcontainer'>
            <input className="search-input"
                    value={searchQuery}
                    placeholder="search..."
                    onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default RecipeSearchBar