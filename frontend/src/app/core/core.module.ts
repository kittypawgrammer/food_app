import { NgModule, Optional, SkipSelf } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

// App-wide singletons (HTTP setup, services, guards, interceptors).
// Import ONLY once, in AppModule.
@NgModule({
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('CoreModule is already loaded. Import it only in AppModule.');
    }
  }
}
