   document.addEventListener('DOMContentLoaded', () => {
     const buttons = document.querySelectorAll('.navbar button');
     const pages = document.querySelectorAll('.page');
     const navList = document.querySelector('.nav-list');
     const mobileMenu = document.querySelector('.mobile-menu');
     const closeMenuBtn = document.querySelector('#close-menu');

     function show(name) {
       pages.forEach(p => {
         const isTarget = p.classList.contains(name);
         p.style.setProperty('display', isTarget ? 'flex' : 'none', 'important');
       });
     }

     show('sobre-mim');

     buttons.forEach(btn => {
       btn.addEventListener('click', () => {
         buttons.forEach(b => b.classList.remove('active'));
         btn.classList.add('active');
         show(btn.dataset.section);
       });
     });

     if (closeMenuBtn) {
       closeMenuBtn.addEventListener('click', () => {
         navList.classList.remove('active');
         mobileMenu.classList.remove('active');
       });
     }

     class MobileNavbar {
       constructor(mobileMenu, navList, navLinks) {
         this.mobileMenu = document.querySelector(mobileMenu);
         this.navList = document.querySelector(navList);
         this.navLinks = document.querySelectorAll(navLinks);
         this.activeClass = "active";

         this.handleClick = this.handleClick.bind(this);
       }

       animateLinks() {
         this.navLinks.forEach((link, index) => {
           link.style.animation
             ? (link.style.animation = "")
             : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                 index / 7 + 0.3
               }s`);
         });
       }

       handleClick() {
         this.navList.classList.toggle(this.activeClass);
         this.mobileMenu.classList.toggle(this.activeClass);
         this.animateLinks();
       }

       addClickEvent() {
         this.mobileMenu.addEventListener("click", this.handleClick);
       }

       init() {
         if (this.mobileMenu) {
           this.addClickEvent();
         }
         return this;
       }
     }

     const mobileNavbar = new MobileNavbar(
       ".mobile-menu",
       ".nav-list",
       ".nav-list li",
     );
     mobileNavbar.init();
   });
   