import { Component } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent {

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "Spain",
      "value": 6500000
    },
    {
      "name": "Italy",
      "value": 4400000
    },

  ];

  legend = true;
  xAxis = true;
  yAxis = true;

}
