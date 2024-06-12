import { Component } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent {
  single = [
    
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000,
          "min": 7000000,
          "max": 7600000
        },
        {
          "name": "2011",
          "value": 8940000,
          "min": 8840000,
          "max": 9300000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000,
          "min": 7800000,
          "max": 7950000
        },
        {
          "name": "2011",
          "value": 8270000,
          "min": 8170000,
          "max": 8300000
        }
      ]
    },
    {
      "name": "Spain",
      "series": [
        {
          "name": "2010",
          "value": 8850000,
          "min": 780000,
          "max": 1000000
        },
        {
          "name": "2011",
          "value": 8270000,
          "min": 817000,
          "max": 830000
        }
      ]
    },
    {
      "name": "Italy",
      "series": [
        {
          "name": "2010",
          "value": 787300,
          "min": 780000,
          "max": 795000
        },
        {
          "name": "2011",
          "value": 820000,
          "min": 817000,
          "max": 83000
        }
      ]
    }

  ];
  legend = true;
  xAxis = true;
  yAxis = true;

}
