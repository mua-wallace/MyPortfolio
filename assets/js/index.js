const navToggle = document.querySelector('.nav__toggle');
 navToggle.addEventListener('click', () =>{
     document.body.classlist.toggle('nav-open');
 });