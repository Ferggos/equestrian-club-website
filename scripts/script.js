function ibg(){

    let ibg=document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
ibg();
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
btnUp.addEventListener();
let menu_tap = document.querySelector('.menu-link__tap');
let cross_anim = document.querySelector('.link-tap__cross'); 
open = false;
menu_tap.addEventListener("click", function(e){
    let tap_menu = document.querySelector('.menu-list__sub-menu');
    tap_menu.classList.toggle('_active');
    if(open==false){
        cross_anim.classList.remove("_close");
        cross_anim.classList.toggle('_open');
        open = true;
      }
      else{
        cross_anim.classList.remove("_open");
        cross_anim.classList.toggle('_close');
        open = false;
      }
    });
    
    let menu_span = document.querySelector('.icon-menu');
    let menu_burger  = document.querySelector('.menu__body');
    menu_span.addEventListener("click", function(e){
      menu_span.classList.toggle('_active');
      menu_burger.classList.toggle('_active');
      document.body.classList.toggle("_lock");
    });
let form__choose1_1 = document.querySelector('.chooseblock__1-1');
let form__choose1_2 = document.querySelector('.chooseblock__1-2');
form__choose1_2.addEventListener("click", function(e){
  alert("Данное время уже занятно")
});
let choose__form = document.querySelector('.choose-form__container');
let form__close = document.querySelector('.form-choose__close');
  form__choose1_1.addEventListener("click", function(e){
    choose__form.classList.toggle("_active");
    document.body.classList.toggle("_lock");
});
form__close.addEventListener("click", function(e){
  choose__form.classList.remove("_active");
  document.body.classList.remove("_lock");
});
    
    
    