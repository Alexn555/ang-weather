import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() public isVisible: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
