import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActiveService } from 'src/app/active.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  item: any;
  i: any;
  active: any;
  activity: any;
  users: any;
  items: any;

  submitedFrm(formData: any) {
    console.log("submitted")
    console.log(formData)
  }

  mainArray: any[] = []
  displayArray: any[] = []
  priority: any[] = []
  meth: any[] = []
  constructor(private service: ActiveService) { }

  ngOnInit(): void {
    this.landingData()
    this.getdatamethod()
    this.getDataselect()

  }
  landingData() {
    this.service.getData().subscribe((values) => {
      this.mainArray = values
      console.log(this.mainArray)

    })
  }

  getdatamethod() {
    this.service.getDatas().subscribe((allvalue) => {
      this.priority = allvalue
      console.log(this.priority);

    })
  }

  getDataselect() {
    this.service.getDataselect().subscribe((selectvalue) => {
      this.meth = selectvalue
      console.log(this.meth);

    })
  }
  localstoragedata() {
    throw new Error('Method not implemented.');
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
  deleteTask(arg0: any, arg1: any) {
    throw new Error('Method not implemented.');
  }
}










