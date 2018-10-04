$(document).on('click', '.openModal', function () {
    let target = $(this).attr('data-target');
    $(target).addClass('active');
    $('body').addClass('overflow-hidden');
});
$(document).on('click', '.closeModal', function () {
    let target =$(this).closest('.modals');
    $(target).removeClass('active');
    $('body').removeClass('overflow-hidden');
});
$(document).on('click', '.openCollapse', function () {
    $(this).toggleClass('active');
    $(this).parent().children('.collapse').toggleClass('active');
});
$(document).on('click', '.openHamburger', function () {
    let target = $(this).attr("data-target");
    $(this).toggleClass('active');
    $(target).toggleClass("active");
});

$(document).on("change", ".uploadImage", function() {
    let target = $(this);
    let input = this;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $(target).attr("src", e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
});

$(document).on("change", ".uploadImageMultiple", function() {
    let target = $(this);
    var files = event.target.files; //FileList object
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (!file.type.match('image'))
        continue;
        var picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
            var picFile = event.target;
            $(target).after("<div class='view many images'><img src='" + picFile.result + "'" + "title='" + picFile.name + "'/><div class='deleteImage'>Delete</div></div>");
            $('.deleteImage').click(function () {
                $(this).parent().remove();
            });
        });
        picReader.readAsDataURL(file);
    }
});