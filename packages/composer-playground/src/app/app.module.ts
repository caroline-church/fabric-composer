import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { AppRoutingModule } from './app-routing.module';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { BasicModalsModule } from './basic-modals/basic-modals.module';
import { WelcomeComponent } from './welcome';
import { NoContentComponent } from './no-content';
import { VersionCheckComponent } from './version-check';
import { ServicesModule } from './services/services.module';
import { DrawerModule } from './common/drawer';
import { TutorialLinkModule } from './common/tutorial-link';
import { ImportModule } from './import/import.module';

let actionBasedIcons = require.context('../assets/svg/action-based', false, /.*\.svg$/);
actionBasedIcons.keys().forEach(actionBasedIcons);
let formattingIcons = require.context('../assets/svg/formatting', false, /.*\.svg$/);
formattingIcons.keys().forEach(formattingIcons);
let objectBasedIcons = require.context('../assets/svg/object-based', false, /.*\.svg$/);
objectBasedIcons.keys().forEach(objectBasedIcons);
let otherIcons = require.context('../assets/svg/other', false, /.*\.svg$/);
otherIcons.keys().forEach(otherIcons);

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    entryComponents: [
        VersionCheckComponent,
        WelcomeComponent
    ],
    declarations: [
        AppComponent,
        NoContentComponent,
        VersionCheckComponent,
        WelcomeComponent
    ],
    imports: [ // import Angular's modules
        AppRoutingModule,
        BasicModalsModule,
        ImportModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        ServicesModule,
        LocalStorageModule.withConfig({
            prefix: '',
            storageType: 'localStorage'
        }),
        NgbModule.forRoot(),
        DrawerModule.forRoot(),
        TutorialLinkModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
      environment.ENV_PROVIDERS,
      APP_PROVIDERS
    ]
})
export class AppModule {}
