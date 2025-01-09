import { Component, OnInit, signal } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "app/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"],
})
export class ProjectListComponent implements OnInit {
  listItem = [
    {
      projectName: "My Awesome Project",
      author: "John Doe",
      version: "1.0.0",
      create_date:'03/01/2025',
      configs: [
        {
          featureName: "User Management",
          uiPath: "/users",
          variables: [
            {
              variableName: "userId",
              displayVariableName: "User ID",
            },
            {
              variableName: "userName",
              displayVariableName: "User Name",
            },
            {
              variableName: "userEmail",
              displayVariableName: "User Email",
            },
          ],
        },
        {
          featureName: "Product Management",
          uiPath: "/products",
          variables: [
            {
              variableName: "productId",
              displayVariableName: "Product ID",
            },
            {
              variableName: "productName",
              displayVariableName: "Product Name",
            },
            {
              variableName: "productPrice",
              displayVariableName: "Product Price",
            },
          ],
        },
        {
          featureName: "Order Management",
          uiPath: "/orders",
          variables: [
            {
              variableName: "orderId",
              displayVariableName: "Order ID",
            },
            {
              variableName: "orderDate",
              displayVariableName: "Order Date",
            },
            {
              variableName: "orderStatus",
              displayVariableName: "Order Status",
            },
          ],
        },
      ],
    },
    {
      projectName: "My Awesome Project",
      author: "John Doe",
      version: "1.0.0",
      create_date:'03/01/2025',
      configs: [
        {
          featureName: "User Management",
          uiPath: "/users",
          variables: [
            {
              variableName: "userId",
              displayVariableName: "User ID",
            },
            {
              variableName: "userName",
              displayVariableName: "User Name",
            },
            {
              variableName: "userEmail",
              displayVariableName: "User Email",
            },
          ],
        },
        {
          featureName: "Product Management",
          uiPath: "/products",
          variables: [
            {
              variableName: "productId",
              displayVariableName: "Product ID",
            },
            {
              variableName: "productName",
              displayVariableName: "Product Name",
            },
            {
              variableName: "productPrice",
              displayVariableName: "Product Price",
            },
          ],
        },
        {
          featureName: "Order Management",
          uiPath: "/orders",
          variables: [
            {
              variableName: "orderId",
              displayVariableName: "Order ID",
            },
            {
              variableName: "orderDate",
              displayVariableName: "Order Date",
            },
            {
              variableName: "orderStatus",
              displayVariableName: "Order Status",
            },
          ],
        },
      ],
    },
  ];
  expandedIndex: number | null = null;
  panelOpenState = signal(false);

  items = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.getListItems();
  }

  getListItems() {
    return (this.items = this.listItem);
  }

  handleExpansion(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  openConfirmDialog(item: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "480px",
      data: {
        title: "Confirm Delete",
        message: "Are you sure you want to delete this item?",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("Item deleted", item);
      } else {
        console.log("Delete cancelled");
      }
    });
  }
}
