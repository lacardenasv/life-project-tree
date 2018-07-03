console.log('\'Allo \'Allo!');

let pencil = null;

const texts = {
  'trunk': ` 
    Mi tía Milena y Dora. Mi abuelita flor. 
    Mi padre me ayuda con el pago de la universidad.
    Yo me encargo de otros gastos.
  `,
  'roots': `
    Mi nombre es Laura Angélica Cárdenas Vargas tengo 21 años.
    Nací en Bogotá, me crie en Cúcuta, viví mi adolecencia en Ibagué.
    Estudio Ingeniería de sistemas y computación en la Universidad Nacional de Colombia.
    Soy desarrolladora de software Full-Stack, es mi pasión.
  `,
  'insects': `
    Malas amistades. (Aquellas que me hacen perder el tiempo).
    Malos hábitos.
    Incumplimiento con mis horarios.
    Suprimir malas palabras y expresiones de mi vocabulario.
  `,
  'branch': `
    Mejorar mis hábilidades en ciencias de la computación.
    Conocer personas influyentes en la industria del software.
    Mejorar mi salud y fisico, alimentarme bien.
  `,
  'fruits': `
    El logro más importante ha sido empezar a trabajar cómo Desarrolladora Full-Stack en Axiacore.
    Crear mi portafolio web.
    Tener un B2 avanzado en inglés.
    Hacer pasantia en Facebook.
  `,
  'flowers': `
    Conocimientos avanzados en Ingeniería de software y Arquitectura de software.
    Cuento con Hábilidades blandas (Acertibidad, Resiliencia, Comunicación).
    Responsabilidad, puntualidad.
  `,
  'birds': `
    Ejercicio Fisico, trotar.
    Aprendizaje en software engineering.
    Santiago, Mariana, Samuel, Cristian; mis hermanos.
    Mi abuelita flor.
    David, mi pareja.          
  `,
}

const initEvents = () => {
  $('.js-home-brand').on('mousemove', () => {
    initTree();
  })
  $('.js-panel').on('mouseenter', showDescription);
  $('.js-panel').on('mouseleave', hideDescription);
};

const hideDescription = function() {
  let description = $(this).find('.js-panel-description');
  $(this).find('.js-panel-text').removeClass('no-visible');
  $(description).slideUp();
  pencil.destroy();
}

const showDescription = function() {
  console.log('hey');
  let panel = $(this);
  let descriptionPanel = panel.find('.js-panel-description');
  let panelText = panel.find('.js-text').attr('id');
  
  $(this).find('.js-panel-text').addClass('no-visible');
  let options = {
    strings: ["", `<span class="js-panel panel__symbol">$</span> ${texts[panelText]}`],
    typeSpeed: 40,
  }
  $(descriptionPanel).slideDown(() =>{
    pencil = new Typed(`#${panelText}`, options);
  });
}

const initTree = () => {
  $('.js-tree').removeClass('no-visible');
  homeOut();
  setTimeout(initOfTree, 2700);
}

const  homeOut = () => {
  $('.js-home-icon').addClass('fadeOutLeft');
  $('.js-home-info').addClass('fadeOutRight');
}

const initOfTree = () => {
  $('.js-home-brand').addClass('no-visible');
}

$(function(){
  setTimeout(initEvents, 3000);
});