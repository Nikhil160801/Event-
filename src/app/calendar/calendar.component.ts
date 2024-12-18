import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: false,
  
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  @Input() events: { date: string; title: string }[] = [];
}
