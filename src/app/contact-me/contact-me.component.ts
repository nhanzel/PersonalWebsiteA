import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
    emailForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      contactInfo: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });

    visible = false;

    constructor(private emailService: EmailService) { }
  
    send() {
        if (this.emailForm.get("name")?.valid && this.emailForm.get("contactInfo")?.valid && this.emailForm.get("message")?.valid) {
            let emailData = this.emailForm.value;
            this.emailService.sendEmail(emailData.name!, emailData.contactInfo!, emailData.message!).subscribe((response: any) => {
                if (response.messageId != "") {
                  //TODO: Show success toaster
                  console.log("Email sent successfully");
                  this.closePopup();
                } else {
                  //TODO: Show error toaster
                  console.log("Email failed to send");
                }
            });
        }
        else {
          //TODO: Show error toaster
          console.log("Email data is bad");
        }
    }

    openPopup() {
        this.visible = true;
    }

    closePopup() {
        this.visible = false;
    }
}
