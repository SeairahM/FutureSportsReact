import React from "react";
import "./events.css";

const Events = () => {
  return (
    <div>
      <h2 id="events">Events</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Venue</th>
            <th>Type</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23 Aug 2023</td>
            <td>Future Sports - Club Open Day</td>
            <td>Ballarat</td>
            <td>Community Event</td>
            <td>
              <a href="https://rowingmanager.com/vic/">Event Info</a>
            </td>
          </tr>
          <tr>
            <td>27 Aug 2023</td>
            <td>Junior Sprint Regatta</td>
            <td>Ballarat</td>
            <td>Relay Race</td>
            <td>
              <a href="https://rowingmanager.com/vic/">Event Info</a>
            </td>
          </tr>
          <tr>
            <td>28 Aug 2023</td>
            <td>Future Sports - Volunteer Registration</td>
            <td>Ballarat</td>
            <td>Community Event</td>
            <td>
              <a href="https://rowingmanager.com/vic/">Event Info</a>
            </td>
          </tr>
          <tr>
            <td>9 Sep 2023</td>
            <td>Games Registration Day</td>
            <td>Lake Weeroona</td>
            <td>Community Event</td>
            <td>
              <a href="https://rowingmanager.com/vic/">Event Info</a>
            </td>
          </tr>
          <tr>
            <td>9 Sep 2023</td>
            <td>Raggata Tournament</td>
            <td>Community Event</td>
            <td>Head Race</td>
            <td>
              <a href="https://rowingmanager.com/vic/">Event Info</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Events;
