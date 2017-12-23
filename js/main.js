
$(window).on('load', function () {
	
/*==============================================================
written by nabeel
===============================================================*/
var slides = [],
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

    var elem = $('.event-tag')

/*
nabeel ends here
============================================================*/

    /*circleType = new CircleType(elem)
    circleType.radius(100)*/

    new CircleType(document.getElementById('tag-id')).radius(250)

    $('.another-cont').fadeOut('slow')


    $('#event-header').lettering()


    $('.mail-btn').click(function () {

        $('.drawer-right').velocity({translateX: ['0%', '100%']}, {
            duration: 400, easing: 'swing', begin: function () {

                $('.mail-fab, .ham-fab, .close-fab').velocity({scale: 0}, 100, "linear")


            },
            complete: function () {

                $('.close-fab-drawer').velocity({scale: 1}, 100, "linear")

            }
        })


    })

    $('.close-btn-drawer').click(function () {

        $('.drawer-right').velocity({translateX: ['100%', '0%']}, {
            duration: 400, easing: 'swing', begin: function () {


                $('.close-fab-drawer').velocity({scale: 0}, 100, "linear")
            },
            complete: function () {

                $('.mail-fab, .ham-fab , .close-fab').velocity({scale: 1}, 100, "linear")


            }
        })


    })


    $('.event-button').click(function () {


        $('.event-button').fadeOut()
        $('.event-tag').velocity({opacity: 0}, 200, "linear")

        $('.circle' + $count).velocity({scale: 100, opacity: 0, display: 'none'}, {
            easing: 'linear', begin: function () {

                $('.fb-fab,.insta-fab').velocity({scale: 0}, 200, "linear")
                $('.event-one-container').fadeIn("slow")
                $('.event-header').removeClass('text-dark').addClass('text-white')
                $('.fa-arrow-up').fadeOut("slow")


            }, complete: function () {

                $('.event-header').velocity({scale: 1.5}, 500, "linear")


                if (window.matchMedia('(max-width: 768px)').matches)

                    $('.close-fab').velocity({scale: 1.3}, 1, "linear")
                else
                    $('.close-fab,.mail-fab').velocity({scale: 1}, 200, "linear")


            }, duration: 200
        })
    })


    $('.close-btn').click(function () {

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
                $('.event-header').velocity({scale: 1}, 500, "linear")
                $('.event-header').removeClass('text-white').addClass('text-dark')
                $('.event-button').fadeIn()
                $('.event-tag').velocity({opacity: 1}, 200, "linear")

                $('.fa-arrow-up').fadeIn("slow")

                $('.close-fab,.mail-fab').velocity({scale: 0}, {
                        duration: 200 - time, easing: "linear", complete: function () {

                            $('.fb-fab,.insta-fab').velocity({scale: 1}, 200, "linear")
                        }
                    }
                )


            }
        })

    })


    var eventText = ['Drishti <br> 18', 'Drishti <br> Night', 'Workshops <br> CET', 'Rise <br> Again', 'CET <br> Life', 'Cryptex <br> CET', 'Amazing <br> VR  Race']
    var tagText = ['', 'Computer Science', 'Electronics & Communications', 'Mechanical', 'Electrical', 'Civil']


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

    scale2 = { '.circle1': 4.4,
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
        '.circle2': 5.8,
        '.circle3': 7.8,
        '.circle4': 9.8,
        '.circle5': 11.8,
        '.circle6': 13.8,
        '.circle7': 15.8,
        '.circle8': 17.8,
        '.circle9': 19.8,
        '.circle10': 21.8,
        '.circle11': 23.8,
        '.circle12': 25.8,
        '.circle13': 27.8,
        '.circle14': 29.8,
        '.circle15': 31.8,
        '.circle16': 33.8,
        '.circle17': 35.8,
        '.circle18': 37.8,
        '.circle19': 39.8
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
        console.log("inside media query 480px" + $scalValue2)
    }



    function scaleDown() {




        if ($count >= 13) {
            $count = 13

        }
        else {

            $count++

            $('.circle-content').velocity({opacity: 0, display: 'none'}, {
                duration: 500, easing: 'linear', complete: function () {

                    console.log("consolevalue" + eventText[$count - 1])
                    $('.event-header').html(eventText[$count - 1])
                    $('.event-tag').html(tagText[$count - 1])
                    new CircleType(document.getElementById('tag-id')).radius(250)


                }
            })
                .velocity({opacity: 1, display: 'block'}, {duration: 500, easing: 'linear'})


            hideCount = $count + 6
            for (i = hideCount; i <= 19; i++)
                $('.circle' + i).hide()

            foo = hideCount
            $('.circle' + foo).show()


            if ($count == 2)
                $('#prev').fadeIn('slow')
            if ($count == 13)
                $('#next').fadeOut('slow')

             console.log("down")
            for (key in scale) {

                console.log("key: " + key)
                console.log("scale:" + Math.floor(scale[key]))

                val = Math.floor(scale[key])

                console.log("scale "+ val + "offset "+ $offset)

                if (Math.floor(scale[key]) === $offset ) {
                    // console.log("insie math")
                    console.log("inside ifffffffff")
                    scale[key] = 0
                    $(key).velocity({'scale': scale[key], opacity: 0},{ 'easing': 'linear', duration: 400})
                }
                else if (Math.floor(scale[key]) <= 0) {
                    scale[key] = scale[key] - 2
                    $(key).velocity({'scale': 0},{ 'easing': 'linear', duration: 400})

                }
                else {

                    scale[key] = scale[key] - 2


                        $(key).velocity({'scale': scale[key] / $scalValue},{ 'easing': 'linear', duration: 400})
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
                duration: 500, easing: 'linear', complete: function () {

                    console.log("consolevalue" + eventText[$count - 1])
                    $('.event-header').html(eventText[$count - 1])
                    $('.event-tag').html(tagText[$count - 1])
                    new CircleType(document.getElementById('tag-id')).radius(250)


                }
            })
                .velocity({opacity: 1, display: 'block'}, {duration: 500, easing: 'linear'})


            hideCount = $count + 6
            for (i = hideCount; i <= 19; i++)
                $('.circle' + i).hide()

            foo = hideCount
            $('.circle' + foo).show()


            if ($count == 1)
                $('#prev').fadeOut('slow')
            if ($count == 12)
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
                    scale[key] = scale[key] + 2
                   // $(key).velocity({'scale': 0,}, {easing: 'linear', duration: 400})

                }
                else {

                    scale[key] = scale[key] + 2

                        $(key).velocity({'scale': scale[key]}, {easing: 'linear', duration: 300})

                }


            }


        }

    }


    $('.heading').lettering()
    $('.heading2').lettering()


    var elem = document.getElementById("elem")
    hammer = new Hammer(elem)
    hammer.get('swipe').set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 5,
        velocity:0.1
    });

    hammer.on("swipeup swipedown", function (event) {

        console.log("swipe detected")

        if(event.type === "swipeup"){
			backward_animation()
            scaleDown()
		}
        else if(event.type === "swipedown"){
			forward_animation()
            scaleUp()
		}



    } )



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

		backward_animation();
        scaleDown()

    }, 400))

    $('#bt2').on('click', _.debounce(function () {
		forward_animation();
        scaleUp()

    }, 400))

    $('body').on('wheel', _.debounce(function (event) {

        console.log("scrolleeeeeed" + event.originalEvent.deltaY)

        // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
        if (event.originalEvent.deltaY < 0) {
			forward_animation();
            scaleUp()


            // wheeled up
        }

        else if (event.originalEvent.deltaY > 0) {
			backward_animation()
            scaleDown()

        }
    }, 150))



})

	/*-----------------------------------------------------------------------------*/

