import { Component, OnInit } from '@angular/core';
import { LoadMainServiceService } from '../../load-main-service.service';
import { PAGE_TITLE } from '../../constant/constant';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public title_name: string = PAGE_TITLE.ABOUT_PAGE;

  constructor(private loadMainServiceService: LoadMainServiceService) { }

  ngOnInit(): void {
    this.loadMainServiceService.loadMianTsFile();
  }

}
