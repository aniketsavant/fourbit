import { Component, OnInit } from '@angular/core';
import { LoadMainServiceService } from '../../load-main-service.service';
import { PAGE_TITLE } from '../../constant/constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public title_name: string = PAGE_TITLE.CONTACT_PAGE;

  constructor(private loadMainServiceService: LoadMainServiceService) { }

  ngOnInit(): void {
    this.loadMainServiceService.loadMianTsFile();
  }

}
