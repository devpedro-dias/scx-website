import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FreteAereoComponent } from './pages/frete-aereo/frete-aereo.component';
import { FreteMaritimoComponent } from './pages/frete-maritimo/frete-maritimo.component';
import { DesembaracoComponent } from './pages/desembaraco/desembaraco.component';
import { TransporteRodoviarioComponent } from './pages/transporte-rodoviario/transporte-rodoviario.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SeguroCargaComponent } from './pages/seguro-carga/seguro-carga.component';


export const routes: Routes = [
    {
        path: '', 'title': 'SCX | Home',
        component: HomeComponent,
    },
    {
        path: 'home', 
        redirectTo: '',
        'title': ' SCX | Home',
        component: HomeComponent,
    },
    {
        path: 'frete-maritimo', 'title': 'SCX | Frete Marítimo',
        component: FreteMaritimoComponent,
        children: [
            {path: 'frete-maritimo', title: 'SCX | Frete Marítimo', component: FreteMaritimoComponent}, 
            {path: 'frete-aereo', title: 'SCX | Frete Aéreo', component: FreteAereoComponent},
            {path: 'desembaraco-aduaneiro', title: 'SCX | Desembaraço Aduaneiro', component: DesembaracoComponent},
            {path: 'transporte-rodoviario', title: 'SCX | Transporte Rodoviário', component: TransporteRodoviarioComponent},
            {path: 'seguro-carga', title: 'SCX | Seguro de Carga', component: SeguroCargaComponent},
            {path: 'contato', title: 'SCX | Contato', component: ContatoComponent},
            {path: 'home', title: 'SCX | Home', component: HomeComponent}
        ]
    },
    {
        path: 'frete-aereo', 'title': 'SCX | Frete Aéreo',
        component: FreteAereoComponent,
        children: [
            {path: 'frete-aereo', title: 'SCX | Frete Aéreo', component: FreteAereoComponent},
            {path: 'desembaraco-aduaneiro', title: 'SCX | Desembaraço Aduaneiro', component: DesembaracoComponent},
            {path: 'seguro-carga', title: 'SCX | Seguro de Carga', component: SeguroCargaComponent},
            {path: 'transporte-rodoviario', title: 'SCX | Transporte Rodoviário', component: TransporteRodoviarioComponent},
            {path: 'contato', title: 'SCX | Contato', component: ContatoComponent},
            {path: 'home', title: 'SCX | Home', component: HomeComponent},
            {path: 'frete-maritimo', title: 'SCX | Frete Marítimo', component: FreteMaritimoComponent}
        ]
    },
    {
        path: 'desembaraco-aduaneiro', 'title': 'SCX | Desembaraço Aduaneiro',
        component: DesembaracoComponent,
        children: [
            {path: 'desembaraco-aduaneiro', title: 'SCX | Desembaraço Aduaneiro', component: DesembaracoComponent},
            {path: 'transporte-rodoviario', title: 'SCX | Transporte Rodoviário', component: TransporteRodoviarioComponent},
            {path: 'seguro-carga', title: 'SCX | Seguro de Carga', component: SeguroCargaComponent},
            {path: 'contato', title: 'SCX | Contato', component: ContatoComponent},
            {path: 'home', title: 'SCX | Home', component: HomeComponent},
            {path: 'frete-aereo', title: 'SCX | Frete Aéreo', component: FreteAereoComponent},
            {path: 'frete-maritimo', title: 'SCX | Frete Marítimo', component: FreteMaritimoComponent}
        ]
    },
    {
        path: 'transporte-rodoviario', 'title': 'SCX | Transporte Rodoviário',
        component: TransporteRodoviarioComponent,
        children: [
            {path: 'transporte-rodoviario', title: 'SCX | Transporte Rodoviário', component: TransporteRodoviarioComponent},
            {path: 'contato', title: 'SCX | Contato', component: ContatoComponent},
            {path: 'home', title: 'SCX | Home', component: HomeComponent},
            {path: 'frete-aereo', title: 'SCX | Frete Aéreo', component: FreteAereoComponent},
            {path: 'frete-maritimo', title: 'SCX | Frete Marítimo', component: FreteMaritimoComponent},
            {path: 'desembaraco-aduaneiro', title: 'SCX | Desembaraço Aduaneiro', component: DesembaracoComponent},
            {path: 'seguro-carga', title: 'SCX | Seguro de Carga', component: SeguroCargaComponent}
        ]
    },
    {
        path: 'seguro-carga', 'title': 'SCX | Seguro de Carga',
        component: TransporteRodoviarioComponent,
        children: [
            {path: 'seguro-carga', title: 'SCX | Seguro de Carga', component: SeguroCargaComponent},
            {path: 'transporte-rodoviario', title: 'SCX | Transporte Rodoviário', component: TransporteRodoviarioComponent},
            {path: 'contato', title: 'SCX | Contato', component: ContatoComponent},
            {path: 'home', title: 'SCX | Home', component: HomeComponent},
            {path: 'frete-aereo', title: 'SCX | Frete Aéreo', component: FreteAereoComponent},
            {path: 'frete-maritimo', title: 'SCX | Frete Marítimo', component: FreteMaritimoComponent},
            {path: 'desembaraco-aduaneiro', title: 'SCX | Desembaraço Aduaneiro', component: DesembaracoComponent}
        ]
    },
    {
        path: 'contato', 'title': 'SCX | Contato',
        component: ContatoComponent,
        children: [
            {path: 'contato', title: 'SCX | Contato', component: ContatoComponent},
            {path: 'home', title: 'SCX | Home', component: HomeComponent},
            {path: 'frete-aereo', title: 'SCX | Frete Aéreo', component: FreteAereoComponent},
            {path: 'frete-maritimo', title: 'SCX | Frete Marítimo', component: FreteMaritimoComponent},
            {path: 'desembaraco-aduaneiro', title: 'SCX | Desembaraço Aduaneiro', component: DesembaracoComponent},
            {path: 'transporte-rodoviario', title: 'SCX | Transporte Rodoviário', component: TransporteRodoviarioComponent},
            {path: 'seguro-carga', title: 'SCX | Seguro de Carga', component: SeguroCargaComponent},
        ]
    }
];
