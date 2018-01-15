

particlesJS.load('bg-image', 'particlesjs-config.json', function() {
    // console.log('callback - particles.js config loaded');
});


{
    
    class Item {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.DOM.product = this.DOM.el.querySelector('.product');
            this.DOM.productBg = this.DOM.product.querySelector('.product__bg');
            this.DOM.productImg = this.DOM.product.querySelector('.product__img');

            this.info = {
                img: this.DOM.productImg.src,
                title: this.DOM.product.querySelector('.product__title').innerHTML,
                subtitle: this.DOM.product.querySelector('.product__subtitle').innerHTML,
                description: this.DOM.product.querySelector('.product__description').innerHTML,
                price: this.DOM.product.querySelector('.product__price').innerHTML,
                deta: this.DOM.product.querySelector('.product__details').innerHTML,
                conta: this.DOM.product.querySelector('.product__contacts').innerHTML
                //ticketCode: this.DOM.product.querySelector('.workshop-codename').value,
            };
            //this.initEvents();
        }
        initEvents() {
            this.DOM.product.addEventListener('click', () => this.open());
        }
        open() {
            $('.details').show();
            DOM.details.fill(this.info);
            DOM.details.open({
                productBg: this.DOM.productBg,
                productImg: this.DOM.productImg
            });
        }
    };

    const DOM = {};
    DOM.grid = document.querySelector('.grid');
    DOM.content = DOM.grid.parentNode;
    DOM.hamburger = document.querySelector('.dummy-menu');
    DOM.gridItems = Array.from(DOM.grid.querySelectorAll('.grid__item'));
    let items = [];
    DOM.gridItems.forEach(item => items.push(new Item(item)));
    imagesLoaded(document.body, () => document.body.classList.remove('loading'));
};
