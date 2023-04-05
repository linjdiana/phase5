// import ChefsContainer from './ChefsContainer';
// import Calendar from './Calendar'
// import RecipesContainer from './RecipesContainer'
// import ReviewsContainer from './ReviewsContainer'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div class="navbar">
          <div>in beta in sf</div>
          <p data-item='FÜBER'>FÜBER</p>

          <section>
            <div>Bringing the chef to you.</div>
            <nav>
              <ul class="menuItems">
                <li><NavLink exact to="/chefs">Chefs</NavLink></li>
                <li><NavLink exact to="/calendar">Calendar</NavLink></li>
                <li><NavLink exact to="/recipes">Recipes</NavLink></li>
                <li><NavLink exact to="/reviews">Reviews</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
              </ul>
            </nav>

          </section>
        </div>
      );
}

export default NavBar

