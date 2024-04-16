import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from 'src/app/Classes/api';
import { ApiService } from 'src/app/Service/api.service';

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
      const apiData = this.apiForm.value; // Récupère les données du formulaire
      this.apiService.addApi(apiData).subscribe(
        () => {
          console.log('API ajouté avec succès:', apiData);
          alert("API ajouté avec succès");
          this.router.navigate(['/listApi']);
          this.formulaire = true;
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'API:', error);
          alert("Une erreur est survenue lors de l'ajout de l'API. Veuillez réessayer.");
        }
      );
    } else {
      console.log(this.apiForm)
      alert("Formulaire non valide. Veuillez remplir tous les champs obligatoires.");
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
