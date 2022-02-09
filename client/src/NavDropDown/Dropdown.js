import React from 'react';
import './Dropdown.css';

function Dropdown() {

  const date = new Date()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  const mon = date.getMonth()
  const mon_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const day = date.getDay()
  const day_arr = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const dateday = date.getDate()

  return (
    <div className="dropdown-menu">
      <p>Last login: {day_arr[day-1]} {mon_arr[mon]}  {dateday} {h}:{m}:{s} on ttys001</p>
      <p>callummcluskey100@gmail.com ~ % curl <a href="https://github.com/callummclu">Github</a></p>
    </div>
  );
}

export default Dropdown;
