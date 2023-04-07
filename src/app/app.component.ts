import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any;
  formdata:any;
  formData:FormGroup=new FormGroup({ 
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl(),
 }); 
  constructor(private myService:AppService){}
  ngOnInit(){
     
    this.myService.getSomething1().subscribe(data =>{
      console.log("data1",data);
    })
    this.myService.getSomething2().subscribe(data =>{
      console.log("data2",data);
    })
  }
  submit(){
    console.log("inside submit method",this.formData.value); 
    this.myService.saveUser(this.formData.value).subscribe((data=>{
      console.log("after saving",data);
    }))
  }
}
