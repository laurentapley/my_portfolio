// Get a reference to the <path>
 var path = document.querySelector('.st0');

 // Get length of path... ~577px in this case
 var pathLength = path.getTotalLength();

 // Make very long dashes (the length of the path itself)
 path.style.strokeDasharray = pathLength + ' ' + pathLength;

 // Offset the dashes so the it appears hidden entirely
 path.style.strokeDashoffset = pathLength;
 path.getBoundingClientRect();
 window.addEventListener('scroll', function() {
   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
   // Length to offset the dashes
   var drawLength = pathLength * scrollPercentage;

   // Draw in reverse
   path.style.strokeDashoffset = pathLength - drawLength;

   if (scrollPercentage >= 0.99) {
     path.style.strokeDasharray = 'none';
   } else {
     path.style.strokeDasharray = pathLength + ' ' + pathLength;
   }
 });
