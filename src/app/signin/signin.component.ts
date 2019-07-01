import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:string = "";
  pass:string = "";


  constructor(private http : HttpClient, private router: Router) { }

  obj : Object;
  url : string = 'http://localhost:3000/api/Employees';


  ngOnInit() {
    this.http.get(this.url).subscribe((res)=>{
      this.obj=res as any;  

    });
  }
  mysubmit()
  {
    var x = document.forms["signin"]["user"].value;
    var y = document.forms["signin"]["pass"].value;
    var length= Object.keys(this.obj).length;
    var id;

    for(let i=0;i<length;i++)
    {
      if(Object.values(this.obj)[i].username == x)
      {
        id=i;
      }
    }
  
    if(x == "" || x != Object.values(this.obj)[id].username)
    {
      alert("incorrect username");
    }
    else if( y == "" || y != Object.values(this.obj)[id].password)
    {
      alert("incorrect password");
    }
    else{
      sessionStorage.setItem("sessions",id+1);
      this.router.navigate(['/welcome']);
    }
  }

}
