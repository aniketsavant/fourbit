import { Component, OnInit } from '@angular/core';
import { LoadMainServiceService } from '../../load-main-service.service';
import { PAGE_TITLE } from '../../constant/constant';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  public title_name: string = PAGE_TITLE.CAREER_PAGE;

  constructor(private loadMainServiceService: LoadMainServiceService) { }

  ngOnInit(): void {
    this.loadMainServiceService.loadMianTsFile();
  }

}
