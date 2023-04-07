import ChefCard from './ChefCard'
import styled from 'styled-components'

function ChefsContainer({ chefs }) {
    const chefItems = chefs.map(chef => {
        return <ChefCard key={chef.id} chef={chef} />;
      });

    return (
        <div className="chefspage">
            <Title> Argh </Title>
            <div className="chefcardcontainer">
            {chefItems}
            </div>
        </div>
    )
}

export default ChefsContainer

const Title = styled.h1