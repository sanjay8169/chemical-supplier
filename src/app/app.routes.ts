import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, Routes,provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { CatalogueComponent } from './downloads/catalogue/catalogue.component';
import { CertificationComponent } from './downloads/certification/certification.component';
import { PackingComponent } from './downloads/packing/packing.component';


export const routes: Routes = [
    {path: '',component : HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'product',component:ProductComponent},
    {path:'downloads',component:DownloadsComponent,children:[
        {
            path:'catalogue',component:CatalogueComponent
        },
        {
            path:'certification',component:CertificationComponent
        },
        {
            path:'packing',component:PackingComponent
        }
    ]},
    {path:'downloads/catalogue',component:CatalogueComponent}
]

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'product', component: ProductComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }