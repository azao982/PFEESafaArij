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
import { ListDemandesComponent } from './DemandeApi/list-demandes/list-demandes.component';
import { DetailsDemandeComponent } from './DemandeApi/details-demande/details-demande.component';
import { ModifierUserComponent } from './CRUD_User/modifier-user/modifier-user.component';
import { ListUserComponent } from './CRUD_User/list-user/list-user.component';
import { AjouterStructureComponent } from './Structures/ajouter-structure/ajouter-structure.component';
import { ModifierStructureComponent } from './Structures/modifier-structure/modifier-structure.component';
import { DetailUserComponent } from './CRUD_User/detail-user/detail-user.component';
import { MailingUserComponent } from './CRUD_User/mailing-user/mailing-user.component';
import { DashboardAdminComponent } from './Dashboard_Users/dashboard-admin/dashboard-admin.component';
import { ListConsommComponent } from './list-consomm/list-consomm.component';
import { ListValidaComponent } from './list-valida/list-valida.component';
import { ListAdminDelegComponent } from './list-admin-deleg/list-admin-deleg.component';
import { DashboardAdminDelegueComponent } from './Dashboard_Users/dashboard-admin-delegue/dashboard-admin-delegue.component';
import { DashboardConsumerComponent } from './Dashboard_Users/dashboard-consumer/dashboard-consumer.component';
import { DashboardValidateur1Component } from './Dashboard_Users/dashboard-validateur1/dashboard-validateur1.component';
import { DashboardValidateur2Component } from './Dashboard_Users/dashboard-validateur2/dashboard-validateur2.component';
import { ListApiConsumerComponent } from './API/list-api-consumer/list-api-consumer.component';
import { ValiderDemandeComponent } from './DemandeApi/valider-demande/valider-demande.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { DemandeEnCoursConsommateurComponent } from './DemandesConsummer/demande-en-cours-consommateur/demande-en-cours-consommateur.component';
import { DemandeRefuseeComponent } from './DemandesConsummer/demande-refusee/demande-refusee.component';
import { DemandeARectifierComponent } from './DemandesConsummer/demande-arectifier/demande-arectifier.component';
import { DemandeTermineeComponent } from './DemandesConsummer/demande-terminee/demande-terminee.component';
import { AjouterDemandeApiComponent } from './DemandeApi/ajouter-demande-api/ajouter-demande-api.component';
import { RectifierDemandeComponent } from './DemandeApi/rectifier-demande/rectifier-demande.component';
import { ListMailComponent } from './list-mail/list-mail.component';
import { ValiderDem2Component } from './DemandeApi/valider-dem2/valider-dem2.component';
const routes: Routes = [

  // CRUDS Users done
  {path:'modifierProfil/:idUser', title:'modifierProfil/:idUser', component:ModifierProfilComponent},

  {path:'modifierUser/:idUser', title:'modifierUser/:idUser', component:ModifierUserComponent},
  {path:'listUser', title:'listUser', component:ListUserComponent},
  {path: 'detailUser/:idUser',title:"detailUser", component:DetailUserComponent},
  {path: 'mailingUser/:idUser',title:"mailingUser", component:MailingUserComponent},

  {path: 'DashboardAdmin',title:"DashboardAdmin", component:DashboardAdminComponent},
  {path: 'DashboardAdminDeleguee',title:"DashboardAdminDeleguee", component:DashboardAdminDelegueComponent},
  {path: 'DashboardConsommateur', title:"DashboardConsommateur", component:DashboardConsumerComponent},
  {path: 'DashboardValid1',title:"DashboardValid1", component:DashboardValidateur1Component},
  {path: 'DashboardValid2',title:"DashboardValid2", component:DashboardValidateur2Component},

  {path: 'listConsommateur',title:"listConsommateur", component:ListConsommComponent},
  {path: 'listValidateur',title:"listValidateur", component:ListValidaComponent},
  {path: 'listAdminDeleguee',title:"listAdminDeleguee", component:ListAdminDelegComponent},

  // CRUDS APIS
  {path:'Api',title:"ajouterApi",component:AjouterapiComponent},
  {path:'listApi',title:"listApi",component:ConsulterlisteapiComponent},
  {path:'listApiConsummer',title:"listApiConsummer",component:ListApiConsumerComponent},
  {path: 'modifierApi/:idApi',title:"modifierApi/:idApi", component:ModifierapiComponent },
  {path: 'detailsApi',title:"detailsApi", component:DetailsapiComponent},

  // CRUDS Structure
  {path:'ajouterStructure', title:'ajouterStructure', component:AjouterStructureComponent},
  {path:'modifierStructure/:id', title:'modifierStructure', component:ModifierStructureComponent},
 // {path:'listStructure', title:'listStructure', component:ListStructureComponent},

  // CRUDS Demandes done
  {path:'listDemande',title:"listDemande",component:ListDemandesComponent},
  {path: 'rectifierDemande/:idDemande',title:"recetifierDemande", component:RectifierDemandeComponent},
  {path: 'detailDemande/:idDemande',title:"detailsDemande/:idDemande", component:DetailsDemandeComponent},
  {path: 'validerDemande/:idDemande',title:"validerDemande/:idDemande", component:ValiderDemandeComponent},
  {path: 'validerDemande2/:idDemande',title:"validerDemande2/:idDemande", component:ValiderDem2Component},

  {path:'demandeEnCours',title:"DemandeEnCours",component:DemandeEnCoursConsommateurComponent},
  {path:'demandeRefusees',title:"DemandeRefusees",component:DemandeRefuseeComponent},
  {path:'demandeARectifier',title:"DemandeARectifier",component:DemandeARectifierComponent},
  {path:'demandeTerminee',title:"DemandeTerminee",component:DemandeTermineeComponent},
  {path:'listmail',title:"listmail",component:ListMailComponent},




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
