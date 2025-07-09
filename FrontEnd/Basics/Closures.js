// In this file i am going to learn about closures and scopes...

    function x(){
        for(var a=1;a<=6;a++){
            var i=1;
            setTimeout(function(){
                console.log(i);
                i++;  
            },a*1000)
           
        }
    }
   x();