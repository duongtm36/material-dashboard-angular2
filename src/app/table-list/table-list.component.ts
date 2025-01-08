import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListComponent implements OnInit {
  isExpansion: boolean = false
  isExpansionSub: boolean = false
  panelOpenState = signal(false);
  constructor() { }

  ngOnInit() {
  }

  handleExpansion() {
    this.isExpansion = !this.isExpansion
  }

  handleExpansionSub() {
    this.isExpansionSub = !this.isExpansionSub
  }

}


