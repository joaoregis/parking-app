import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'pagar',
        children: [
          {
            path: '',
            loadChildren: '../pagar/pagar.module#PagarPageModule'
          }
        ]
      },
      {
        path: 'pagamentos',
        children: [
          {
            path: '',
            loadChildren: '../pagamentos/pagamentos.module#PagamentosPageModule'
          }
        ]
      },
      {
        path: 'sobre',
        children: [
          {
            path: '',
            loadChildren: '../sobre/sobre.module#SobrePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
