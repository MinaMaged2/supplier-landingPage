import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  services: any[] = [
    {
      title: 'Realtime analytics',
      desc: 'Create reports with an easy to use drag-and-drop designer.',
      className: 'blue'
    },
    {
      title: 'Collaborate securely',
      desc: 'Create reports with an easy to use drag-and-drop designer.',
      className: 'yellow'
    },
    {
      title: 'Collaborate securely',
      desc: 'Create reports with an easy to use drag-and-drop designer.',
      className: 'orange'
    },
    {
      title: 'Collaborate securely',
      desc: 'Create reports with an easy to use drag-and-drop designer.',
      className: 'pink'
    },
    {
      title: 'Realtime analytics',
      desc: 'Create reports with an easy to use drag-and-drop designer.',
      className: 'blue'
    },
    {
      title: 'Collaborate securely',
      desc: 'Create reports with an easy to use drag-and-drop designer.',
      className: 'yellow'
    },
    {
      title: 'Collaborate securely',
      desc: 'Create reports with an easy to use drag-and-drop designer.',
      className: 'orange'
    },
    {
      title: 'Collaborate securely',
      desc: 'Create reports with an easy to use drag-and-drop designer.',
      className: 'pink'
    },
  ]
}
