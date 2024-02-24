jQuery(function(){

    var minimized_elements = $('p');
    var counter = 1;
    minimized_elements.each(function(){    
     if(counter==1){
         $(this).addClass("first");
        var t = $(this).text();        
            if(t.length < 100) return;
            
            $(this).html(
                t.slice(0,100)+'<span>... </span><a href="#" class="more">Show</a>'+
                '<span style="display:none;">'+ t.slice(100,t.length)+' <a href="#" class="less">Hide</a></span>'
            );
     } else{
         $(this).hide();
     }
        counter++;
    }); 
    
    $('a.more', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();
        $('p').show();        
    });
    
    $('a.less', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();  
        $('p').not('.first').hide();
    });

});