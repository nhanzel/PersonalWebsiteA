import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email';
import { NotificationService } from '../services/notification';

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

    constructor(private emailService: EmailService, private notifyService: NotificationService) { }
  
    send() {
        if (this.emailForm.get("name")?.valid && this.emailForm.get("contactInfo")?.valid && this.emailForm.get("message")?.valid) {
            let emailData = this.emailForm.value;
            this.emailService.sendEmail(emailData.name!, emailData.contactInfo!, emailData.message!).subscribe((response: any) => {
                if (response.messageId != "") {
                  this.notifyService.showSuccess("I'll be in contact soon, thanks!", "Success");
                  console.log("Email sent successfully");
                  this.closePopup();
                } else {
                  this.notifyService.showError("Message failed to send, try again later", "Error");
                  console.log("Email failed to send");
                }
            });
        }
        else {
            this.notifyService.showError("Double check all the fields and ensure they are filled in", "Invalid Form");
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
