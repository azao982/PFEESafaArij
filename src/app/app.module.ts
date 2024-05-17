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
//import { AjouterDemandeComponent } from './DemandeApi/ajouter-demande/ajouter-demande.component';
import { DetailsDemandeComponent } from './DemandeApi/details-demande/details-demande.component';
import { ListDemandesComponent } from './DemandeApi/list-demandes/list-demandes.component';
import { ModifierUserComponent } from './CRUD_User/modifier-user/modifier-user.component';
import { ListUserComponent } from './CRUD_User/list-user/list-user.component';
import { DetailUserComponent } from './CRUD_User/detail-user/detail-user.component';
import { AjouterStructureComponent } from './Structures/ajouter-structure/ajouter-structure.component';
import { ModifierStructureComponent } from './Structures/modifier-structure/modifier-structure.component';
import { StatCompoComponent } from './stat-compo/stat-compo.component';
import { DashboardAdminComponent } from './Dashboard_Users/dashboard-admin/dashboard-admin.component';
import { DashboardConsumerComponent } from './Dashboard_Users/dashboard-consumer/dashboard-consumer.component';
import { DashboardValidateur1Component } from './Dashboard_Users/dashboard-validateur1/dashboard-validateur1.component';
import { DashboardValidateur2Component } from './Dashboard_Users/dashboard-validateur2/dashboard-validateur2.component';
import { DashboardAdminDelegueComponent } from './Dashboard_Users/dashboard-admin-delegue/dashboard-admin-delegue.component';
import { ListDemandeRefuseesComponent } from './List_Demandes_selon_status/list-demande-refusees/list-demande-refusees.component';
import { ListDemandeEnCours1validationComponent } from './List_Demandes_selon_status/list-demande-en-cours1validation/list-demande-en-cours1validation.component';
import { ListDemandeEnCours2ValidationComponent } from './List_Demandes_selon_status/list-demande-en-cours2-validation/list-demande-en-cours2-validation.component';
import { ListDemandeRectifieesComponent } from './List_Demandes_selon_status/list-demande-rectifiees/list-demande-rectifiees.component';
import { MailingUserComponent } from './CRUD_User/mailing-user/mailing-user.component';
import { ListConsommComponent } from './list-consomm/list-consomm.component';
import { ListValidaComponent } from './list-valida/list-valida.component';
import { ListAdminDelegComponent } from './list-admin-deleg/list-admin-deleg.component';
import { ValiderDemandeComponent } from './DemandeApi/valider-demande/valider-demande.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { DetailApiConsummerComponent } from './API/detail-api-consummer/detail-api-consummer.component';
import { CommonModule } from '@angular/common';
import { ListApiConsumerComponent } from './API/list-api-consumer/list-api-consumer.component';
import { DemandeEnCoursConsommateurComponent } from './DemandesConsummer/demande-en-cours-consommateur/demande-en-cours-consommateur.component';
import { DemandeRefuseeComponent } from './DemandesConsummer/demande-refusee/demande-refusee.component';
import { DemandeTermineeComponent } from './DemandesConsummer/demande-terminee/demande-terminee.component';
import { DemandeARectifierComponent } from './DemandesConsummer/demande-arectifier/demande-arectifier.component';
import { DetailConsommateurComponent } from './DemandesConsummer/detail-consommateur/detail-consommateur.component';
import { AjouterDemandeApiComponent } from './DemandeApi/ajouter-demande-api/ajouter-demande-api.component';
import { RectifierDemandeComponent } from './DemandeApi/rectifier-demande/rectifier-demande.component';
import { ListMailComponent } from './list-mail/list-mail.component';
import { ValiderDem2Component } from './DemandeApi/valider-dem2/valider-dem2.component';
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
   // AjouterDemandeComponent,
    DetailsDemandeComponent,
    ListDemandesComponent,
    ModifierUserComponent,
    ListUserComponent,
    DetailUserComponent,
    AjouterStructureComponent,
    ModifierStructureComponent,
    StatCompoComponent,
    DashboardAdminComponent,
    DashboardConsumerComponent,
    DashboardValidateur1Component,
    DashboardValidateur2Component,
    DashboardAdminDelegueComponent,
    ListDemandeRefuseesComponent,
    ListDemandeEnCours1validationComponent,
    ListDemandeEnCours2ValidationComponent,
    ListDemandeRectifieesComponent,
    MailingUserComponent,
    ListConsommComponent,
    ListValidaComponent,
    ListAdminDelegComponent,
    ValiderDemandeComponent,
    ModifierProfilComponent,
    DetailApiConsummerComponent,
    ListApiConsumerComponent,
    DemandeEnCoursConsommateurComponent,
    DemandeRefuseeComponent,
    DemandeTermineeComponent,
    DemandeARectifierComponent,
    DetailConsommateurComponent,
    AjouterDemandeApiComponent,
    RectifierDemandeComponent,
    ListMailComponent,
    ValiderDem2Component
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
