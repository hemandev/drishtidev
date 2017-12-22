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



function next_frame(path,prefix,extension,no_of_frames)
{
	console.log('current index: ' + index_val.toString())
	if(index_val == Math.floor(no_of_frames /2)){
		//to handle the necessary changes
		//changes occur at the middle of the animation
		$('#cover').hide();
		$('#details').show();
	}
	
	if(index_val == no_of_frames){
		return;
	}
	
	else{
		index_val++;
		$("#img_frame").attr("src",generate_filename(path,prefix,index_val,extension));
	}
	setTimeout(function(){
	next_frame(path,prefix,extension,no_of_frames)}
	,50)
		
}
//document.addEventListener('wheel',function(){next_frame()});
//$("button").on('click',function(){alert('sample')})
//$('body').on('wheel',function(){setTimeout(next_frame,1000);})
//$('#test').on('click',function(){setTimeout(next_frame,500)});
	
/*
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // scroll up
		setTimeout(next_frame,700);
		
    }
    else {
        // scroll down
		setTimeout(next_frame,700);
    }
});	
*/

/*$('body').on('wheel', throttle(function (event) {
  next_frame();
}, 2000));
*/
/*
previous transition method
path = 'sequences/solutions-01'
prefix = 'solutions-01_'
extension = 'png'
index_val = 0
no_of_frames = 35
var throttled = _.throttle(next_frame,2000,{trailing:false});
$('body').on('wheel',function(){$("#img_frame").show();throttled();});
$('#up').on('click',function(){$("#img_frame").show();next_frame();});
$('#down').on('click',function(){$("#img_frame").show();next_frame();});
*/
function transition(path,prefix,extension,no_of_frames)
{
	var throttled =  _.throttle(next_frame,2000,{trailing:false})
		//next_frame(path,prefix,extension,no_of_frames,index_val)
	throttled(path,prefix,extension,no_of_frames,index_val)
}
index_val = 0
$('body').on('wheel',function(){
	index_val=0
	transition('sequences/solutions-01','solutions-01_','png',35,0)
})
/*
swipe event handler
var manager = new Hammer.Manager(document.getElementById('img_frame'));
var Swipe= new Hammer.Swipe();
manager.add(Swipe);
manager.on('swipe',function(){next_frame()});
*/
/*
$('body').on('touchstart',function(e){
	var touchobj = e.changedTouches[0]
	dist = 0
	startX = touchobj.pageX)

/*--------------------------------------------------------------------*/
/*
path = 'sequences/solutions-02'
prefix = 'solutions-02_'
extension = 'png'
no_of_frames = 29
var throttled = _.throttle(next_frame,2000,{trailing:false});
$('body').on('wheel',throttled);

/*--------------------------------------------------------------------*/