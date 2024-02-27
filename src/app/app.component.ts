import { AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'testPokeApi';
  isLoading: boolean = true;

  constructor(private loaderService: LoaderService, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loaderService.loading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
