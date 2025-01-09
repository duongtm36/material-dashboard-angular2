import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from "@angular/core";

@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListComponent implements OnInit {
  expandedIndex:number | null = null;
  panelOpenState = signal(false);

  items = [
    {
      id: 1,
      project_name: "Group Alpha",
      create_date: "05/01/2025",
      features: [
        {
          id: 1,
          feature_name: "Feature Sunrise",
          variable_name: [
            {
              label: "Name",
              value: "name",
            },
            {
              label: "Full Name",
              value: "value",
            },
            {
              label: "Phone",
              value: "phone",
            },
          ],
        },
        { id: 2, feature_name: "Feature Ocean",
          variable_name: [
            {
              label: "Name",
              value: "name",
            },
            {
              label: "Full Name",
              value: "value",
            },
            {
              label: "Phone",
              value: "phone",
            },
            {
              label: "Address",
              value: "address",
            },
          ],
         },
        { id: 3, feature_name: "Feature Mountain" },
      ],
    },
    {
      id: 2,
      project_name: "Group Beta",
      create_date: "04/01/2025",
      features: [
        { id: 1, feature_name: "Feature Sky" },
        { id: 2, feature_name: "Feature River" },
        { id: 3, feature_name: "Feature Forest" },
      ],
    },
    {
      id: 3,
      project_name: "Group Gamma",
      create_date: "03/01/2025",
      features: [
        // { id: 1, feature_name: "Feature Cloud" },
        // { id: 2, feature_name: "Feature Thunder" },
        // { id: 3, feature_name: "Feature Rain" },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  handleExpansion(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
