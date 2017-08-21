// check off specific todos by clicking

$('ul').on('click', 'li' ,function() {
    $(this).toggleClass('completed');
});

// Click x to delete todo
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Create a new todo
$('input[type="text"]').keypress(function(event){
    if(event.which === 13) {
        var todoText = $(this).val();
        $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
        $(this).val("");
    }
});

//Toggle input
$('.fa-plus').click(function() {
    $('input[type="text"]').fadeToggle();
});