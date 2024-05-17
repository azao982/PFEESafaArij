import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  users : User[]=[];
  user : User;
  selectedUser : User | undefined ;
  searchKeyword: string='';
  searchResults: User[] = [];
  userForm : FormGroup;
  formulaire : boolean=false;

formData: any = {
    idUser:0,
    nom: '',
    prenom: '',
    email: '',
    password: '',
    mobile: '',
    cin: '',
    grade: '',
    cnrps: '',
    fonction: '',
  };

constructor(private userService : UserService, private fb: FormBuilder, private router : Router ,private route : ActivatedRoute){}

// get all users
ngOnInit(): void {
      this.userForm = this.fb.group({
      //email: ['', [Validators.required, Validators.email]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8),
                      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%&:-_+#/*?£&])[A-Za-z\d@$!%:-_+#/*?£&]{8,}$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      cin: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      cnrps: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      grade: ['', [Validators.required]],
      fonction: ['', [Validators.required]],
      profile :['admin']
    });
    this.getAdmin();
  }
    private getAdmin():void{
      this.userService.getListeAdmins().subscribe(data => {
        this.users=data;
      })
    }

}
