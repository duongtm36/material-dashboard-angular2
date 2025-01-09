import { Component, Input, OnInit, signal } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-update-project",
  templateUrl: "./update-project.component.html",
  styleUrls: ["./update-project.component.css"],
})
export class UpdateProjectComponent implements OnInit {
  @Input() items: any = {};
  panelOpenState = signal(false);
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: this.items?.projectName,
      author: this.items?.uiPath,
      version: [""],
      configs: this.fb.array([]),
    });
  }

  ngOnInit() {
    if (this.items && typeof this.items === "object") {
      this.projectForm.patchValue({
        projectName: this.items.projectName || "",
        author: this.items.author || "",
        version: this.items.version || "",
      });

      if (this.items.configs && Array.isArray(this.items.configs)) {
        this.items.configs.forEach((config: any) => {
          const configGroup = this.fb.group({
            featureName: [config.featureName || ""],
            uiPath: [config.uiPath || ""],
            variables: this.fb.array([]),
          });

          if (config.variables && Array.isArray(config.variables)) {
            config.variables.forEach((variable: any) => {
              const variableGroup = this.fb.group({
                variableName: [variable.variableName || ""],
                displayVariableName: [variable.displayVariableName || ""],
              });
              (configGroup.get("variables") as FormArray).push(variableGroup);
            });
          }

          this.configs.push(configGroup);
        });
      }
    }
  }

  get configs(): FormArray {
    return this.projectForm.get("configs") as FormArray;
  }

  addConfig() {
    const configGroup = this.fb.group({
      featureName: this.items?.projectName,
      uiPath: this.items?.uiPath,
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
