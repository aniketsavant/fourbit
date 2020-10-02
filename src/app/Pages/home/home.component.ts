import { Component, OnInit } from '@angular/core';
import { LoadMainServiceService } from '../../load-main-service.service';
import { PAGE_TITLE } from '../../constant/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title_name: string = PAGE_TITLE.HOME_PAGE;

  constructor(private loadMainServiceService: LoadMainServiceService ) { }

  ngOnInit(): void {
    this.loadMainServiceService.loadMianTsFile();
  }

}
