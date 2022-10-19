$(function(){
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textIput = $('input:text');
    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    });
    $newItemForm.on('submit', function(e){
        e.preventDefault();
        var newText = $textIput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textIput.val('');
    });
});