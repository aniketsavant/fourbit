import { Component, OnInit } from '@angular/core';
import { LoadMainServiceService } from '../../../load-main-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loadMainServiceService: LoadMainServiceService) { }

  ngOnInit(): void {
    this.loadMainServiceService.loadMianTsFile();
  }

}
