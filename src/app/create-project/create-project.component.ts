import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
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
      projectName: "My Awesome Project ABC",
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
  ]
  items = []

  isCreate = false
  isUpdate = false
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  createProjetc() {
    this.isCreate = !this.isCreate 
    this.isUpdate= false
  }

    updateConfigProjetc(item) { 
      this.isUpdate = true
      this.isCreate = false
      this.items = item
      this.cdRef.detectChanges();
    }
}
