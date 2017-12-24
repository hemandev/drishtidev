function moveToSelected(element) {
  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});
$(document).ready(function(){
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

/*nabeel ends here
============================================================*/
	
	
	
$('#carousel div').click(function() {
	if($(this).attr('class') == 'selected'){
		backward_animation();
		$('#carousel').hide();
		$('.details').show();
		$('#prev').hide();
		$('#next').hide();
	}
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});

/*
$(document).on('click','.selected',function() {
	backward_animation();
	$('#carousel').hide();
	$('.details').show();
});
*/
$('#back').click(function() {
	forward_animation()
	$('#carousel').show()
		$('.details').fadeOut()
		$('#prev').show()
		$('#next').show()
});
});