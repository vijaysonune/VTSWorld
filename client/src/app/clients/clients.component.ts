import { Component } from '@angular/core';
import { SlideInterface } from '../Slide.Interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  slides : SlideInterface[] =   [
    { url: '../assets/Slide/SlideImage1.jpg', title: '1' },
    { url: '../assets/Slide/SlideImage2.jpg', title: '2' },
    { url: '../assets/Slide/SlideImage3.jpg', title: '3' }  
  ];

}
