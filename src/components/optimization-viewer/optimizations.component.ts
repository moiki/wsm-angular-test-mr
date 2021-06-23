import { Component } from '@angular/core';

@Component({
  selector: 'app-optimization',
  templateUrl: './optimizations.component.html',
  styleUrls: ['./optimizations.component.scss'],
})
export class OptimizationsComponent {
  optimization: any = [];
  currentTab?: any;
  idSelected?: number = 34;
  actions?: any = [];
  selectedOptimization: number = 0;
  openOpt: number = 0;
  constructor() {
    fetch(
      'https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/items/'
    ).then((data) => {
      data.json().then((value) => {
        this.setCurrentTab(value[0]);
        this.optimization = value?.map((value: any, index: number) => {
          return {
            ...value,
            selected: index === 0 ? true : false,
          };
        });
      });
    });
  }

  setCurrentTab(tab: any) {
    this.currentTab = tab.itemVariants[0];
    this.idSelected = tab._id || 34;
    this.actions = tab.actions || [];
    this.selectedOptimization = 0;
  }
  setSelectOpt(id: number) {
    if (this.selectedOptimization === id) {
      this.selectedOptimization = 0;
    } else {
      this.selectedOptimization = id;
    }
  }
  setOpenOpt(id: number) {
    if (this.openOpt === id) {
      this.openOpt = 0;
    } else {
      this.openOpt = id;
    }
  }
}
