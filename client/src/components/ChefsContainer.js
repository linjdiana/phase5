import ChefCard from './ChefCard'
import styled from 'styled-components'

function ChefsContainer({ chefs }) {
    const chefItems = chefs.map(chefObj => {
        return <ChefCard key={chefObj.id} chefObj={chefObj} />;
      });

    return (
        <Container>
            {chefItems}
        </Container>
    )
}

export default ChefsContainer

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto; /* adds horizontal scroll */
    max-height: 80vh;
    // background-image: url("https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/pexels-photo-1131406.webp");
    // background-color: white;
    opacity: 0.85;
    background-repeat: no-repeat;
    background-size: 100%;}
    
    /* show only one card per row */
    & > * {
      flex-basis: 100%;
    }
  }
`;
