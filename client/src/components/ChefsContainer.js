import ChefCard from './ChefCard'
import styled from 'styled-components'

function ChefsContainer({ chefs }) {
    const chefItems = chefs.map(chefObj => {
        return <ChefCard key={chefObj.id} chefObj={chefObj} />;
      });

    return (
        <Container>
        <div className="chefspage">
            <div className="chefcardcontainer">
            {chefItems}
            </div>
        </div>
        </Container>
    )
}

export default ChefsContainer

const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
background-image: url("https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/pexels-photo-1131406.webp");
opacity: 0.7;
background-repeat: no-repeat;
background-size: 150%;`