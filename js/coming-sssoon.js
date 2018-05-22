
$(document).ready(function(){
   $('#filterControl .badge').click(function(){
        oldColor = $('.cover').attr('data-color');
        newColor = $(this).attr('data-color');
        $('.cover').removeClass(oldColor).addClass(newColor).attr('data-color',newColor);
        $('#filterControl .badge').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
   });
    
});













