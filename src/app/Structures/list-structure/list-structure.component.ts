// import { Structure } from './../../Classes/structure';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { StructureService } from 'src/app/Service/structure.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-list-structure',
//   templateUrl: './list-structure.component.html',
//   styleUrls: ['./list-structure.component.css']
// })
// export class ListStructureComponent implements OnInit {
//   strs: Structure[] = [];
//   searchKeyword: string = '';
//   searchResults: Structure[] = [];
//   str : Structure;
//   selectedStr:  Structure | undefined;
//   strForm : FormGroup;
//   formulaire : boolean=false;
//   formData:Structure = {
//     id:0,
//     code : 0,
//     email :"",
//     telStr: 0,
//     adresse: "",
//     nomAr: "",
//     nomFr: "",
//     type :""

//   };

//   constructor(private structureService: StructureService, private fb : FormBuilder,private router: Router, private route : ActivatedRoute) {}
//   ngOnInit(): void {
//     this.strForm = this.fb.group({
//       type : ['',Validators.required],
//       code : ['',Validators.required],
//       email :['',Validators.required],
//       telStr: ['',Validators.required],
//       adresse: ['',Validators.required],
//       nomAr: ['',Validators.required],
//       nomFr: ['',Validators.required],
// *    });
//     this.getStructure();
//   }

// // get liste des Structures
//   private getStructure(): void{
//     this.structureService.getListeStructures().subscribe(data => {
//         this.strs=data;
//     });
//   }

//   // supprimer STRUCTURE
//   supprimerStructure(id: number): void {
//     if (id === undefined || id === null) {
//       console.error('ID STRUCTURE non défini');
//       return;
//     }
// // Définir une classe CSS personnalisée pour agrandir la taille de la police
// const swalCustomClass = {
//   confirmButton: 'btn btn-danger',
//   cancelButton: 'btn btn-success',
//   popup: 'swal2-popup-custom',
//   title: 'swal2-title-custom',
//   htmlContainer: 'swal2-html-container-custom'
// };

// // Appeler SweetAlert2 avec la classe CSS personnalisée
// Swal.fire({
//   title: 'Êtes-vous sûr?',
//   text: 'Vous ne pourrez pas récupérer cette structure !',
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonText: 'Oui, supprimer!',
//   cancelButtonText: 'Annuler',
//   customClass: swalCustomClass
// }).then((result) => {
//   if (result.isConfirmed) {
//     this.structureService.supprimerStructure(id).subscribe(
//       () => {
//         Swal.fire('Succès', ' STRUCTURE supprimée avec succès', 'success');
//         this.getStructure();
//       },
//       error => {
//         console.error('Échec suppression structure');
//         Swal.fire('Erreur', 'Une erreur s\'est produite lors de la suppression de la structure', 'error');
//       }
//     );
//   }
// });

//   }

// // ajouter strcture
// onAjouter() {
//   console.log(this.strForm.value);
//   if (this.strForm.valid) {
//     this.formData = this.strForm.value;
//     this.structureService.addStructure(this.formData).subscribe(
//       data => {
//         console.log(data);
//         Swal.fire({
//           icon: 'success',
//           title: 'Succès !',
//           color : "green",
//           text: 'Structure ajoutée avec succès',
//           confirmButtonText: 'OK',
//         }).then((result) => {
//           if (result.isConfirmed) {
//             this.router.navigate(['/listStructure']);
//           }
//         });
//       },
//       error => {
//         console.error('Erreur lors de l ajout de structure',  error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Erreur',
//           color : "red",
//           text: 'Une erreur s\'est produite lors de l\'ajout de la structure. Veuillez réessayer.',
//           confirmButtonText: 'OK',
//         });
//       }
//     );
//   }
// }

// // diriger vers page modifier
//   modifierDemande(idDemande:number){
//   this.router.navigate(['/modifierDemande',idDemande]);
//   }
//   // rechercher demande
//   searchDemande(): void {
//     if (!this.searchKeyword) {
//       Swal.fire({
//         icon: 'warning',
//         title: 'Oops...',
//         color : 'red',
//         text: 'Veuillez entrer une demande à rechercher !',
//       });
//       return;
//     }

//     this.demandesService.searchDemande(this.searchKeyword).subscribe(
//       (result: DemandeApi[]) => {
//         console.log(result);
//         this.searchResults = result;
//         if (result.length === 0) {
//           Swal.fire({
//             icon: 'info',
//             title: 'Information',
//             color : 'blue' ,
//             text: 'Aucune demande trouvée.',
//           });
//         }
//       },
//       (error) => {
//         console.error(error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Erreur',
//           color:'pink',
//           text: 'Une erreur produite lors de la recherche de demande',
//         });
//       }
//     );
//   }


// //consulter detail STR
//   DetailStructure(id: number): void {
//     this.router.navigate(['/detailStructure' ,id]);

//   }

// private showErrorMessage(message: string): void {
//   Swal.fire('Erreur', message, 'error');
// }


// // filtrer demande
// filtrerDemande(nomapp : string){

//   this.demandesService.filtrerDemande(nomapp).subscribe(
//     (result: DemandeApi[]) => {
//       console.log('Résultats filtrés :', result);
//       this.demandes=result;
//       console.log(result);

//     },
//     error => {
//       console.error('Erreur lors du filtrage :', error);
//       this.showErrorMessage("erreur lors du filtrage");
//     }
//   );
// }

// }
