import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  constructor() { }

  public time_string: string = "";
  public date_string: string = "";
  public day_string: string = "";

  private intervalId: any;

  ngOnInit() {
    this.updateTime()

    this.intervalId = setInterval(() => {
      this.updateTime()
    }, 60000)
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  private updateTime() {
    let date = new Date()
    let hour: string = "";
    let hour_time = date.getHours()
    let meridium = '';
    if (hour_time <= 12) {
      if (hour_time < 10) {
        hour = `0${hour_time}`
        meridium = 'am'
      }
      else if (hour_time == 12) {
        hour = `${hour_time}`
        meridium = 'pm'
      }
      else {
        hour = `${hour_time}`
        meridium = 'am'
      }
    }
    else {
      let hour_correction = hour_time - 12;
      if (hour_correction < 10) {
        hour = `0${hour_correction}`
      }
      else {
        hour = `${hour_correction}`
      }
      meridium = 'pm'
    }
    let minutes_num = date.getMinutes()
    let minutes: string = '';
    if (minutes_num < 10) {
      minutes = `0${minutes_num}`
    }
    else {
      minutes = `${minutes_num}`
    }

    /* setting date */
    let year = date.getFullYear()
    let month_num = date.getMonth()
    let month: string = '';
    let date_num = date.getDate()
    if (month_num < 10) {
      month = `0${month_num}`
    }
    else {
      month = `${month_num}`
    }

    let day_value = date.getDay()
    let day_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day: string = day_names[day_value]

    this.time_string = `${hour}:${minutes} ${meridium}`
    this.date_string = `${year}-${month}-${date_num}`
    this.day_string = `${day}`
  }
}
