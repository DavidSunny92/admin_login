import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  alldata: any = false;
  constructor(private dataser: DataService, private router: Router, private route: ActivatedRoute, public toastr: ToastrManager) { }

  ngOnInit() {
    if (localStorage.getItem('User') != "admin") {
      this.router.navigate(["/login"])
    }
    this.route.params.subscribe(params => {
      this.getEmployee(params['id'])
    });

  }

  getEmployee(id) {
    this.dataser.viewEmp(id).subscribe(res => {
      this.alldata = res.data;
      if (res.data == null) {
        this.toastr.errorToastr('Something went wrong', 'Fail!');
      }
    }, error => {
      var msg = "Something Went Wrong"
      if (error.message) {
        msg = error.message
      }
      this.toastr.errorToastr(msg, 'Fail!');
    })
  }



}
