import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../Services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.isLoading;
  }

  ngOnInit(): void {}
}
