import ChefCard from './ChefCard'
import styled from 'styled-components'

function ChefsContainer({ chefs }) {
    const chefItems = chefs.map(chefObj => {
        return <ChefCard key={chefObj.id} chefObj={chefObj} />;
      });

    return (
        <div className="chefspage">
            <div className="chefcardcontainer">
            {chefItems}
            </div>
        </div>
    )
}

export default ChefsContainer

