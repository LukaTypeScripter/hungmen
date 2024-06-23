import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { CategoriesComponent } from './categories/categories.component';
import { PlayPageComponent } from './play-page/play-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'how-to-play',
        component: InstructionsComponent
    },
        {
        path: 'choose-stage',
        component: CategoriesComponent
    },
    {
        path: 'play/:id', 
        component: PlayPageComponent
    },
];
