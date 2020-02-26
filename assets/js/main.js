$(document).on('click', '.onCopy', function () {
    var element = $(this).parent().parent().children('textarea');
    $(element).removeClass('hidden');
    $(element).select();
    document.execCommand("copy");
    $(element).addClass('hidden');
    var doc = document;
    var text = $(this).parent().parent().children('.area.selected')[0];
    if (doc.body.createTextRange) { // ms
        var range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);

    }
});
