import React from "react";
import { Button, Card } from "antd";
import { CalendarDays, MapPin, Users } from "lucide-react";
import "./EventCard.css";

const EventCard = ({ title, organization, description, location, date, time, rsvpCount }) => {
  return (
    <Card id="event-card">
      <div id="event-card-wrapper">
        <div id="event-info">
          <div id="event-info-body">
            <strong><h2 id="card-title">{title}</h2></strong>
            <p id="card-organization">{organization}</p>
            <p id="card-description">{description}</p>
          </div>
        </div>
        <div id="event-attend">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-1">
              <Users style={{ width: "20px" }} />
              <p id="card-rsvpCount">{rsvpCount}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="card-footer" className="flex flex-row justify-between mt-2">
        <div className="flex">
          <MapPin style={{ width: "20px" }} />
          <p id="card-location">{location}</p>
          <CalendarDays style={{ width: "20px" }} />
          <p id="card-date">{date} at {time}</p>
        </div>
        <div className="flex gap-4">
          <Button id="event-join-btn" type="primary">
            RSVP
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
