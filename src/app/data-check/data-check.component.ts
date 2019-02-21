import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-check',
  templateUrl: './data-check.component.html',
  styleUrls: ['./data-check.component.css']
})
export class DataCheckComponent implements OnInit {

  public list: any;

  constructor(
    private service: ListService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // this.getList(2);
  }

  public getList(id: number) {
    if (id === 2) {
      this.service.getList(id).subscribe (data => {
        this.list = data;
        this.showSuccess()
      });
      return;
    }
    if (isNaN(id)) {
      this.showError()
      return;
    }
    if (id == 2) {
      this.showWarning();
      return;
    }

    if (id !== 2){
      this.showInfo();
      return;
    }
  }

  public showSuccess() {
    this.toastr.success('Data retrieved');
  }

  public showError() {
    this.toastr.error('You are passing a String', 'Error', {
      timeOut: 30000,
    });
  }

  public showInfo() {
    this.toastr.info('Providing data for another id', 'Info', {
      disableTimeOut: true
    });
  }

  public showWarning() {
    this.toastr.warning('Converting string to number')
  }

}
