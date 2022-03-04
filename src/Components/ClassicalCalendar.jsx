import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "./fakeData";
import "./grid.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

export default class ClassicalCalendar extends Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date(),
      view: "all",
    };
  }
  logout() {
    localStorage.removeItem("doctor");
    console.log("hani lenna ")
  }
  backToAll = () => {
    this.setState({
      view: "all",
    });
  };
  handleViews = (s) => {
    this.setState({
      view: s,
    });
  };
  handleChange = (date) => {
    this.setState({ selectedDate: date });
  };
  render() {
    let sortedData = [];
    sortedData = data.filter(
      (patient) =>
        parseInt(patient.dateOfAp[0]) === this.state.selectedDate.getDate()
    );

    return (
      <div>
        <Sidebar/>
        <div>
          <div></div>
          <div className="parent">
            <div className="div1">
              <div>
                <br />
                <br />
                <h6 className="center">
                  Hello doctor, these are your appointements, you only have to
                  select a date on the calendar
                </h6>
                <br />
                <div className="center">
                  <Calendar onChange={this.handleChange} />
                </div>
                <br />
                <div className="center">
                  <div> you have {sortedData.length} appointments on</div>
                  <br />
                  <div> {this.state.selectedDate.toDateString()}</div>
                  <br />
                </div>
                <div className="center "></div>
                <br />
                <h2 className="center">Table of appointements:</h2>
                <div className="center">
                  <table id="customers">
                    <tr>
                      <th>Name</th>
                      <th>Date of bith</th>
                      <th>Date of appointement</th>
                      <th>Time</th>
                    </tr>
                    {sortedData.map((patient) => {
                      return (
                        <tbody key={patient.name}>
                          <tr key={patient.name}>
                            <td>{patient.name}</td>
                            <td>{patient.dateOfBirth}</td>
                            <td>{patient.dateOfAp}</td>
                            <td>{patient.time}</td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
