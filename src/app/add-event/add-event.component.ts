import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-event',
  standalone: false,
  
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  @Output() eventAdded = new EventEmitter<{ date: string; title: string }>();

  eventTitle: string = '';
  eventDate: string = '';

  addEvent() {
    if (this.eventTitle && this.eventDate) {
      this.eventAdded.emit({ date: this.eventDate, title: this.eventTitle });
      this.eventTitle = '';
      this.eventDate = '';
    }
  }
}
