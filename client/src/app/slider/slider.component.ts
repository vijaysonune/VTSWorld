import { Component } from '@angular/core';
import { SlideInterface } from '../Slide.Interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  slides : SlideInterface[] =   [
    { url: '/assets/contruction/ConstImage1.jpg', title: '1' },
    { url: '/assets/contruction/ConstImage2.jpg', title: '2' },
    { url: '/assets/contruction/ConstImage3.jpg', title: '3' },
    { url: '/assets/contruction/ConstImage4.jpg', title: '3' }    
  ];

}
