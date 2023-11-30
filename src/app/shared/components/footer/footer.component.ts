import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialMediaLinks = environment.socialMediaLinks;
  getInTouch =
    {
      title: 'Get In Touch',
      links: [
        '(480) 555-0103',
        '4517 Washington Ave. Manchester, Kentucky 39495',
        'debra.holt@example.com',
      ],
      icons: [
        '/assets/icons/icon-phone.svg',
        '/assets/icons/icon-gps.svg',
        '/assets/icons/icon-email.svg',
      ]
    }

  footerLists = [
    {
      title: 'Company Info',
      links: [
        'About Us',
        'Carrier',
        'We are hiring',
        'Blog',
      ]
    },
    {
      title: 'Legal',
      links: [
        'About Us',
        'Carrier',
        'We are hiring',
        'Blog',
      ]
    },
    {
      title: 'Features',
      links: [
        'Business Marketing',
        'User Analytic',
        'Live Chat',
        'Unlimited Support',
      ]
    },
    {
      title: 'Resources',
      links: [
        'IOS & Android',
        'Watch a Demo',
        'Customers',
        'API',
      ]
    },
  ]
}
