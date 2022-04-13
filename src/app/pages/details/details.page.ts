import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @ViewChild('imageSlider', { static: true }) slider: IonSlides;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000
    }
  };
  
  title: string;
  page: number;

  constructor(private readonly router: Router, private readonly sharedDataService: SharedDataService) { }

  ngOnInit() {
    const { item, index } = this.router.getCurrentNavigation().extras.state;
    this.slideOpts.initialSlide = index;
    this.title = `by ${item.user.name}`
  }

  ionSlideTransitionEnd(event) {
    const { results } = this.sharedDataService.apiResponse;
    this.slider.getActiveIndex().then(index => {
      if (index > results.length)
        index = 1;
      const item = results[index-1];
      this.title = item && item.user ? `by ${item.user.name}` : `by unknown`;
      this.page = index;
    })
  }

}
