$(window).on('load', function () {

    $height = $(window).height()/2 - 120
   // $('.event-header').css({marginTop: $height})

    $('.event-one-container').hide()

    $('.another-cont').fadeOut('slow')


    $('#event-header').lettering()


    $('.event-button').click(function () {

        $('.event-button').fadeOut()

        $('.circle'+$count).velocity({scale: 100, opacity:0, display:'none'}, {
             easing: 'linear', begin: function () {

                $('.fb-fab,.insta-fab').velocity({scale: 0}, 200, "linear")
                $('.event-one-container').fadeIn("slow")
                $('.event-header').removeClass('text-dark').addClass('text-white')
                $('.fa-arrow-up').fadeOut("slow")



            }, complete: function () {

                 $('.event-header').velocity({scale:1.5, color: 'white'}, 500, "linear")


                $('.close-fab,.mail-fab').velocity({scale: 1}, 200, "linear")


            }, duration: 200
        })
    })


    $('.close-btn').click(function () {

         $('.circle'+$count).velocity({scale: 6.3, opacity: 1, display: 'block'}, {duration:300, easing: 'linear', complete:function () {


             $('.event-one-container').fadeOut("slow")
             $('.event-header').velocity({scale:1}, 500, "linear")
             $('.event-header').removeClass('text-white').addClass('text-dark')
             $('.event-button').fadeIn()
             $('.fa-arrow-up').fadeIn("slow")

             $('.close-fab,.mail-fab').velocity({scale: 0}, {
                     duration: 200, easing: "linear", complete: function () {

                         $('.fb-fab,.insta-fab').velocity({scale: 1}, 200, "linear")
                     }
                 }


             )


         }})

    })


    var eventText = ['Drishti <br> 18','Drishti <br> Night', 'Workshops <br> CET', 'Rise <br> Again', 'CET <br> Life', 'Cryptex <br> CET', 'Amazing <br> VR  Race']



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


    $scrolloffset = 0
    $count = 1;

    $('#prev').hide()

    function scaleDown() {


        if ($count >= 13) {
            $count = 13

        }
        else {

            $count++

            $('.circle-content').velocity({opacity: 0, display: 'none'},{duration:500,easing: 'linear', complete: function () {

                console.log("consolevalue"+eventText[$count-1])
                $('.event-header').html(eventText[$count-1])


            }})
                .velocity({opacity: 1, display: 'block'},{duration:500,easing: 'linear'})


            hideCount = $count + 6
            for (i = hideCount; i <= 19; i++)
                $('.circle' + i).hide()

            foo = hideCount
            $('.circle' + foo).show()


            if ($count == 2)
                $('#prev').fadeIn('slow')
            if ($count == 13)
                $('#next').fadeOut('slow')

            // console.log("down")
            for (key in scale) {

                console.log("key: " + key)
                console.log("scale:" + Math.floor(scale[key]))

                val = Math.floor(scale[key])
                if (Math.floor(scale[key]) === 6) {
                    // console.log("insie math")
                    scale[key] = 0
                    $(key).velocity({'scale': scale[key], 'easing': 'linear'}, 400)
                }
                else if (Math.floor(scale[key]) <= 0) {
                    scale[key] = scale[key] - 2
                    $(key).velocity({'scale': 0, 'easing': 'linear'}, 400)

                }
                else {

                    scale[key] = scale[key] - 2
                    $(key).velocity({'scale': scale[key], 'easing': 'linear'}, 400)
                    // scale[key] = $val
                }


            }

        }
    }

    function scaleUp() {


        if ($count <= 1) {
            $count = 1

        }
        else {
            $count--

            $('.circle-content').velocity({opacity: 0, display: 'none'},{duration:500,easing: 'linear', complete: function () {

                console.log("consolevalue"+eventText[$count-1])
                $('.event-header').html(eventText[$count-1])


            }})
                .velocity({opacity: 1, display: 'block'},{duration:500,easing: 'linear'})


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
                    scale[key] = 6.2
                    $(key).velocity({'scale': scale[key], 'easing': 'linear'}, 400)
                }
                else if (Math.floor(scale[key]) < 0) {
                    scale[key] = scale[key] + 2
                    $(key).velocity({'scale': 0, 'easing': 'linear'}, 400)

                }
                else {

                    scale[key] = scale[key] + 2
                    $(key).velocity({'scale': scale[key], 'easing': 'linear'}, 400)
                    // scale[key] = $val
                }


            }


        }

    }


    $('.heading').lettering()
    $('.heading2').lettering()


    $(document).keydown(function (e) {
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

    })


    $('#next').click(function () {


        scaleDown()

    })

    $('#prev').click(function () {

        scaleUp()

    })

    $(window).on('wheel', _.throttle(function (event) {
        console.log(event.originalEvent.deltaY)
        // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
        if (event.originalEvent.deltaY < -100) {
            console.log("up" + event.originalEvent.deltaY)

            scaleUp()


            // wheeled up
        }
        else if (event.originalEvent.deltaY > 100) {
            console.log("down" + event.originalEvent.deltaY)

            scaleDown()

        }
    }, 600))
	

	/*-----------------------------------------------------------------------------*/
	
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

})
