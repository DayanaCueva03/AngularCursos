import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../types/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Curso de Programación', description: 'Aprende a programar desde cero con los lenguajes más demandados. Incluye ejercicios prácticos y proyectos reales.', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8m9LKN4vNJF5yaLzlDbBTCI5uIstfQiEx0Q&s' },
    { id: 2, name: 'Curso de Diseño', description: 'Domina herramientas como Photoshop e Illustrator para crear diseños profesionales. Incluye teoría del color y composición.', price: 250, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfa7vGmTguQJ9QKd6AqheLybkQ-3qxtziNA&s' },
    { id: 3, name: 'Curso de Estética', description: 'Formación en cuidado facial, maquillaje y tratamientos de belleza. Certificación incluida.', price: 400, image: 'https://postgradomedicina.com/wp-content/uploads/medicina-estetica.jpg' },
    { id: 4, name: 'Curso de Mecánica', description: 'Aprende sobre motores, sistemas de frenos y mantenimiento automotriz con clases teóricas y prácticas.', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWoihdqUX4BpUCXUh69c4sU7R94oLAcnf_Q&s' },
    { id: 5, name: 'Curso de Robótica', description: 'Introducción a la robótica con programación en Arduino y desarrollo de proyectos innovadores.', price: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd0Yd0CN-k1sdrQJ_HSYAWlQrL5vR5YuCuQ&s' },
    { id: 6, name: 'Curso de Fútbol', description: 'Entrenamiento táctico, técnico y físico con profesionales del deporte. Incluye análisis de juego.', price: 350, image: 'https://d3puay5pkxu9s4.cloudfront.net/curso/1179/800_imagen.jpg' },
    { id: 7, name: 'Curso de GeoEspacial', description: 'Aprende a utilizar SIG (Sistemas de Información Geográfica) para análisis de datos espaciales.', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyNj48NEmpYl_T6hzeAeQ0l-g9KOlspxIBg&s' },
    { id: 8, name: 'Curso de Matemáticas', description: 'Refuerza tus conocimientos en cálculo, álgebra y geometría con ejercicios interactivos.', price: 200, image: 'https://cursos.aiu.edu/images/matematica.jpg' },
    { id: 9, name: 'Curso de Moda', description: 'Aprende sobre diseño, confección y tendencias en la industria de la moda.', price: 500, image: 'https://academiasisa.com/wp-content/uploads/2023/12/Mejores-Cursos-Diseno-Moda.webp' },
    { id: 10, name: 'Curso de Software', description: 'Desarrollo de software con metodologías ágiles y buenas prácticas de programación.', price: 600, image: 'https://www.infobae.com/resizer/v2/W67CAKY3GNFEXFKDXK6BZJRZYE.jpg?auth=7a4753dfd7b48326feec2c7576303a29df8f75bcfbec140102fbf1e1a11d8706&smart=true&width=350&height=197&quality=85' },
    { id: 11, name: 'Curso de Desarrollo Web', description: 'Crea páginas web con HTML, CSS y JavaScript. Incluye frameworks como Angular y React.', price: 450, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6faX6jf0KhE9G30xmkXQR8WGUFSfuIWDJlQ&s' },
    { id: 12, name: 'Curso de Arquitectura', description: 'Fundamentos del diseño arquitectónico y modelado en 3D con software especializado.', price: 700, image: 'https://archiff.com/uploads/architect-architecture-black-and-white-1537008-1-rec.jpg' }
  ];
  


  constructor() { }

  getProducts(): Observable<any>{
    return of(this.products);
  }

  
  getProductById(id: number):Observable<any>{
    const product=this.products.find(p => p.id == id);
    return of(product);
  }
}
