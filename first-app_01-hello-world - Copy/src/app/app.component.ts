import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { BlockComponent } from './block/block.component';
import { LogService } from './log.service';
@Component({
  selector: 'app-root',
  imports: [HomeComponent, BlockComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
        <app-block></app-block>
        
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  providers: [LogService],
})
export class AppComponent {
  title = 'homes';

}