import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactionComponent } from './reaction/reaction.component';
import { HighscoreComponent } from './highscore/highscore.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'reaction',
    component: ReactionComponent
  },
  {
    path: 'highscore',
    component: HighscoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
