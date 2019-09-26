import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TasksState, ITasksState } from '@app/store/tasks.state';
import { GetStats } from '@app/store/tasks.actions';
import { Observable, Subscription } from 'rxjs';
import { ITaskStat } from '@core/interfaces/task-stat.interface';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  @Select(TasksState) state$!: Observable<ITasksState>;

  subscription: Subscription | null = null;

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}], yAxes: [{
        ticks: {
          beginAtZero: true,
          suggestedMax: 10,
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public chartLabels: Label[] = [];
  public chartType: ChartType = 'bar';
  public chartLegend = true;
  public chartPlugins = [pluginDataLabels];
  private createdChartData: ChartDataSets = { data: [], label: 'Created' };
  private completedChartData: ChartDataSets = { data: [], label: 'Completed' };
  public chartData: ChartDataSets[] = [
    this.createdChartData,
    this.completedChartData,
  ];
  public chartColors: Color[] = [
    { // warning
      backgroundColor: 'rgba(253, 133, 101, 1)',
      borderColor: '#fd8565',
      pointBackgroundColor: 'rgba(253, 133, 101, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(253, 133, 101, 0.8)'
    },
    { // success
      backgroundColor: 'rgba(16, 220, 96, 1)',
      borderColor: '#10dc60',
      pointBackgroundColor: 'rgba(16, 220, 96, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(16, 220, 96, 0.8)'
    },
  ];

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetStats());
  }

  ionViewWillEnter() {
    this.subscription = this.state$.subscribe(state => {
      let stats = [...state.stats];
      if (stats.length > 7) {
        stats = stats.slice(Math.max(stats.length - 7, 1));
      }
      this.statsToChartData(stats);
    });
  }

  ionViewDidLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  statsToChartData(stats: ITaskStat[]) {
    this.setChartLabels(stats);
    this.setChartData(stats);
  }

  setChartLabels(stats: ITaskStat[]) {
    this.chartLabels = stats.map(stat => this.dateToDateLabel(stat.id));
  }

  setChartData(stats: ITaskStat[]) {
    const createdData: number[] = [];
    const completedData: number[] = [];
    stats.forEach((stat, index) => {
      if (stat.created) {
        createdData[index] = stat.created;
      }
      if (stat.completed) {
        completedData[index] = stat.completed;
      }
    });
    this.createdChartData.data = createdData;
    this.completedChartData.data = completedData;
  }

  dateToDateLabel(date: string) {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return day + ' ' + this.getMonthName(+month) + ' ' + year;
  }

  getMonthName(monthNumber: number) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[monthNumber];
  }

}

