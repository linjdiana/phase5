import ReactCalendar from 'react-calendar';
import { useState } from 'react';
import styled from 'styled-components';


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
  width: 400px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const StyledCalendar = styled(ReactCalendar)`
  & .react-calendar__tile--active {
    background-color: #007bff;
    // color: #fff;
  }

  & .react-calendar__tile--now {
    border: 1px solid #007bff;
  }

  & .react-calendar__tile--now:enabled:hover,
  & .react-calendar__tile--active:enabled:hover,
  & .react-calendar__tile--hasActive:enabled:hover {
    background-color: #007bff;
    color: #fff;
  }
`;