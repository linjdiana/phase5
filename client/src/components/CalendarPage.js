import CalendarComponent from './CalendarComponent'
import WheelOfFortune from './WheelOfFortune'

function CalendarPage({ recipes }) {
    return (
    <>
    <CalendarComponent />
    <WheelOfFortune recipes={recipes}/>
    </>
    )
}
export default CalendarPage