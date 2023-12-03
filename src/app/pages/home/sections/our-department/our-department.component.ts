import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/section/section.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-our-department',
  templateUrl: './our-department.component.html',
  styleUrls: ['./our-department.component.scss']
})
export class OurDepartmentComponent {
  rightSideImg = '/assets/sections/our-department/section-thumb.jpg';
  sectionModel: SectionModel = {
    sectionName: 'Nossas Unidades',
    title: 'Marque sua Consulta',
    description: "Para agendar sua visita ou consulta, <br>basta clicar na unidade mais próxima e falar conosco via Whatsapp."
  }
  departments = environment.departments;

  getWhatsappLink = (number: string, message?: string) => environment.whatsappChat(number, message)
}
