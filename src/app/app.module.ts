import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Others/navbar/navbar.component';
import { ConnexionComponent } from './SignInSignUP/connexion/connexion.component';
import { InscriptionComponent } from './SignInSignUP/inscription/inscription.component';
import { AproposComponent } from './Others/apropos/apropos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Others/footer/footer.component';
import { AccueilComponent } from './Others/accueil/accueil.component';
import { ErreurComponent } from './Others/erreur/erreur.component';
import { AjouterapiComponent } from './API/ajouterapi/ajouterapi.component';
import { ConsulterlisteapiComponent } from './API/consulterlisteapi/consulterlisteapi.component';
import { ServicesComponent } from './services/services.component';
import { DetailsapiComponent } from './API/detailsapi/detailsapi.component';
import { ModifierapiComponent } from './API/modifierapi/modifierapi.component';
import { AjouterDemandeComponent } from './DemandeApi/ajouter-demande/ajouter-demande.component';
import { ModifierDemandeComponent } from './DemandeApi/modifier-demande/modifier-demande.component';
import { DetailsDemandeComponent } from './DemandeApi/details-demande/details-demande.component';
import { ListDemandesComponent } from './DemandeApi/list-demandes/list-demandes.component';
import { ModifierUserComponent } from './CRUD_User/modifier-user/modifier-user.component';
import { ListUserComponent } from './CRUD_User/list-user/list-user.component';
import { DetailUserComponent } from './CRUD_User/detail-user/detail-user.component';
import { AjouterStructureComponent } from './Structures/ajouter-structure/ajouter-structure.component';
import { ModifierStructureComponent } from './Structures/modifier-structure/modifier-structure.component';
import { ListStructureComponent } from './Structures/list-structure/list-structure.component';
import { AjouterProfileComponent } from './PROFILES/ajouter-profile/ajouter-profile.component';
import { ModifierProfileComponent } from './PROFILES/modifier-profile/modifier-profile.component';
import { StatCompoComponent } from './stat-compo/stat-compo.component';
import { AjouterStatusComponent } from './CRUDS__Status/ajouter-status/ajouter-status.component';
import { ModifierStatusComponent } from './CRUDS__Status/modifier-status/modifier-status.component';
import { DetailStatusComponent } from './CRUDS__Status/detail-status/detail-status.component';
import { ListStatusComponent } from './CRUDS__Status/list-status/list-status.component';
import { ListProfilComponent } from './PROFILES/list-profil/list-profil.component';
import { DetailProfilComponent } from './PROFILES/detail-profil/detail-profil.component';
import { DashboardAdminComponent } from './Dashboard_Users/dashboard-admin/dashboard-admin.component';
import { DashboardConsumerComponent } from './Dashboard_Users/dashboard-consumer/dashboard-consumer.component';
import { DashboardValidateur1Component } from './Dashboard_Users/dashboard-validateur1/dashboard-validateur1.component';
import { DashboardValidateur2Component } from './Dashboard_Users/dashboard-validateur2/dashboard-validateur2.component';
import { DashboardAdminDelegueComponent } from './Dashboard_Users/dashboard-admin-delegue/dashboard-admin-delegue.component';
import { ListDemandeRefuseesComponent } from './List_Demandes_selon_status/list-demande-refusees/list-demande-refusees.component';
import { ListDemandeEnCours1validationComponent } from './List_Demandes_selon_status/list-demande-en-cours1validation/list-demande-en-cours1validation.component';
import { ListDemandeEnCours2ValidationComponent } from './List_Demandes_selon_status/list-demande-en-cours2-validation/list-demande-en-cours2-validation.component';
import { ListDemandeRectifieesComponent } from './List_Demandes_selon_status/list-demande-rectifiees/list-demande-rectifiees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    InscriptionComponent,
    AproposComponent,
    FooterComponent,
    AccueilComponent,
    ErreurComponent,
    AjouterapiComponent,
    ConsulterlisteapiComponent,
    ServicesComponent,
    DetailsapiComponent,
    ModifierapiComponent,
    AjouterDemandeComponent,
    ModifierDemandeComponent,
    DetailsDemandeComponent,
    ListDemandesComponent,
    ModifierUserComponent,
    ListUserComponent,
    DetailUserComponent,
    AjouterStructureComponent,
    ModifierStructureComponent,
    ListStructureComponent,
    AjouterProfileComponent,
    ModifierProfileComponent,
    StatCompoComponent,
    AjouterStatusComponent,
    ModifierStatusComponent,
    DetailStatusComponent,
    ListStatusComponent,
    ListProfilComponent,
    DetailProfilComponent,
    DashboardAdminComponent,
    DashboardConsumerComponent,
    DashboardValidateur1Component,
    DashboardValidateur2Component,
    DashboardAdminDelegueComponent,
    ListDemandeRefuseesComponent,
    ListDemandeEnCours1validationComponent,
    ListDemandeEnCours2ValidationComponent,
    ListDemandeRectifieesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
