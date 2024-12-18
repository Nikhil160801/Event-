import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: { date: string; title: string }[] = JSON.parse(localStorage.getItem('events') || '[]');

  // Add Event
  addEvent(event: { date: string; title: string }) {
    this.events.push(event);
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  // Delete Event
  deleteEvent(index: number) {
    this.events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  // Edit Event
  editEvent(index: number) {
    const updatedTitle = prompt('Edit event title:', this.events[index].title);
    if (updatedTitle !== null && updatedTitle.trim() !== '') {
      this.events[index].title = updatedTitle;
      localStorage.setItem('events', JSON.stringify(this.events));
    }
  }
}
