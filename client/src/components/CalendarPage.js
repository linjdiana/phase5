import CalendarComponent from './CalendarComponent'
import ChefCard from './ChefCard'
import styled from 'styled-components';

function CalendarPage({ chefs }) {
    function getRandomChef(chefs) {
      if (!chefs || chefs.length === 0) {
        return null; 
      }
      return chefs[Math.floor(Math.random() * chefs.length)];
    }
  
    const randomChef = getRandomChef(chefs);
  
    return (
      <CalPage>
        <CalendarComponent />
        <br />
        <br />
        <h1> Not sure who to book? Refresh the page! </h1>
        <div className= "chefcard">{randomChef ? <ChefCard chefObj={randomChef} /> : null} </div>
      </CalPage>
    );
  }
  
export default CalendarPage

const CalPage = styled.div `
color: white;
margin: 0;

.chefcard {
    margin: 0 auto;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 1000;
}
`;