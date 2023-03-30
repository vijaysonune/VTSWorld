import { Component } from '@angular/core';
import { SlideInterface } from '../Slide.Interface';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides : SlideInterface[] =   [    
    { url: '../assets/contruction/ConstImage2.jpg', title: '2' },
    { url: '../assets/contruction/ConstImage3.jpg', title: '3' },
    { url: '../assets/contruction/ConstImage4.jpg', title: '3' },
    { url: '../assets/contruction/ConstImage5.jpg', title: '2' },
    { url: '../assets/contruction/ConstImage7.jpg', title: '3' }        
  ];




}
