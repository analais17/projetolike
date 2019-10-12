import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  palestrante;
  classificacao;

  constructor() {
    this.palestrante={
    'img':'https://66.media.tumblr.com/c3c526f81af18452b858a401ba476475/tumblr_phfpjoKMVY1vxxrny_1280.jpg',
    'nome':'Yabuki Nako',
    'descricao': ' Nako Yabuki é uma cantora e atriz japonesa. Ela é membro do girl group ídolo japonês HKT48 e parte do grupo nipo-sul-coreano Iz One após competir no programa de televisão Produce 48.',
    'likes': 100
    };
   this.classificacao=[

   
     { 
       'classificacao': 'classificacaoinicial',
       'nota': 'F'
       
     },
     {
      'classificacao': 'classificacaofinal',
      'nota': 'A'
      
    }
  ]
   }
  
like(){
  this.palestrante.likes=this.palestrante.likes +1;
}
like0(){
  this.palestrante.likes=0;
}

}
