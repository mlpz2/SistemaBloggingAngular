import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPost } from '../../interfaces/iPost.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrayPosts: IPost[] = [];

  nuevoPost: IPost = {
    titulo: "",
    url: "",
    contenido: "",
    fecha: ""
  };

  constructor() {
    this.arrayPosts = [
      {
        titulo: "Neuromitos en educación: ¿necesita cada cerebro un estilo de aprendizaje a medida?",
        url: "../images/aprendizajeNeuroMitos.png",
        contenido: "En los últimos años, ha surgido una tendencia a integrar la neurociencia en la educación, especialmente en las etapas de primaria y secundaria, con el objetivo de mejorar la metodología didáctica de los docentes. Sin embargo, esta integración interdisciplinaria a menudo se ve empañada por la presencia de mitos y creencias erróneas que pueden ser perjudiciales para el aprendizaje y la salud. Algunos de estos neuromitos incluyen la idea de que solo utilizamos el 10 % de nuestro cerebro, que el consumo de azúcar afecta negativamente la atención y el rendimiento de los estudiantes, y que no beber suficiente agua puede encoger el cerebro. Además, existen mitos relacionados con intervenciones educativas supuestamente basadas en la neurociencia, como la creencia de que cada persona tiene un estilo de aprendizaje específico (verbal, visual o manipulativo) derivado de su estructura y función cerebral. Estos mitos pueden llevar a prácticas educativas ineficaces, como la creación de materiales didácticos específicos para cada estilo de aprendizaje, lo que resulta innecesario y desperdicia tiempo y recursos. Es importante destacar que el cerebro funciona de manera coordinada y que las personas utilizan diferentes estrategias dependiendo del problema a resolver. La prevalencia de estos neuromitos en la educación debería impulsarnos a reflexionar sobre la búsqueda de soluciones milagrosas y a confiar en la experiencia y profesionalismo de los maestros y profesores.",
        fecha: "2022-04-28"
      },
      {
        titulo: "La corriente de agua que limpia el cerebro y su (controvertida) activación durante el sueño",
        url: "../images/cerebrosMaquinaria.png",
        contenido: "La investigación sobre la circulación del líquido cefalorraquídeo (LCR) en el cerebro ha revelado su implicación en enfermedades neurodegenerativas como el alzhéimer y la hidrocefalia. Ambas patologías, a pesar de ser distintas, comparten síntomas como el deterioro cognitivo y dificultades en tareas cotidianas, y su diagnóstico puede confundirse. La hidrocefalia se caracteriza por una acumulación anormal de LCR en los ventrículos del cerebro, creando presión que afecta negativamente a las neuronas. En el alzhéimer, se ha observado que un defecto en la circulación del LCR podría incrementar la acumulación de beta-amiloide, contribuyendo a la degeneración neuronal. El sistema glinfático, descubierto en 2012 por la neurocientífica Maiken Nedergaard, propone un mecanismo por el cual el LCR se desplaza entre las neuronas y los ventrículos, limpiando toxinas del cerebro. Este sistema se activa especialmente durante el sueño, cuando el flujo de agua se incrementa debido a la dilatación de los espacios entre las células nerviosas. Sin embargo, estudios recientes han desafiado esta teoría al sugerir que la circulación del agua podría disminuir durante el sueño. Además, se ha identificado que las ondas de flujo iónico generadas durante la fase REM podrían activar el sistema glinfático. La discrepancia entre estos hallazgos refleja la complejidad del estudio del LCR y su relación con el sueño, subrayando la necesidad de experimentos rigurosos para avanzar en la comprensión de su papel en enfermedades cerebrales.",
        fecha: "2024-06-23"
      }
    ];
  }

  agregarPost() {
    if (this.nuevoPost.titulo && this.nuevoPost.url && this.nuevoPost.contenido && this.nuevoPost.fecha) {
      this.arrayPosts.unshift(this.nuevoPost);
      this.nuevoPost = {
        titulo: "",
        url: "",
        contenido: "",
        fecha: ""
      };
    } else {
      alert("Rellene todo el formulario por favor");
    }
  }

  mostrarPosts(): string {
    let html: string = "";
    this.arrayPosts.forEach((post: IPost) => {
      html += `
      <article class="post">
        <div class="postCajaImagen">
          <img src="${post.url}" alt="" class="postImagen">
        </div>

        <div class="postContenido">
          <span class="postContenidoFecha">${post.fecha}</span>
          <h2 class="postContenidoTitulo">${post.titulo}</h2>
          <p class="postContenidoTexto">${post.contenido}</p>
        </div>
      </article>
      `;
    });
    return html;
  }
}
