import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './SignInSignUP/connexion/connexion.component';
import { AproposComponent } from './Others/apropos/apropos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilComponent } from './Others/accueil/accueil.component';
import { ErreurComponent } from './Others/erreur/erreur.component';
import { FooterComponent } from './Others/footer/footer.component';
import { AjouterapiComponent } from './API/ajouterapi/ajouterapi.component';
import { ConsulterlisteapiComponent } from './API/consulterlisteapi/consulterlisteapi.component';
import { DetailsapiComponent } from './API/detailsapi/detailsapi.component';
import { ModifierapiComponent } from './API/modifierapi/modifierapi.component';
import { ServicesComponent } from './services/services.component';
import { AjouterDemandeComponent } from './DemandeApi/ajouter-demande/ajouter-demande.component';
import { ListDemandesComponent } from './DemandeApi/list-demandes/list-demandes.component';
import { ModifierDemandeComponent } from './DemandeApi/modifier-demande/modifier-demande.component';
import { DetailsDemandeComponent } from './DemandeApi/details-demande/details-demande.component';
import { ModifierUserComponent } from './CRUD_User/modifier-user/modifier-user.component';
import { ListUserComponent } from './CRUD_User/list-user/list-user.component';
import { AjouterProfileComponent } from './PROFILES/ajouter-profile/ajouter-profile.component';
import { ModifierProfileComponent } from './PROFILES/modifier-profile/modifier-profile.component';
import { AjouterStructureComponent } from './Structures/ajouter-structure/ajouter-structure.component';
import { ModifierStructureComponent } from './Structures/modifier-structure/modifier-structure.component';
import { ListStructureComponent } from './Structures/list-structure/list-structure.component';
import { DetailUserComponent } from './CRUD_User/detail-user/detail-user.component';
import { ListStatusComponent } from './CRUDS__Status/list-status/list-status.component';
import { ModifierStatusComponent } from './CRUDS__Status/modifier-status/modifier-status.component';
import { AjouterStatusComponent } from './CRUDS__Status/ajouter-status/ajouter-status.component';
import { DetailStatusComponent } from './CRUDS__Status/detail-status/detail-status.component';
import { ListProfilComponent } from './PROFILES/list-profil/list-profil.component';
import { DetailProfilComponent } from './PROFILES/detail-profil/detail-profil.component';
const routes: Routes = [

  // CRUDS Users done
  {path:'modifierUser/:idUser', title:'modifierUser/:idUser', component:ModifierUserComponent},
  {path:'listUser', title:'listUser', component:ListUserComponent},
  {path: 'detailUser/:idUser',title:"detailUser", component:DetailUserComponent},

  // CRUDS APIS
  {path:'Api',title:"ajouterApi",component:AjouterapiComponent},
  {path:'listApi',title:"listApi",component:ConsulterlisteapiComponent},
  {path: 'modifierApi/:idApi',title:"modifierApi/:idApi", component:ModifierapiComponent },
  {path: 'detailsApi',title:"detailsApi", component:DetailsapiComponent},

  // CRUDS Profils done
  {path:'ajouterProfil', title:'ajouterProfile', component:AjouterProfileComponent},
  {path:'modifierProfil/:id', title:'modifierProfile', component:ModifierProfileComponent},
  {path:'listProfil', title:'listProfile', component:ListProfilComponent},
  {path:'detailProfil/:id', title:'detailProfile', component:DetailProfilComponent},

  // CRUDS Structure
  {path:'ajouterStructure', title:'ajouterStructure', component:AjouterStructureComponent},
  {path:'modifierStructure/:id', title:'modifierStructure', component:ModifierStructureComponent},
  {path:'listStructure', title:'listStructure', component:ListStructureComponent},

  // CRUDS Status
  {path:'ajouterStatus', title:'ajouterStatus', component:AjouterStatusComponent},
  {path:'détailStatus', title:'consulterStatus', component:DetailStatusComponent},
  {path:'modifierStatus', title:'modifierStatus', component:ModifierStatusComponent},
  {path:'listStatus', title:'listStatus', component:ListStatusComponent},

  // CRUDS Demandes done
  {path:'ajouterDemande',title:"ajouterDemande",component:AjouterDemandeComponent},
  {path:'listDemande',title:"listDemande",component:ListDemandesComponent},
  {path: 'modifierDemande/:idDemande',title:"modifierDemande", component:ModifierDemandeComponent},
  {path: 'detailDemande/:idDemande',title:"detailsDemande/:idDemande", component:DetailsDemandeComponent},

  // other Paths
  {path:'accueil',title:"accueil",component:AccueilComponent},
//  {path:'inscription',title:"inscription",component:InscriptionComponent},
  { path:'accueil',title:"accueil" ,component:AccueilComponent},
  { path:'connexion',title:"connexion" ,component: ConnexionComponent },
  { path:'footer',title:"footer" ,component:FooterComponent },
  {path:'apropos',title:"apropos",component:AproposComponent},
  {path: 'services',title:"services", component:ServicesComponent},
  { path:'',title:"Vide" ,component: AccueilComponent },
  { path:'**',title:"Erreur" ,component: ErreurComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  BrowserModule,

  ],
  exports: [RouterModule],

})
export class AppRoutingModule {
 }
