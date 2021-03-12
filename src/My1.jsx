import React, { useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  parse,
} from "date-fns";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import "./Calendar.css";
const Calendar = () => {
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date(),
  });
  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="header row flex-middle">
        <div className="column col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="column col-center">
          <span>{format(state.currentMonth, dateFormat)}</span>
        </div>
        <div className="column col-end">
          <div className="icon" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };
  const days = () => {
    const dateFormat = "eeee";
    const days = [];
    let startDate = startOfWeek(state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const cells = () => {
    const { currentMonth, selectedDate } = state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`column cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => onDateClick(parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
  function nextMonth() {
    setState({
      currentMonth: addMonths(state.currentMonth, 1),
    });
  }

  function prevMonth() {
    setState({
      currentMonth: subMonths(state.currentMonth, 1),
    });
  }

  function onDateClick(day) {
    return setState({ selectedDate: day });
  }
  return (
    <div className="calendar">
      <div>{header()}</div>
      <div>{days()}</div>
      <div>{cells()}</div>
    </div>
  );
};
export default Calendar;
