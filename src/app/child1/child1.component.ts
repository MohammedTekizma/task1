import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  // x = {mid:'',}// x.mid

  @Input() mID = '';
  @Input() name = '';
  @Input() pwd = '';
  @Input() pwd2 = '';
  @Input() lct = '';

  title = 'formValidation';
  registerForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(){
    //validation

    this.registerForm = this.formBuilder.group({
      mailID:[this.mID, [Validators.required, Validators.email]],
      uName:[this.name, Validators.required],
      passWd:[this.pwd, [Validators.required, Validators.minLength(8)]],
      passWd2:[this.pwd2, [Validators.required, Validators.minLength(8)]],
      location:[this.lct, Validators.required]
    },{
      validators:this.passwordMatch('passWd', 'passWd2')
    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    alert("Success");
  }

  passwordMatch(passWd: any, passWd2: any){
    return (formgroup:FormGroup)=>{
      const pwdCtrl = formgroup.controls[passWd];
      const pwd2Ctrl = formgroup.controls[passWd2];

      if(pwd2Ctrl.errors && !pwd2Ctrl.errors['passwordMatch']){
        return;
      }
      if(pwdCtrl.value !== pwd2Ctrl.value){
        pwd2Ctrl.setErrors({passwordMatch:true});
      }
      else{
        pwd2Ctrl.setErrors(null);
      }
    };

  }

}