import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    path: 'inicio',
    title: 'Instituto Neurodiversidade - Início',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    title: 'Instituto Neurodiversidade - Sobre Nós',
    component: AboutComponent,
  },
  {
    path: 'servicos',
    title: 'Instituto Neurodiversidade - Nossos Serviços',
    component: OurServicesComponent,
  },
  {
    path: 'loja',
    title: 'Instituto Neurodiversidade - Shop',
    component: ShopComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
