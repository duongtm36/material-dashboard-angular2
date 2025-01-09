import { Component, OnInit, signal } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-new-project",
  templateUrl: "./new-project.component.html",
  styleUrls: ["./new-project.component.css"],
})
export class NewProjectComponent implements OnInit {
  panelOpenState = signal(false);
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: [""],
      author: [""],
      version: [""],
      configs: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.addConfig();
  }

  get configs(): FormArray {
    return this.projectForm.get("configs") as FormArray;
  }

  addConfig() {
    const configGroup = this.fb.group({
      featureName: [""],
      uiPath: [""],
      variables: this.fb.array([]),
    });
    this.configs.push(configGroup);
    this.addRow(this.configs.length - 1);
  }

  addRow(configIndex: number) {
    const rows = this.configs.at(configIndex).get("variables") as FormArray;
    rows.push(
      this.fb.group({
        variableName: [""],
        displayVariableName: [""],
      })
    );
  }

  deleteRow(configIndex: number, rowIndex: number) {
    const rows = this.configs.at(configIndex).get("variables") as FormArray;
    rows.removeAt(rowIndex);
  }

  removeConfig(configIndex: number) {
    this.configs.removeAt(configIndex);
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
