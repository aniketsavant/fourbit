import { Component, OnInit } from '@angular/core';
import { LoadMainServiceService } from '../../load-main-service.service';
import { PAGE_TITLE } from '../../constant/constant';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  public title_name: string = PAGE_TITLE.SERVICE_PAGE; 

  constructor(private loadMainServiceService: LoadMainServiceService) { }

  ngOnInit(): void {
    this.loadMainServiceService.loadMianTsFile();
  }

}
