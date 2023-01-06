import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  constructor(private authService : AuthserviceService , private router : Router){

  }
  onSubmit(contactForm: any){
    this.authService.login(contactForm.value.email).subscribe(
      data => {
        if(data){
          this.router.navigate(['/new'],{skipLocationChange:true})
        }
      }
    )
    console.log(contactForm);

  }
  clearForm(contactForm: any){
    contactForm.resetForm();
  }
}
