import { TransitiveCompileNgModuleMetadata } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular"; // useful for typechecking

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // code referenced from https://www.emailjs.com/docs/examples/angular/
  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { color: "slategray", title: "event 1", date: "2020-12-01" },
      {
        color: "maroon",
        title: "Exam Week",
        start: "2020-12-10",
        end: "2020-12-17",
      },
      { color: "black", title: "CS 336 showcase ", date: "2020-12-14" },
      { color: "olive", title: "Last Day of Fall 2020", date: "2020-12-16" },
      {
        color: "orange",
        title: "Birthday Party",
        duration: "40:00:00",
        start: "2020-12-21T07:15:00",
        // date: "2020-12-01",
        defaultAllDay: false,
      },
    ],
    weekends: true,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    },
    weekNumbers: false,
    dayMaxEvents: true,
  };

  handleDateClick(arg) {
    alert("date click! " + arg.dateStr);
  }
}
