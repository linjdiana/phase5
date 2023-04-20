import {Calendar} from 'react-big-calendar';
import { useState } from 'react';
import styled from 'styled-components';
import { format, parse, startOfWeek, getDay } from "date-fns";
import { dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import enUS from 'date-fns/locale/en-US';
import DatePicker from "react-datepicker";

const locales = {
  "en-US": require('date-fns/locale/en-US')
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
        title: "Team Retreat",
        allDay: true,
        start: new Date(2023, 3, 24),
        end: new Date(2023, 3, 28),
    },
    {
        title: "Presentation day",
        allDay: true,
        start: new Date(2023, 3, 21),
        end: new Date(2023, 3, 21),
    },
    {
        title: "Catering at wedding in Cabo",
        start: new Date(2023, 4, 20),
        end: new Date(2023, 4, 24),
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
      <h1>Calendar</h1>
      {/* <label className="chef_id"> */}
      <select
                        name="chef_id" className="calendardropdown">
                        {/* // value={formik.values.chef}
                        // onChange={formik.handleChange} */}
                        <option value="1">Diana</option>
                        <option value="2">Gordon</option>
                        <option value="3">Joon</option>
                        <option value="4">Tony</option>
                        <option value="5">Anika</option>
                    </select>
                {/* </label> */}
             <div> 
       {/* <input type="text" placeholder="Add Title" style={{ width: 200, marginRight: "10px"}} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} /> */}
        <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
        selected={newEvent.start} onChange={(start => setNewEvent({...newEvent, start}))} />
        <DatePicker placeholderText="End Date" style={{marginRight: "10px"}}
        selected={newEvent.end} onChange={(end => setNewEvent({...newEvent, end}))} />
        <button style={{marginTop: "10px", color: "purple"}} onClick={handleAddEvent}>Add Event</button>
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
        localizer={localizer}
        startAccessor="start" endAccessor="end" style={{height: 500, margin: "35px"}}
      />
    </CalendarContainer>
  );
}

export default CalendarPage;

const CalendarContainer = styled.div`
  justify-content: center;
    margin: auto;
    text-align: center;
    margin-top: 25px;
    width: 1080px;
    height: 750px;
    border-radius: 4px;
    border: 1px solid #ccc;
    // background-image: url("https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/pexels-photo-1131406.webp");
    backdrop-filter: blur(5px);
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-size: 22px;
    color: #CC0099;
`;

const StyledCalendar = styled(Calendar)`
  margin: auto;
  text-align: center;
  font-size: 20px;
  width: 1000px;
  height: 800px;
  justify-content: center;
  border-radius: 25px;
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