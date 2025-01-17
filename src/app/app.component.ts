import { Component, OnInit } from '@angular/core';
import { DemoDataService } from './Services/demo-data.service';
import { PopupService } from './Services/popup.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hackFrontend';
  
  data:any;
  isPopupVisible = false;
  popupMessage = '';
  popupType: 'success' | 'failure' = 'success';

  constructor(private dataService : DemoDataService,private popupService: PopupService) {
    this.popupService.popupState$.subscribe(({ message, type }) => {
      this.popupMessage = message;
      this.popupType = type;
      this.isPopupVisible = true;
    });
  }
  ngOnInit() :void{
    
}
getData()
{
  this.dataService.getData().subscribe(
    (response: any) => {
      if(response.status=="success"){
      this.data = response.message;
      console.log('Data fetched successfully:', response);
        this.popupService.showPopup('Data fetched successfully!', 'success');
      }
    },
    (error: any) => {
      console.error('Error fetching data:', error);
        this.popupService.showPopup('Failed to fetch data.', 'failure');
    }
  );
}

// Used in all the components
// errorMessage(controlName: string) {
//   let control = this.panVerifyform.controls[controlName]
//   return this.errorService.errorMessage(control, controlName, ErrorMessage.panVerifyform);
// }

}
