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
    
    function refreshPage() {
        window.location.reload(false);
      }

    return (
      <CalPage>
{/*         
        <br />
        <br /> */}
        <h1 className="h1">👩‍🍳</h1>
        <button onClick={refreshPage} className="button-89">Refresh</button>
        <div className= "chefcard">{randomChef ? <ChefCard chefObj={randomChef} /> : null} </div>
        <CalendarComponent />
      </CalPage>
    );
  }
  
export default CalendarPage

const CalPage = styled.div `
color: #CC0099;
// margin: 0;
opacity: 0.95;

.chefcard {
    margin: 0 auto;
    // display: flex;
    // justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 280px;
}

.h1 {
    font-size: 54px;
    color: grey;
}

.button-89 {
  --b: 3px;   /* border thickness */
  --s: .45em; /* size of the corner */
  --color: grey;
  height: 50px;
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-89:hover,
.button-89:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

.button-89:active {
  background: var(--color);
  color: #fff;
}
`;