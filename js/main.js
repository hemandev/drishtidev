$(window).on('load', function () {



    $('.another-cont').fadeOut('slow')

    $width_image = 150
    $height_image = 150

    if (window.matchMedia('(max-width: 764px)').matches){

        $('.event-image').attr({height: 100, width: 100})

        $width_image = 100
        $height_image = 100

    }


    /*==============================================================
written by nabeel
===============================================================*/
    /*var slides = [],
        tl = new TimelineMax({paused: true}),
        container = document.querySelector('.animationContainer'),
        numLoaded = 0,
        FPS = 24;
    for( var i = 1; i <= 35; i++ ) {
      slides.push(generate_filename('sequences/solutions-01','solutions-01_',i,'png'));
    }

    for(var i=0;i < slides.length;i++){
      var img = new Image();
      img.src = slides[i];
      img.id = `img${i}`;
      //img.onload = function() {
        //checkLoadCount();
        console.log(img)
        console.log(i)
        console.log(slides[i])
        container.appendChild(img);
      }
        function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function generate_filename(arg_path,arg_prefix,arg_index,arg_type)
    {
        temp_path = arg_path + '/'+ arg_prefix + pad(arg_index,2).toString()+'.'+arg_type;
        return temp_path;
    }

    function forward_animation() {
      var images = $(container).children(), // images in the sequence
        fps = 24,
        duration = 1 / fps;
      var sequence = new TimelineMax({paused:false})
        .staggerTo(images, 0,{ position: 'fixed', visibility: 'visible' }, duration, 0)
        .staggerTo(images, 0, { position: 'fixed', visibility: 'hidden', immediateRender: false }, duration, duration)
        .set({}, {}, "+="+duration)
        .reverse(0);
      // tl.play();
    }

    function backward_animation()
    {
        var images = $(container).children(), // images in the sequence
        fps = 24,
        duration = 1 / fps;
      var sequence = new TimelineMax({paused:false})
        .staggerTo(images, 0,{ position: 'fixed', visibility: 'visible' }, duration, 0)
        .staggerTo(images, 0, { position: 'fixed', visibility: 'hidden', immediateRender: false }, duration, duration)
        .set({}, {}, "+="+duration);
    }
        $height = $(window).height() / 2 - 120
        // $('.event-header').css({marginTop: $height})

        $('.event-one-container').hide()

        var elem = $('.event-tag')*/

    /*
    nabeel ends here
    ============================================================*/


    // $('.event-header').css({marginTop: $height})

    $('.event-one-container').hide()

    var elem = $('.event-tag')

    $('.ham-container').hide()

    /*  var granimInstance = new Granim({
          element: '#canvas-basic',
          direction: 'top-bottom',
          opacity: [1, 1],
          isPausedWhenNotInView: true,
          image : {
              source: '../images/logoblacktransp.png',
              blendingMode: 'multiply'
          },
          states : {
              "default-state": {
                  gradients: [
                      ['#29323c', '#485563'],
                      ['#FF6B6B', '#556270'],
                      ['#80d3fe', '#7ea0c4'],
                      ['#f0ab51', '#eceba3']
                  ],
                  transitionSpeed: 7000
              }
          }
      });*/


    /*circleType = new CircleType(elem)
    circleType.radius(100)*/
    $imgFlag = 0

    $hamFlag = 0
    $readFlag = 0

    mainText = [{header: "DRISHTI 18'", image: 'images/logoblacktransp.png', sub: 'January 16 - 18', color: 'black'},
        {header: "Competitions", image: 'images/cup.png', sub: '', color: 'white'},
        {header: "Workshops", image: 'images/workshopswhite.png', sub: '', color: 'white'},
        {header: "Informals", image: 'images/informals.png', sub: '', color: 'white'},
        {header: "Projects", image: 'images/ideawhite.png', sub: '', color: 'white'},
        {header: "Sponsors", image: 'images/hand-shake.png', sub: '', color: 'white'},
        {header: "Contact", image: 'images/emailwhite.png', sub: '', color: 'white'},
    ]


    $('.ham-btn').click(function () {

        $mediaFlag = '25px'
        if ($hamFlag === 0) {
            $('.mail-fab, .insta-fab, .fb-fab, .close-fab').velocity({scale: 0})
            $hamFlag = 1
        }
        else if ($hamFlag === 1 && $readFlag === 1) {
            $('.mail-fab,.close-fab').velocity({scale: 1})
            $hamFlag = 0
        }

        else {
            $('.insta-fab, .fb-fab').velocity({scale: 1})
            $hamFlag = 0
        }


        if (window.matchMedia('(max-width: 768px)').matches)
            $mediaFlag = 0


        console.log("inside click!!!!!")

        if ($imgFlag === 0) {

            $('.ham-container').fadeToggle()
            $('.img').velocity({right: 0, left: 0, '-webkit-filter': 'invert(100%)'}, 200, "swing")
            $('#menu_button').removeClass('fa-bars').addClass('fa-times')
            $imgFlag = 1

        }
        else if ($imgFlag === 1) {

            $('.ham-container').fadeToggle()
            $('.img').css({left: $mediaFlag, right: ''})
            $('#menu_button').removeClass('fa-times').addClass('fa-bars')

            $imgFlag = 0

        }


    })

    //new CircleType(document.getElementById('tag-id')).radius(250)





    function mailBtnClick() {


        if (window.matchMedia('(max-width: 764px)').matches) {


            $('.event-one-container').velocity({height: '50%'})

            $('.drawer-right').velocity({translateY: '100%'}, {
                duration: 400, easing: 'swing', begin: function () {

                    $('.mail-fab, .ham-fab, .close-fab').velocity({scale: 0}, 100, "linear")


                },
                complete: function () {

                    $('.close-fab-drawer').velocity({scale: 1}, 100, "linear")

                }
            })


        }


        else {

            $('.event-one-container').velocity({width: '50%'})

            $('.drawer-right').velocity({translateX: ['0%', '100%']}, {
                duration: 400, easing: 'swing', begin: function () {

                    $('.mail-fab, .ham-fab, .close-fab').velocity({scale: 0}, 100, "linear")


                },
                complete: function () {

                    $('.close-fab-drawer').velocity({scale: 1}, 100, "linear")

                }
            })

        }
    }


    $('.mail-btn').click(function () {

        mailBtnClick()


    })

    $('.close-btn-drawer').click(function () {

        if (window.matchMedia('(max-width: 764px)').matches) {


            $('.drawer-right').velocity({translateY: '200%'}, {
                duration: 400, easing: 'swing', begin: function () {

                    $('.event-one-container').velocity({height: '100%'})

                    $('.close-fab-drawer').velocity({scale: 0}, 100, "linear")
                },
                complete: function () {

                    $('.mail-fab, .ham-fab , .close-fab').velocity({scale: 1}, 100, "linear")


                }
            })


        }

        else {
            $('.drawer-right').velocity({translateX: ['100%', '0%']}, {
                duration: 400, easing: 'swing', begin: function () {

                    $('.event-one-container').velocity({width: '100%'})

                    $('.close-fab-drawer').velocity({scale: 0}, 100, "linear")
                },
                complete: function () {

                    $('.mail-fab, .ham-fab , .close-fab').velocity({scale: 1}, 100, "linear")


                }
            })


        }
    })


    $('.event-button').click(function () {

        if($count === 1)
            window.location = 'drishti.html'
        else if($count === 2)
            window.location = 'events.html'
        else if($count === 3)
            window.location = 'workshops.html'
        else if($count === 4)
            window.location = 'informals.html'
        else if($count === 5)
            window.location = 'projects.html'
        else if($count === 2)
            window.location = 'sponsors.html'
        else if($count === 2)
            window.location = 'contact.html'






        /* $('.event-page-container').load('events.html')
        $('.front-page-container').fadeOut()
        $('.event-page-container').fadeIn()
        $('.close-fab').velocity({scale: 1})*/



/*
        $readFlag = 1


        $('.event-button').fadeOut()
        $('.event-tag').velocity({opacity: 0}, 200, "linear")

        $('.circle' + $count).velocity({scale: 100, opacity: 0, display: 'none'}, {
            easing: 'linear', begin: function () {

                $('.fb-fab,.insta-fab').velocity({scale: 0}, 200, "linear")
                $('.event-one-container').fadeIn("slow")
                $('.event-header').removeClass('text-dark').addClass('text-white')
                $('.fa-arrow-up, .fa-arrow-down').fadeOut("slow")


            }, complete: function () {

                $('.event-header').velocity({scale: 1.1}, 100, "linear")


                if (window.matchMedia('(max-width: 768px)').matches)

                    $('.close-fab').velocity({scale: 1.3}, 1, "linear")
                else
                    $('.close-fab,.mail-fab').velocity({scale: 1}, 200, "linear")


            }, duration: 200
        })

        setTimeout(mailBtnClick, 1000)
*/
    })




    $('.close-btn').click(function () {


        $('.close-fab').velocity({scale: 0})

        $('.event-page-container').fadeOut("slow")
        $('.front-page-container').fadeIn("slow")

      /*  $readFlag = 0

        if (window.matchMedia('(max-width: 768px) and (min-width: 480px)').matches) {

            scaleValue = 1.4
            time = 199

        }

        else if (window.matchMedia('(max-width: 480px)').matches) {

            scaleValue = 1.6
            time = 199

        }
        else {
            scaleValue = 1
            time = 0
        }

        $('.circle' + $count).velocity({scale: 6.3 / scaleValue, opacity: 1, display: 'block'}, {
            duration: 300, easing: 'linear', complete: function () {


                $('.event-one-container').fadeOut("slow")
                $('.event-header').velocity({scale: 1}, 500, "linear").css({'text-align': 'center'})
                $('.event-header').removeClass('text-white').addClass('text-dark')
                $('.event-button').fadeIn()
                $('.event-tag').velocity({opacity: 1}, 200, "linear")

                $('.fa-arrow-up, .fa-arrow-down').fadeIn("slow")

                $('.close-fab,.mail-fab').velocity({scale: 0}, {
                        duration: 200 - time, easing: "linear", complete: function () {

                            $('.fb-fab,.insta-fab').velocity({scale: 1}, 200, "linear")
                        }
                    }
                )


            }
        })*/

    })


    var eventText = ['DRISHTI  18', 'Drishti  Night', 'Workshops  CET', 'Rise  Again', 'CET  Life', 'Cryptex  CET', 'Amazing  VR  Race']
    //var tagText = ['', 'Computer Science', 'Electronics & Communications', 'Mechanical', 'Electrical', 'Civil']


    for (i = 8; i <= 19; i++)
        $('.circle' + i).hide()


    var scale = {
        '.circle1': 6.2,
        '.circle2': 8.3,
        '.circle3': 10.3,
        '.circle4': 12.3,
        '.circle5': 14.3,
        '.circle6': 16.3,
        '.circle7': 18.3,
        '.circle8': 20.3,
        '.circle9': 22.3,
        '.circle10': 24.3,
        '.circle11': 26.3,
        '.circle12': 28.3,
        '.circle13': 30.3,
        '.circle14': 32.3,
        '.circle15': 34.3,
        '.circle16': 36.3,
        '.circle17': 38.3,
        '.circle18': 40.3,
        '.circle19': 42.3
    }

    scaleOffset2 = 4.4
    scaleOffset3 = 3.8


    scale1 = scale

    scale2 = {
        '.circle1': 4.4,
        '.circle2': 6.4,
        '.circle3': 8.3,
        '.circle4': 10.4,
        '.circle5': 12.4,
        '.circle6': 14.4,
        '.circle7': 16.4,
        '.circle8': 18.4,
        '.circle9': 20.4,
        '.circle10': 22.4,
        '.circle11': 24.4,
        '.circle12': 26.4,
        '.circle13': 28.4,
        '.circle14': 30.4,
        '.circle15': 32.4,
        '.circle16': 34.4,
        '.circle17': 36.4,
        '.circle18': 38.4,
        '.circle19': 40.4
    }

    scale3 = {
        '.circle1': 3.8,
        '.circle2': 5.1,
        '.circle3': 6.4,
        '.circle4': 7.6,
        '.circle5': 8.9,
        '.circle6': 10.1,
        '.circle7': 11.4,
        '.circle8': 12.6,
        '.circle9': 13.9,
        '.circle10': 15.1,
        '.circle11': 16.4,
        '.circle12': 17.6,
        '.circle13': 18.9,
        '.circle14': 20.1,
        '.circle15': 21.4,
        '.circle16': 22.6,
        '.circle17': 23.9,
        '.circle18': 25.1,
        '.circle19': 26.4
    }


    /* for(i=0;i<scale.length;i++) {
         key = i+1
         key = '.circle'+key
         scale2[key] = scaleOffset2
         scaleOffset2 += 2
     }

     scale3 = {}
         for(i=0;i<scale.length;i++) {
             key = i+1
             key = '.circle'+key
             scale3[key] = scaleOffset3
             scaleOffset3 += 2
         }*/


    $scalValue1 = 1.4
    $scalValue2 = 1.6

    $scrolloffset = 0
    $count = 1;

    $('#prev').hide()

    $scalValue = 1
    $flag = 1000
    scale = scale1
    $offset = 6
    $anotherOffset = 6.2
    $diffOffset = 2

    if (window.matchMedia('(max-width: 768px) and (min-width: 480px)').matches) {

        $scaleValue = $scalValue1
        $flag = 2000
        scale = scale2
        $offset = 4
        $anotherOffset = 4.4

    }

    else if (window.matchMedia('(max-width: 480px)').matches) {


        $scaleValue = $scalValue2
        $flag = 3000
        scale = scale3
        $offset = 3
        $anotherOffset = 3.8
        $diffOffset = 1.3
        console.log("inside media query 480px" + $scalValue2)
    }


    function scaleDown() {


        if ($count >= 7) {
            $count = 7

        }
        else {

            $count++

            $(' .circle-content').velocity({opacity: 0, display: 'none'}, {
                duration: 300, easing: 'linear', begin: function () {

                    $('.event-image, .event-sub, .event-header, .event-button').fadeOut("slow")

                    $('.event-image').attr({src: mainText[$count -1].image, width: $width_image, height: $height_image})

                    if(mainText[$count -1].color === 'white') {
                        $('.event-sub, .event-header').removeClass('text-dark').addClass('text-light')
                        $('.event-button').removeClass('btn-outline-dark').addClass('btn-outline-light')
                    }
                    else {
                        $('.event-sub, .event-header').removeClass('text-light').addClass('text-dark')
                        $('.event-button').removeClass('btn-outline-light').addClass('btn-outline-dark')
                    }

                    $('.event-header').html(mainText[$count - 1].header)
                    $('.event-sub').html(mainText[$count - 1].sub)

                    //  $('.event-tag').html(tagText[$count - 1])


                }
            })
                .velocity({opacity: 1, display: 'block'}, {duration: 300, easing: 'linear'})

            $('.event-image, .event-sub, .event-header, .event-button').fadeIn("slow")

            hideCount = $count + 6
            for (i = hideCount; i <= 19; i++)
                $('.circle' + i).hide()

            foo = hideCount
            $('.circle' + foo).show()


            if ($count === 2)
                $('#prev').fadeIn('slow')
            if ($count === 7)
                $('#next').fadeOut('slow')

            console.log("down")
            for (key in scale) {

                console.log("key: " + key)
                console.log("scale:" + Math.floor(scale[key]))

                val = Math.floor(scale[key])

                console.log("scale " + val + "offset " + $offset)

                if (Math.floor(scale[key]) === $offset) {
                    // console.log("insie math")
                    console.log("inside ifffffffff")
                    scale[key] = 0
                    $(key).velocity({'scale': scale[key], opacity: 0}, {'easing': 'linear', duration: 400})
                }
                else if (Math.floor(scale[key]) <= 0) {
                    scale[key] = scale[key] - $diffOffset
                    $(key).velocity({'scale': 0}, {'easing': 'linear', duration: 400})

                }
                else {

                    scale[key] = scale[key] - $diffOffset


                    $(key).velocity({'scale': scale[key] / $scalValue}, {'easing': 'linear', duration: 400})
                    // scale[key] = $val
                }


            }

        }
    }

    function scaleUp() {

        var $scalValue = 1


        if (window.matchMedia('(max-width: 768px) and (min-width: 480px)').matches)

            $scaleValue = $scalValue1

        else if (window.matchMedia('(max-width: 480px)').matches)

            $scaleValue = $scalValue2


        if ($count <= 1) {
            $count = 1

        }
        else {
            $count--

            $('.circle-content').velocity({opacity: 0, display: 'none'}, {
                duration: 300, easing: 'linear', begin: function () {
                    $('.event-image, .event-sub, .event-header, .event-button').fadeOut("slow")

                    $('.event-image').attr({src: mainText[$count -1].image, width: $width_image, height: $height_image})
                    if(mainText[$count -1].color === 'white') {
                        $('.event-sub, .event-header').removeClass('text-dark').addClass('text-light')
                        $('.event-button').removeClass('btn-outline-dark').addClass('btn-outline-light')
                    }
                    else {
                        $('.event-sub, .event-header').removeClass('text-light').addClass('text-dark')
                        $('.event-button').removeClass('btn-outline-light').addClass('btn-outline-dark')
                    }

                    $('.event-header').html(mainText[$count - 1].header)
                    $('.event-sub').html(mainText[$count - 1].sub)



                }
            })
                .velocity({opacity: 1, display: 'block'}, {duration: 300, easing: 'linear'})
            $('.event-image, .event-sub, .event-header, .event-button').fadeIn("slow")


            hideCount = $count + 6
            for (i = hideCount; i <= 19; i++)
                $('.circle' + i).hide()

            foo = hideCount
            $('.circle' + foo).show()


            if ($count === 1)
                $('#prev').fadeOut('slow')
            if ($count === 6)
                $('#next').fadeIn('slow')

            // console.log("down")
            for (key in scale) {

                console.log("key: " + key)
                console.log("scale:" + Math.floor(scale[key]))

                val = Math.floor(scale[key])
                if (Math.floor(scale[key]) === 0) {
                    // console.log("insie math")
                    scale[key] = $anotherOffset

                    $(key).velocity({'scale': scale[key], opacity: 1}, {easing: 'linear', duration: 300})

                }
                else if (Math.floor(scale[key]) < 0) {
                    scale[key] = scale[key] + $diffOffset
                    // $(key).velocity({'scale': 0,}, {easing: 'linear', duration: 400})

                }
                else {

                    scale[key] = scale[key] + $diffOffset

                    $(key).velocity({'scale': scale[key]}, {easing: 'linear', duration: 300})

                }


            }


        }

    }


    var elem = document.getElementById("elem")
    hammer = new Hammer(elem)
    hammer.get('swipe').set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 5,
        velocity: 0.1
    });

    hammer.on("swipeup swipedown", function (event) {

        console.log("swipe detected")

        if (event.type === "swipeup") {
            //backward_animation()
            scaleDown()
        }
        else if (event.type === "swipedown") {
            //forward_animation()
            scaleUp()
        }


    })


    $(document).keydown(_.debounce(function (e) {
        // $('.rounded-circle').addClass('anim')
        //$('.rounded-circle').add()


        console.log("inside")
        switch (e.which) {


            case 40:

                /*console.log("count" + $count)
                if ($count >= 13) {
                    $count = 13
                    break
                }

                else {
                    $count++
                    scaleDown()


                }*/

                scaleDown()

                break;


            case 38:

                /*    if ($count <= 1) {
                        $count = 1
                        break
                    }
                    else {
                        $count--

                        scaleUp()


                    }*/

                scaleUp()

                break;

        }


        // e.preventDefault()

    }, 350))


    $('#bt').on('click', _.debounce(function () {

        //backward_animation()
        scaleDown()

    }, 400))

    $('#bt2').on('click', _.debounce(function () {

        //forward_animation()
        scaleUp()

    }, 400))

    $('body').on('wheel', _.debounce(function (event) {

        console.log("scrolleeeeeed" + event.originalEvent.deltaY)

        // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
        if (event.originalEvent.deltaY < 0) {

            //forward_animation()
            scaleUp()


            // wheeled up
        }

        else if (event.originalEvent.deltaY > 0) {
            //backward_animation()
            scaleDown()

        }
    }, 150))


})


/*-----------------------------------------------------------------------------*/
/*

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
function generate_filename(arg_path,arg_prefix,arg_index,arg_type)
{
    temp_path = arg_path + '/'+ arg_prefix + pad(arg_index,2).toString()+'.'+arg_type;
    return temp_path;
}



function next_frame()
{
    console.log('inside next_frame')
    if(index_val == Math.floor(no_of_frames /2)){
        //to handle the necessary changes
        //changes occur at the middle of the animation
        $('.big-container').hide();
    }

    if(index_val == no_of_frames){
        index_val = 0;
        return;
    }

    else{
        index_val++;
        $("#img_frame").attr("src",generate_filename(path,prefix,index_val,extension));
    }
    setTimeout(next_frame,50)
}

path = 'sequences/menu'
prefix = 'menu_'
extension = 'png'
index_val = 0
no_of_frames = 11
var throttled = _.throttle(next_frame,2000,{trailing:false});
$('#menu_button').on('click',function(){console.log('clicked');$("#img_frame").show();next_frame();});



*/
