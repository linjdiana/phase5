import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require('date-fns/locale/en-US')
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
    {
        title: "Cramming to finish project",
        allDay: true,
        start: new Date(2023, 3, 13),
        end: new Date(2023, 3, 21),
    },
    {
        title: "Presentation day",
        allDay: true,
        start: new Date(2023, 3, 21),
        end: new Date(2023, 3, 21),
    },
    {
        title: "Vacation",
        start: new Date(2023, 3, 22),
        end: new Date(2023, 3, 24),
    },
];

function App() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  // pushes new event to the end of the allEvents array
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h1>hi</h1>
      <h2>add an event</h2>
      <div> 
      <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
        selected={newEvent.start} onChange={(start => setNewEvent({...newEvent, start}))} />
        <DatePicker placeholderText="End Date" style={{marginRight: "10px"}}
        selected={newEvent.end} onChange={(end => setNewEvent({...newEvent, end}))} />
        <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
      </div>
      <Calendar localizer={localizer} events={allEvents} 
      startAccessor="start" endAccessor="end" style={{height: 500, margin: "20px"}} />
    </div>
  );
}

export default App;
