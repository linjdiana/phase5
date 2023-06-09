// import ChefsContainer from './ChefsContainer';
// import Calendar from './Calendar'
// import RecipesContainer from './RecipesContainer'
// import ReviewsContainer from './ReviewsContainer'
import { NavLink, useHistory } from "react-router-dom";

function NavBar({updateUser}) {
  const history = useHistory();
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(res => {
      if(res.ok){
          updateUser(null)
          history.push('/authentication')
      }
    })
 }
    return (
        <div className="navbar">
          {/* <div>in beta in sf</div> */}
          <p data-item='FÜBER'>FÜBER</p>

          <section>
            <div><h3>bringing the chef to you</h3></div>
            <nav>
              <ul className="menuItems">
                <li><NavLink exact to="/chefs">Chefs</NavLink></li>
                <li><NavLink exact to="/recipes">Recipes</NavLink></li>
                <li><NavLink exact to="/calendar">Calendar</NavLink></li>
                <li><NavLink exact to="/reviews">Reviews</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
                <li onClick={handleLogout}><NavLink exact to="/logout">Logout</NavLink></li>
              </ul>
            </nav>

          </section>
        </div>
      );
}

export default NavBar

