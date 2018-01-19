

particlesJS.load('bg-image', 'particlesjs-config.json', function() {
    // console.log('callback - particles.js config loaded');
});

event_link = {
    "Amazing Race 2.0":"http://bit.ly/amazing_race2",
    "HackSquad":"https://docs.google.com/forms/d/1caXcs_vrRLdr6ukPNbT0rkm8erLN-hIxSIvscN3hgEc/edit?usp=drivesdk",
    "Cryptex 2.0":"",
    "Business Case":"https://docs.google.com/forms/d/e/1FAIpQLScEHFwKgbk5VemJhLYpeJPtYkEO2x5yhIfYZCnYfl0hmT6nfw/viewform?usp=sf_link",
    "Electrogeek":"https://goo.gl/forms/ZZ7BZPyKfOOlPGp33",
    "PATW  (Present Around the World)":"https://docs.google.com/forms/d/1qI8tufo8zIeat--CvjqBzVn4h1tEyQMmFvanVHZSez0/edit?usp=sharing",
    "DCOD 2.0":"https://goo.gl/forms/5kRScfvrAh13RrYa2",
    "VR Chakravyuh 2.0":"https://goo.gl/forms/dHVKASgQ0kV1rbLM2",
    "Drishti Cube Open 2.0":"https://www.worldcubeassociation.org/competitions/DrishtiCubeOpen2018",
    "Jack of All Trades":"https://docs.google.com/forms/d/e/1FAIpQLScHbP4wpy-VCASfWeAfSZNnvJPuFMNH9x0CZZ2B9TAvE1XyaA/viewform?usp=sf_link",
    "Electronaire":"https://goo.gl/forms/JSfRrG8t6ARDZYuw2",
    "Drishti open quiz":"https://docs.google.com/forms/d/15Bn_f3qeXeTIHB_yYE6zga9xPiDamtjuxo7E_HdWTy4/edit",
    "Paper Plane":"https://docs.google.com/forms/d/e/1FAIpQLSd0HBj5vL4kc57W-V0MByhSd5G2hDLb-vSNZircUu1F3sqXiw/viewform?c=0&w=1&usp=mail_form_link",
    "Bug It Out":"https://docs.google.com/forms/d/e/1FAIpQLSc4ZoSJTEkCYGNSGK3YR4CZ_jIesDNYza37LckPrSyxHyrFYA/viewform?c=0&w=1",
    "Young Engineer Hunt":"https://docs.google.com/forms/d/e/1FAIpQLSe_2SCjkfEWlvbMdYAOVfGYRnYpx5xVrAfupUSMwlWInJoYHQ/viewform?c=0&w=1",
    "DigiQuest":"https://goo.gl/forms/O6KQQJ1QQrNw14NB3",
    "Skeptico":"https://docs.google.com/forms/d/1VFYMosJCqS4-y7gf3nLWavtyLY9JtatTNHc1pwRWmjw/edit?usp=drivesdk",
    "UI/UX Challenge":"http://bit.ly/uiuxchallenge",
    "The Room":"https://docs.google.com/forms/d/1skADHEAbeN0bCKxHTEh-zrn73kSf1kTeOJYDC5y0raw/edit?usp=drivesdk",
    "Reverse Engineering":"https://docs.google.com/forms/d/e/1FAIpQLSevuqOfffVHhFsz2t8gkLk7wCy58tY7f1rsYwWK7uJUJiDOOQ/viewform?c=0&w=1",
    "Enigma":"https://docs.google.com/forms/d/1CABmDhRzzWqRXRcFR_QhZTMvqe2HxwwLQNGknXgIyWM/edit?usp=drivesdk",
    "Senquesta":"https://docs.google.com/forms/d/1yQCuRehdn877_ca0YzPN9iSanFjkQU2OjywZzMmbEKQ/edit?usp=drivesdk",
    "Brandtastic":"https://docs.google.com/forms/d/e/1FAIpQLScwGnypYQCeGXhh9Jwe0lFn-mq0x-o4sV14p8xHuuJyVhxHvg/viewform?usp=sf_link",
    "Lumos":"https://docs.google.com/forms/d/1kitN5OYuaeav5i2g_14tJyUUGpf7_YkCpBZG-V3u6Oo/edit",
    "Game of Codes 2.0":"http://bit.ly/goc2_0",
    "The Debugger":"http://bit.ly/debug_drishti",
    "CodeMaster":"https://docs.google.com/forms/d/e/1FAIpQLScXjG4ZFOfvbZ7VUhmXSHYkvKFMGXIOUeThw9EUu9QiMLPBsw/viewform",
    "Picasso":"https://docs.google.com/forms/d/e/1FAIpQLSfP4sQYH7S8RAR1oN_QjEox7gm_E5cb-BKHZqR8ELD4Of8hdw/viewform?usp=pp_url&entry.168595782&entry.1928536618&entry.1484621245&entry.1698790926&entry.778167815&entry.783405576",
    "Matlab Challenge":"https://docs.google.com/forms/d/e/1FAIpQLSdUtxF2RhkNdiZUKNQMxNWzIJvyIMTE9pIF0rYSqjrjtOu-HA/viewform?usp=sf_link",
    "&lt; dev_league /&gt;":"http://bit.ly/devleague18",
    "Blur Gaming":"https://goo.gl/forms/U2FAggRXVpPIZa692",
    "Hydrobos":"https://docs.google.com/forms/d/e/1FAIpQLSduW2zPFaGYEE7H3Bq3CTChxh94C41iC6ytgJIfb51QZMbgkQ/viewform?c=0&w=1",
    "Auto Quiz":"https://goo.gl/forms/ed3Sq52h9mPPilFn1",
    "Creatrix":"https://docs.google.com/forms/d/1Y7eWN9ERhoBFMEFxD3EPacV0KJuorGxQiy0ECnX0XB0/edit?usp=drivesdk",
    "Water Rocket":"https://docs.google.com/forms/d/e/1FAIpQLSeCx-N-b1AkcrmAqaFpQOrBVHDh9sFG2UY2tS69gF4arA7tNA/viewform?usp=sf_link",
    "Incognito":"https://docs.google.com/forms/d/e/1FAIpQLSeHbXZ4LRNEHno-rlr-3-dI1mi7cn1jVWmndtZ4Sh8K9eTQcA/viewform?usp=sf_link",
    "Arduino Playground 2.0":"https://docs.google.com/forms/d/1A3pB1eBl1l_tc7LrD8_V5-XNdKQhM7Tfug_Z36dC-pI/edit",
    "ICE Angels":"",
    "Nirvana - Best Management Team":"",
    "Mechathlon":"https://goo.gl/forms/epeDfk4h3SxbHS8b2",
    "#Keep_the_chain":"https://goo.gl/aEvKpT",
    "Wolf Street 2.0":"https://docs.google.com/forms/d/e/1FAIpQLSc2DKtKzccA79Xw9kD3xnppDfWibHGhsZJ9yVrOikX2sirZSw/viewform?c=0&w=1",
    "Rainbow Six Siege (Gaming)":"https://docs.google.com/forms/d/e/1FAIpQLSfwHmsDH2YWk3Y0DDwOxJfIhpN_1nGWfJX5exz0R91QCruM5g/viewform?usp=sf_link",
    "Gaming CS GO":"https://docs.google.com/forms/d/1BTDu8Na9jo6K2mCybC5PrNRcafkvRRSSpywKaVSDxeU/edit?usp=drivesdk",
    "Gaming":"https://docs.google.com/forms/d/1aqbYqf3wogzITXAj21q9kz1yZ09jXZyA_8fGmTiSikE/edit?usp=drivesdk",
    "Lathe Machining":"https://goo.gl/forms/gv4MatOgQyoqcvPO2",
    "Transporter":"http://goo.gl/tYYNNS",
    "Drishti Soccer League":"http://goo.gl/dGx4mW",
    "Line Tracer":"http://goo.gl/5BYCi1",
    "Drishti Combat League":"http://goo.gl/tx66Mz",
    "Dirt Racer":"http://goo.gl/GKNadK"
}


event_date_fee = {
"Amazing Race 2.0" : ["20th and 21st","150"],
"HackSquad" : ["20th & 21st","500"],
"Cryptex 2.0" : ["","0"],
"Business Case" : ["19th","400"],
"Electrogeek" : ["21st","200"],
"PATW  (Present Around the World)" : ["21st","0"],
"DCOD 2.0" : ["19th & 20th","200"],
"VR Chakravyuh 2.0" : ["20th & 21st","200"],
"Drishti Cube Open 2.0" : ["20th","250"],
"Jack of All Trades" : ["20th","200"],
"Electronaire" : ["20th","75"],
"Drishti open quiz" : ["21st 1pm","200"],
"Paper Plane" : ["20th","20"],
"Bug It Out" : ["20th","100"],
"Young Engineer Hunt" : ["19th","100 per team"],
"DigiQuest" : ["19th","200"],
"Skeptico" : ["21st","200"],
"UI/UX Challenge" : ["20th","150"],
"The Room" : ["20th","150"],
"Reverse Engineering" : ["20th","200"],
"Enigma" : ["19th","200"],
"Senquesta" : ["20th","200"],
"Brandtastic" : ["20th","400"],
"Lumos" : ["21st","150"],
"Game of Codes 2.0" : ["","0"],
"The Debugger" : ["19th","100"],
"CodeMaster" : ["19th","100"],
"Picasso" : ["21st","Without kit: 200 With kit: 800"],
"Matlab Challenge" : ["20th","300"],
"&lt; dev_league /&gt;" : ["20th","540"],
"Blur (Gaming)" : ["21st","200"],
"Hydrobos" : ["21st","600"],
"Auto Quiz" : ["21st","250"],
"Creatrix" : ["20th","200"],
"Water Rocket" : ["21st","200"],
"Incognito" : ["21st","100"],
"Arduino Playground 2.0" : ["21st","300"],
"ICE Angels " : ["20th","100"],
"Nirvana - Best Management Team " : ["20th and 21st","200"],
"Mechathlon" : ["20th","400"],
"#Keep_the_chain" : ["19th","75 per head"],
"Wolf Street 2.0" : ["21st","100"],
"Rainbow Six Siege (Gaming)" : ["21st","400"],
"Gaming" : ["FIFA: 20th, NFS:21st ","NFS,FIFA: 100 8Ball Pool:50"],
"Gaming CS GO" :["19th","CS Go : 100"],
"Lathe Machining" : ["19th","200"],
"Transporter" : ["19th","250"],
"Drishti Soccer League" : ["20th and 21st","350"],
"Line Tracer" : ["20th","250"],
"Drishti Combat League" : ["19th","500"],
"Dirt Racer" : ["21st","250"]
}

{
    class Details {
        constructor() {
            this.DOM = {};

            const detailsTmpl = `
            <div class="details__bg details__bg--up"></div>
            <div class="details__bg details__bg--down"></div>
            <img class="details__img" src="" alt=""/>
            <h2 class="details__title"></h2>
            <div class="details__deco"></div>
            <h3 class="details__subtitle"></h3>
			<div class="button__group">
			<button class="details__sidebutton1">About</button>
			<button class="details__sidebutton2">Details</button>
			<button class="details__sidebutton3">Contact</button>
			</div>
            <div class="details__price"></div>
            <p class="details__description"></p>
            <button class="details__addtocart">Register</button>
            <button class="details__close"><svg class="icon icon--cross"><use xlink:href="#icon-cross"></use></svg></button>
            `;

            this.DOM.details = document.createElement('div');
            this.DOM.details.className = 'details';
            this.DOM.details.innerHTML = detailsTmpl;
            DOM.content.appendChild(this.DOM.details);
            this.DOM.details.style.display = 'none';
            this.init();
        }
        init() {
            this.DOM.bgUp = this.DOM.details.querySelector('.details__bg--up');
            this.DOM.bgDown = this.DOM.details.querySelector('.details__bg--down');
            this.DOM.img = this.DOM.details.querySelector('.details__img');
            this.DOM.title = this.DOM.details.querySelector('.details__title');
            this.DOM.deco = this.DOM.details.querySelector('.details__deco');
            this.DOM.subtitle = this.DOM.details.querySelector('.details__subtitle');
            this.DOM.price = this.DOM.details.querySelector('.details__price');
            this.DOM.description = this.DOM.details.querySelector('.details__description');
            this.DOM.sidebutton1 = this.DOM.details.querySelector('.details__sidebutton1');
            this.DOM.sidebutton2 = this.DOM.details.querySelector('.details__sidebutton2');
            this.DOM.sidebutton3 = this.DOM.details.querySelector('.details__sidebutton3');
            this.DOM.button_group = this.DOM.details.querySelector('.button__group');
            this.DOM.cart = this.DOM.details.querySelector('.details__addtocart');
            this.DOM.close = this.DOM.details.querySelector('.details__close');
            //this.DOM.magnifier = this.DOM.details.querySelector('.details__magnifier');
            this.ticketCode = '';
            this.initEvents();
        }
        initEvents() {
            this.DOM.close.addEventListener('click', () => this.isZoomed ? this.zoomOut() : this.close());
            this.DOM.sidebutton1.addEventListener('click',() => this.showButton1Element());
            this.DOM.sidebutton2.addEventListener('click',() => this.showButton2Element());
            this.DOM.sidebutton3.addEventListener('click',() => this.showButton3Element());
            //this.DOM.magnifier.addEventListener('click', () => this.zoomIn());
            this.DOM.cart.addEventListener('click', (e) => {
                window.open(event_link[this.DOM.title.innerHTML]);
            console.log(this.DOM.title.innerHTML);
        });
        }
        fill(info) {
            this.DOM.img.src = info.img;
            this.DOM.title.innerHTML = info.title;
            this.DOM.deco.style.backgroundImage = `url(${info.img})`;
            this.DOM.subtitle.innerHTML = info.subtitle;
            this.DOM.price.innerHTML = info.price;
            this.DOM.description.innerHTML = info.description;
            this.DOM.description_original = info.description;
            this.DOM.product_details = info.deta;
            this.DOM.product_contacts = info.conta;
            this.ticketCode = info.ticketCode;
            // console.log(info);
        }
        getProductDetailsRect() {
            return {
                productBgRect: this.DOM.productBg.getBoundingClientRect(),
                detailsBgRect: this.DOM.bgDown.getBoundingClientRect(),
                productImgRect: this.DOM.productImg.getBoundingClientRect(),
                detailsImgRect: this.DOM.img.getBoundingClientRect()
            };
        }
        open(data) {
            if ( this.isAnimating ) return false;
            this.isAnimating = true;

            this.DOM.details.classList.add('details--open');

            this.DOM.productBg = data.productBg;
            this.DOM.productImg = data.productImg;

            this.DOM.productBg.style.opacity = 0;
            this.DOM.productImg.style.opacity = 0;

            const rect = this.getProductDetailsRect();

            this.DOM.bgDown.style.transform = `translateX(${rect.productBgRect.left-rect.detailsBgRect.left}px) translateY(${rect.productBgRect.top-rect.detailsBgRect.top}px) scaleX(${rect.productBgRect.width/rect.detailsBgRect.width}) scaleY(${rect.productBgRect.height/rect.detailsBgRect.height})`;
            this.DOM.bgDown.style.opacity = 1;

            this.DOM.img.style.transform = `translateX(${rect.productImgRect.left-rect.detailsImgRect.left}px) translateY(${rect.productImgRect.top-rect.detailsImgRect.top}px) scaleX(${rect.productImgRect.width/rect.detailsImgRect.width}) scaleY(${rect.productImgRect.height/rect.detailsImgRect.height})`;
            this.DOM.img.style.opacity = 1;

            anime({
                    targets: [this.DOM.bgDown,this.DOM.img],
                    duration: (target, index) => index ? 800 : 250,
                easing: (target, index) => index ? 'easeOutElastic' : 'easeOutSine',
                elasticity: 250,
                translateX: 0,
                translateY: 0,
                scaleX: 1,
                scaleY: 1,
                complete: () => this.isAnimating = false
        });

            anime({
                targets: [this.DOM.title, this.DOM.deco, this.DOM.subtitle, this.DOM.price, this.DOM.description, this.DOM.cart,this.DOM.button_group],
                duration: 600,
                easing: 'easeOutExpo',
                delay: (target, index) => {
                return index*60;
        },
            translateY: (target, index, total) => {
                return index !== total - 1 ? [50,0] : 0;
            },
            scale:  (target, index, total) => {
                return index === total - 1 ? [0,1] : 1;
            },
            opacity: 1
        });

            anime({
                targets: this.DOM.bgUp,
                duration: 100,
                easing: 'linear',
                opacity: 1
            });

            anime({
                targets: this.DOM.close,
                duration: 250,
                easing: 'easeOutSine',
                translateY: ['100%',0],
                opacity: 1
            });

            anime({
                targets: DOM.hamburger,
                duration: 250,
                easing: 'easeOutSine',
                translateY: [0,'-100%']
            });
        }
        close() {
            if ( this.isAnimating ) return false;
            this.isAnimating = true;

            this.DOM.details.classList.remove('details--open');
            this.DOM.details.style.display = 'none';

            anime({
                targets: DOM.hamburger,
                duration: 250,
                easing: 'easeOutSine',
                translateY: 0
            });

            anime({
                targets: this.DOM.close,
                duration: 250,
                easing: 'easeOutSine',
                translateY: '100%',
                opacity: 0
            });

            anime({
                targets: this.DOM.bgUp,
                duration: 100,
                easing: 'linear',
                opacity: 0
            });

            anime({
                targets: [this.DOM.title, this.DOM.deco, this.DOM.subtitle, this.DOM.price, this.DOM.description, this.DOM.cart,this.DOM.button_group],
                duration: 20,
                easing: 'linear',
                opacity: 0
            });

            const rect = this.getProductDetailsRect();
            anime({
                targets: [this.DOM.bgDown,this.DOM.img],
                duration: 250,
                easing: 'easeOutSine',
                translateX: (target, index) => {
                return index ? rect.productImgRect.left-rect.detailsImgRect.left : rect.productBgRect.left-rect.detailsBgRect.left;
        },
            translateY: (target, index) => {
                return index ? rect.productImgRect.top-rect.detailsImgRect.top : rect.productBgRect.top-rect.detailsBgRect.top;
            },
            scaleX: (target, index) => {
                return index ? rect.productImgRect.width/rect.detailsImgRect.width : rect.productBgRect.width/rect.detailsBgRect.width;
            },
            scaleY: (target, index) => {
                return index ? rect.productImgRect.height/rect.detailsImgRect.height : rect.productBgRect.height/rect.detailsBgRect.height;
            },
            complete: () => {
                this.DOM.bgDown.style.opacity = 0;
                this.DOM.img.style.opacity = 0;
                this.DOM.bgDown.style.transform = 'none';
                this.DOM.img.style.transform = 'none';
                this.DOM.productBg.style.opacity = 1;
                this.DOM.productImg.style.opacity = 1;
                this.isAnimating = false;
            }
        });
        }
        zoomIn() {
            this.isZoomed = true;

            anime({
                targets: [this.DOM.title, this.DOM.deco, this.DOM.subtitle, this.DOM.price, this.DOM.description, this.DOM.cart],
                duration: 100,
                easing: 'easeOutSine',
                translateY: (target, index, total) => {
                return index !== total - 1 ? [0, index === 0 || index === 1 ? -50 : 50] : 0;
        },
            scale:  (target, index, total) => {
                return index === total - 1 ? [1,0] : 1;
            },
            opacity: 0
        });

            const imgrect = this.DOM.img.getBoundingClientRect();
            const win = {w: window.innerWidth, h: window.innerHeight};

            const imgAnimeOpts = {
                targets: this.DOM.img,
                duration: 250,
                easing: 'easeOutCubic',
                translateX: win.w/2 - (imgrect.left+imgrect.width/2),
                translateY: win.h/2 - (imgrect.top+imgrect.height/2)
            };

            if ( win.w > 0.8*win.h ) {
                this.DOM.img.style.transformOrigin = '50% 50%';
                Object.assign(imgAnimeOpts, {
                    scaleX: 0.95*win.w/parseInt(0.8*win.h),
                    scaleY: 0.95*win.w/parseInt(0.8*win.h),
                    rotate: 90
                });
            }
            anime(imgAnimeOpts);

            anime({
                targets: this.DOM.close,
                duration: 250,
                easing: 'easeInOutCubic',
                scale: 1.8,
                rotate: 180
            });
        }
        showButton1Element() {
            this.DOM.description.innerHTML = this.DOM.description_original;
        }
        showButton2Element() {
            this.DOM.description.innerHTML = 'DATE: ' + event_date_fee[this.DOM.title.innerHTML][0]+' JAN 2018<br />' +'REGISTRATION FEE: ' + event_date_fee[this.DOM.title.innerHTML][1]+'<br />' + this.DOM.product_details;
        }

        showButton3Element() {
            this.DOM.description.innerHTML = this.DOM.product_contacts;
        }


        zoomOut() {
            if ( this.isAnimating ) return false;
            this.isAnimating = true;
            this.isZoomed = false;

            anime({
                targets: [this.DOM.title, this.DOM.deco, this.DOM.subtitle, this.DOM.price, this.DOM.description, this.DOM.cart],
                duration: 250,
                easing: 'easeOutCubic',
                translateY: 0,
                scale: 1,
                opacity: 1
            });

            anime({
                targets: this.DOM.img,
                duration: 250,
                easing: 'easeOutCubic',
                translateX: 0,
                translateY: 0,
                scaleX: 1,
                scaleY: 1,
                rotate: 0,
                complete: () => {
                this.DOM.img.style.transformOrigin = '0 0';
            this.isAnimating = false;
        }
        });

            anime({
                targets: this.DOM.close,
                duration: 250,
                easing: 'easeInOutCubic',
                scale: 1,
                rotate: 0
            });
        }
    };

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
            this.initEvents();
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
    DOM.details = new Details();
    imagesLoaded(document.body, () => document.body.classList.remove('loading'));
};
