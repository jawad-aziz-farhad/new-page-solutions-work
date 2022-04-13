import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payload } from 'src/app/interfaces';
import { ApiRequestsService } from '../../services/api-requests/api-requests.service';
import { SharedDataService } from '../../services/shared-data/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  private payload: Payload = { query: 'flower', page: 1, per_page: 20 };

  constructor(private readonly apiRequests: ApiRequestsService, 
    private readonly sharedDataService: SharedDataService, 
    private readonly router: Router) {}

  ngOnInit(): void {
    this.loadData()
  }

  hasMoreData(): boolean {
    return this.payload.page < this.sharedDataService?.apiResponse?.total_pages;
  }

  loadData(event?: any): void {
    if (!event || (event && this.payload.page < this.sharedDataService.apiResponse.total_pages)) {
      this.apiRequests.getImages(this.payload).subscribe((response: any) => {
        this.sharedDataService.apiResponse = response;
        this.payload = {...this.payload, page: this.payload.page + 1 };
        if (event) {
          event.target.complete();
        }
      },
      error => {
        console.log('Error:', error);
        if (event)
          event.target.complete();
      })
    }
  }

  onImageClick(item: any, index: number) : void {
    this.router.navigateByUrl('/details', { state: {item, index}})
  } 
}
