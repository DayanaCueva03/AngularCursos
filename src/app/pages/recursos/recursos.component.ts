import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {
  // Lista de cursos
  courses = [
    { 
      category: 'tecnologia', 
      title: 'Introducción a Python', 
      description: 'Aprende los fundamentos de Python.', 
      duration: '4 semanas', 
      template: `Título: Introducción a Python\nDescripción: Aprende los fundamentos de Python.\nDuración: 4 semanas`
    },
    { 
      category: 'tecnologia', 
      title: 'Desarrollo Web con Angular', 
      description: 'Guía completa para desarrollar aplicaciones web.', 
      duration: '6 semanas', 
      template: `Título: Desarrollo Web con Angular\nDescripción: Guía completa para desarrollar aplicaciones web.\nDuración: 6 semanas`
    },
    { 
      category: 'matematicas', 
      title: 'Álgebra Básica', 
      description: 'Conceptos básicos de álgebra.', 
      duration: '5 semanas', 
      template: `Título: Álgebra Básica\nDescripción: Conceptos básicos de álgebra.\nDuración: 5 semanas`
    },
    { 
      category: 'matematicas', 
      title: 'Cálculo Diferencial', 
      description: 'Introducción al cálculo diferencial.', 
      duration: '8 semanas', 
      template: `Título: Cálculo Diferencial\nDescripción: Introducción al cálculo diferencial.\nDuración: 8 semanas`
    },
    { 
      category: 'idiomas', 
      title: 'Inglés Básico', 
      description: 'Aprende inglés desde cero.', 
      duration: '10 semanas', 
      template: `Título: Inglés Básico\nDescripción: Aprende inglés desde cero.\nDuración: 10 semanas`
    },
    { 
      category: 'idiomas', 
      title: 'Francés Intermedio', 
      description: 'Mejora tu nivel de francés.', 
      duration: '12 semanas', 
      template: `Título: Francés Intermedio\nDescripción: Mejora tu nivel de francés.\nDuración: 12 semanas`
    }
  ];

  // Variables para el filtro
  currentFilter: string = 'all';
  filteredCourses: any[] = this.courses;

  // Función para filtrar cursos
  filterCourses(category: string) {
    this.currentFilter = category;
    if (category === 'all') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => course.category === category);
    }
  }

  // Función para descargar la plantilla del curso
  downloadCourseTemplate(course: any) {
    const blob = new Blob([course.template], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${course.title.replace(/\s+/g, '_')}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}