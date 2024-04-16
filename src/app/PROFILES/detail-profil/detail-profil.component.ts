import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/Classes/profile';
import { ProfilService } from 'src/app/Service/profil.service';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.css']
})
export class DetailProfilComponent implements OnInit {
  profile: Profile;

  constructor(private route: ActivatedRoute, private profilService: ProfilService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profilService.getById(id).subscribe(
      profile => {
        this.profile = profile;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des détails du profil:', error);
      }
    );
  }
}
