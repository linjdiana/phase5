import { Calendar } from 'react-big-calendar';
import { useState } from 'react';
import styled from 'styled-components';
import { format, parse, startOfWeek, getDay } from "date-fns";
import { dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import enUS from 'date-fns/locale/en-US';
import DatePicker from "react-datepicker";

const locales = {
  "en-US": enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

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

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <CalendarContainer>
      <h3>Which chef would you like to book?</h3>
             <div> 
       <input type="text" placeholder="Add Title" style={{ width: 200, marginRight: "10px"}} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
        selected={newEvent.start} onChange={(start => setNewEvent({...newEvent, start}))} />
        <DatePicker placeholderText="End Date" style={{marginRight: "10px"}}
        selected={newEvent.end} onChange={(end => setNewEvent({...newEvent, end}))} />
        <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
      </div>
      <StyledCalendar
        events = {allEvents}
        // onChange={onChange}
        // value={value}
        // minDate={minDate}
        // maxDate={maxDate}
        // calendarType="US"
        // prev2Label={null}
        // next2Label={null}
        // showNeighboringMonth={false}
        // localizer={localizer}
        // startAccessor="start" endAccessor="end" style={{height: 500, margin: "20px"}}
      />
    </CalendarContainer>
  );
}

export default CalendarPage;

const CalendarContainer = styled.div`
    margin: auto;
    text-align: center;
    margin-top: 25px;
    width: 1200px;
    height: 1000px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-image: url("https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/pexels-photo-1131406.webp");
    backdrop-filter: blur(5px);
    background-size: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    color: #CC0099;
`;

const StyledCalendar = styled(Calendar)`
  font-size: 18px;
  width: 800px;
  height: 1000px;
  justify-content: center;
  margin: auto;
}
  & .react-calendar__tile--active {
    background-color: #007bff;
    color: #CC0099;
    font-size: 25px;
  }
  
  & .react-calendar__tile--now {
    border: 1px solid #007bff;
    font-size: 25px;
    color: #CC0099;
  }

  & .react-calendar__tile--now:enabled:hover {
    background-color: #007bff;
    color: #CC0099;
    font-size: 25px;
  }

  & .react-calendar__tile--active:enabled:hover {
    background-color: #007bff;
    color: #CC0099;
    font-size: 25px;
  }

  & .react-calendar__tile--hasActive:enabled:hover {
    background-color: #007bff;
    color: #CC0099;
    font-size: 25px;
  }
};`

// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import React, { useState } from "react";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const locales = {
//   "en-US": require('date-fns/locale/en-US')
// }
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })

// const events = [
//     {
//         title: "Cramming to finish project",
//         allDay: true,
//         start: new Date(2023, 3, 13),
//         end: new Date(2023, 3, 21),
//     },
//     {
//         title: "Presentation day",
//         allDay: true,
//         start: new Date(2023, 3, 21),
//         end: new Date(2023, 3, 21),
//     },
//     {
//         title: "Vacation",
//         start: new Date(2023, 3, 22),
//         end: new Date(2023, 3, 24),
//     },
// ];

// function CalendarPage() {
//   const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
//   const [allEvents, setAllEvents] = useState(events)

//   // pushes new event to the end of the allEvents array
//   function handleAddEvent() {
//     setAllEvents([...allEvents, newEvent])
//   }

//   return (
//     <div className="App">
//       <h1>hi</h1>
//       <h2>add an event</h2>
//       <div> 
//       <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
//         <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
//         selected={newEvent.start} onChange={(start => setNewEvent({...newEvent, start}))} />
//         <DatePicker placeholderText="End Date" style={{marginRight: "10px"}}
//         selected={newEvent.end} onChange={(end => setNewEvent({...newEvent, end}))} />
//         <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
//       </div>
//       <Calendar localizer={localizer} events={allEvents} 
//       startAccessor="start" endAccessor="end" style={{height: 500, margin: "20px"}} />
//     </div>
//   );
// }

// export default CalendarPage;
