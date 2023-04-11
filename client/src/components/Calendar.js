import ReactCalendar from 'react-calendar';
import { useState } from 'react';
import styled from 'styled-components';
// import Time from './Time.js'


function Calendar() {
  const [value, onChange] = useState(new Date());
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  return (
    <CalendarContainer>
      <h1>Which chef would you like to book?</h1>
      <StyledCalendar
        onChange={onChange}
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        calendarType="US"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
      />
    </CalendarContainer>
  );
}

export default Calendar;

const CalendarContainer = styled.div`
    justify-content: center;
    margin: auto;
    text-align: center;
    margin-top: 25px;
  width: 600px;
  height: 400px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-image: url("https://img.freepik.com/premium-photo/lavender-flowers-light-nature-with-blur-background_48237-28.jpg?w=1480");
  backdrop-filter: blur(5px);
  background-size: 115%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  color: #CC0099;
`;

const StyledCalendar = styled(ReactCalendar)`

  & .react-calendar__tile--active {
    background-color: #007bff;
    color: #CC0099;
    font-size: 18px;
  }

  & .react-calendar__tile--now {
    border: 1px solid #007bff;
    font-size: 18px;
    color: #CC0099;
  }

  & .react-calendar__tile--now:enabled:hover,
  & .react-calendar__tile--active:enabled:hover,
  & .react-calendar__tile--hasActive:enabled:hover {
    background-color: #007bff;
    color: #CC0099;
  }
`;