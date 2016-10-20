import './shim';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/bundles/ng2-translate';
import { PostsModule } from './app/posts';

import { AuthModule } from './app/auth';

import { routes } from './app/core/app.routes';
import { CORE_PROVIDERS, CORE_DECLARATIONS, AppComponent } from './app/core';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

@NgModule({
  declarations: [CORE_DECLARATIONS],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PostsModule,
    AuthModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    CORE_PROVIDERS,
    { provide: 'ENVIRONMENT', useValue: ENVIRONMENT }
  ],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
