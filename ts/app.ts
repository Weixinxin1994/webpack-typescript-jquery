/// <reference path="../typings/jquery/jquery.d.ts" />

// in load.js is the jquery using script loader from webpack
import "./load";
$(()=>{
  console.log('yehaa');
  $('body').html('<h1>This content has been load with jQuery</h1>')
});
