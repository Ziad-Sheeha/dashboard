import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: [
        'ديسمبر',
        'نوفمبر',
        'أكتوبر',
        'سبتمبر',
        'أغسطس',
        'يوليو',
        'يونيو',
        'مايو',
        'أبريل',
        'مارس',
        'فبراير',
        'يناير',
      ],
      datasets: [
        {
          label: '',
          data: [12, 51, 62, 33, 21, 62, 51, 62, 33, 21, 62, 60],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          tension: 0.4,
          backgroundColor: '#c7bcfcd0',
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {},
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
  }
}
