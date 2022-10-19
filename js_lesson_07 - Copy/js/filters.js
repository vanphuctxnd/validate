$(function(){
    var $listItem = $('li');
    $listItem.filter('.hot:last').removeClass('hot');
    $('li:not(.hot)').addClass('cool');
    $listItem.has('em').addClass('complete');
    $listItem.each(function(){
        var $this = $(this);
        if ($this.is('.hot')){
            $this.prepend('Priority item: ');
        }
    });

    $('li:contains("honey")').append('(local');
});