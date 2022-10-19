$(function(){
    var $p = $('p');
    var $cloneQuote = $p.clone();
    $cloneQuote.insertAfter('h2');
    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');
});