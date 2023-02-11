import { Injectable, NgModule } from '@angular/core';
import { ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Child1Component } from './first/child1/child1.component';
import { Child2Component } from './first/child2/child2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const resolvedChildTitle: ResolveFn<string> = () => Promise.resolve('child one')
const routes: Routes = [
  {path: 'first-component', 
  title:"First-Component",
  component:FirstComponent,
  children:[{path: 'child1', 
            title:resolvedChildTitle,
            component:Child1Component}, 
            {path: 'child2',
            title: 'Child2',
             component:Child2Component}]
  },
  {path: 'second-component', 
  title: 'Second-component',
  component:SecondComponent},
  {path: '', redirectTo:'/first-component', pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent}
];

@Injectable({providedIn: 'root'})
export class  TemplatePageTitleStrategy extends TitleStrategy { 
  constructor(private readonly title: Title){
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if(title !== undefined){
      this.title.setTitle(`My Application | ${title}`)
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ]
})
export class AppRoutingModule { }
