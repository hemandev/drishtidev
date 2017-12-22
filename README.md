# drishtidev

transition.js usage:

to animate a sequence of frames from path /sequences/solutions-01/
where images are named as solutions-01_00.png to solutions-01_35.png

set the following global variables as follows...

path = 'sequences/solutions-01'

prefix = 'solutions-01_'

extension = 'png'

index_val = 0

no_of_frames = 35

var throttled = _.throttle(next_frame,2000,{trailing:false});

a sample event call :

$('body').on('wheel',function(){$("#img_frame").show();throttled();});
