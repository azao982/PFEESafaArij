import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from 'src/app/Classes/api';
import { ApiService } from 'src/app/Service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouterapi',
  templateUrl: './ajouterapi.component.html',
  styleUrls: ['./ajouterapi.component.css']
})
export class AjouterapiComponent {
  apiForm:FormGroup;
  formulaire : Boolean = false;
  constructor(private apiService:ApiService, private fb:FormBuilder, private router:Router) { }
  onAjouter() {
    if (this.apiForm.valid) {
      const apiData = this.apiForm.value;
      this.apiService.addApi(apiData).subscribe(
         () => {
         console.log('API ajouté avec succès:', apiData);
     Swal.fire({
            icon: 'success',
            title: 'Succès !',
            color : "green",
            text: 'Api ajouté avec succès',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/listApi']);
            }
          });
        },
        error => {
          console.error('Erreur lors de l ajout de l"api',  error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            color : "red",
            text: 'Une erreur s\'est produite lors de l\'ajout de l\'api. Veuillez réessayer.',
            confirmButtonText: 'OK',
          });
        }
      );
    }
  }
  ngOnInit(): void {
    this.apiForm = this.fb.group({
      nom: ['', [Validators.required,  Validators.minLength(3)]],
      code: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]], // Valideur de longueur minimale pour la description
       input : ['', [Validators.required]],
      output: ['', [Validators.required]],
      cadreUtilisation: ['', [Validators.required, Validators.minLength(10)]], // Valideur de longueur minimale pour le cadre d'utilisation
      url : ['', [Validators.required]],
      mode: ['', [Validators.required, Validators.pattern('^(prod|preprod)$')]], // Valideur de modèle pour le champ mode
      impact: ['', [Validators.required]],
      methode: ['', [Validators.required, Validators.pattern('^(get|post)$')]] // Valideur de modèle pour le champ méthode

    });
  }

}
