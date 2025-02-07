import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  songsList: any [] = [
    {
      cover: "assets/covers/hymn.jpeg",
      name: "Hymn To Virgil",
      artist: "Hozier"
    },
    {
      cover: "assets/covers/believer.jpg",
      name: "Believer",
      artist: "Imagine Dragons"
    },
    {
      cover: "assets/covers/take.jpeg",
      name: "Take Me To Church",
      artist: "Hozier"
    },
    {
      cover: "assets/covers/abracadabra.jpeg",
      name: "Abracadabra",
      artist: "Lady Gaga"
    }
  ]

  isListening = true;

  changeListeningStatus(){
    if (this.isListening) {
      this.isListening = false
    } else {
      this.isListening = true
    }
  }

  isOpen = false

  changeModalStatus(){
    if (this.isOpen) {
      this.isOpen = false
    } else {
      this.isOpen = true
    }
  }


}
