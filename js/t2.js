console.clear();
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
var slides = [],
    tl = new TimelineMax({paused: true}),
    container = document.querySelector('.animationContainer'),
    numLoaded = 0,
    FPS = 24;

for( var i = 1; i <= 35; i++ ) {
  slides.push(generate_filename('sequences/solutions-01','solutions-01_',i,'png'));
}

/*
slides.forEach(function(slide,index){
  var img = new Image();
  img.src = slide;
  img.id = `img${index}`;
  img.onload = function() {
    checkLoadCount();
	console.log(img)
	console.log(index)
	console.log(slide)
    container.appendChild(img);
  }
});
*/
$('window').on('load',function(){
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
  //}
}

/*
function checkLoadCount() {
  numLoaded++;
  if( numLoaded == slides.length ) {
    doAnimation();
  }
}
*/


	
/*
$('body').on('wheel',_.throttle(function(event){
	var images = $(container).children(), // images in the sequence
    fps = 24,
    duration = 1 / fps;
	var sequence = new TimelineMax({paused:true})
    .staggerTo(images, 0,{ position: 'fixed', visibility: 'visible' }, duration, 0)
    .staggerTo(images.not(images.last()), 0, { position: 'fixed', visibility: 'hidden', immediateRender: false }, duration, duration)
    .set({}, {}, "+="+duration)
	if(event.originalEvent.deltaY < 0){
		sequence.reverse(0);
	
	}
	else if(event.originalEvent.deltaY > 0){
		sequence.play();
	}
},2000,{trailing:false})
);
*/

/*
 To set wheel event...
 */
$('body').on('wheel',_.throttle(function(event){
	console.log('scroll' + event.originalEvent.deltaY);
	if(event.originalEvent.deltaY < 0){
		forward_animation();
	
	}
	else if(event.originalEvent.deltaY > 0){
		backward_animation();
	}
},2000)
)
$('#bt').on('click',_.throttle(function(){
	console.log('clicked');
	forward_animation();
	},2000,{trailing:false}));
	

$('#bt2').on('click',_.throttle(function(){
	console.log('clicked');
	backward_animation();
	},2000,{trailing:false}));	
/*
To set swipe event
*/
})