import { Component, OnInit } from '@angular/core';
import { PacksService } from '../../services/packs.service';
import { Pack } from '../../models/pack'; // Ensure the import path is correct

@Component({
  selector: 'app-show-packs',
  templateUrl: './show-packs.component.html',
  styleUrls: ['./show-packs.component.css']
})
export class ShowPacksComponent implements OnInit {
  packs: Pack[] = []; // Use the Pack type for the array

  constructor(private packService: PacksService) {}

  ngOnInit(): void {
    this.packService.getAllPacks().subscribe({
      next: (response: Pack[]) => {
        console.log('Received response:', response);
        this.packs = response; // Directly assign the response to the packs array
      },
      error: (err) => {
        console.error('Error fetching packs:', err);
      },
    });
  }
}
