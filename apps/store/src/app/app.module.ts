import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';
import { StoreUtilFormattersModule } from '@bg-hoard/store/util-formatters';
import { ApiUtilInterfaceModule } from '@bg-hoard/util-interface';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id',
          loadChildren: () =>
            import('@bg-hoard/store/feature-game-detail').then(
              (m) => m.StoreFeatureGameDetailModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    HttpClientModule,
    MatCardModule,
    StoreUiSharedModule,
    StoreUtilFormattersModule,
    ApiUtilInterfaceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
