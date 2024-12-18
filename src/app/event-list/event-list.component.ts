import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-list',
  standalone: false,
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  @Input() events: { date: string; title: string; isEditing?: boolean }[] = [];
  @Output() eventDeleted = new EventEmitter<number>();
  @Output() eventEdited = new EventEmitter<number>();  // Emits the index when saving

  deleteEvent(index: number) {
    this.eventDeleted.emit(index);
  }

  editEvent(index: number) {
    // Toggle edit mode
    this.events[index].isEditing = true;
  }

  saveEvent(index: number) {
    // Update the event and turn off edit mode
    this.events[index].isEditing = false;
    this.eventEdited.emit(index);  // Emit to the parent component for saving
  }

  cancelEdit(index: number) {
    // Reset the event to its original state and turn off edit mode
    this.events[index].isEditing = false;
  }
}
