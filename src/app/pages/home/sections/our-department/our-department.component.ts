import { Component } from '@angular/core';
import { SectionModel } from 'src/app/shared/components/section/section.component';

@Component({
  selector: 'app-our-department',
  templateUrl: './our-department.component.html',
  styleUrls: ['./our-department.component.scss']
})
export class OurDepartmentComponent {
  rightSideImg = '/assets/sections/our-department/section-thumb.png';
  sectionModel: SectionModel = {
    sectionName: 'Nossas Unidades',
    title: 'Marque sua Consulta',
    description: "Para agendar sua visita ou consulta, <br>basta clicar na unidade mais próxima e falar conosco via Whatsapp."
  }
}
