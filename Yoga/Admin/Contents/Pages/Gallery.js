
$(document).ready(function () {

    //alert("Category added Sucessfully");
    DisplayGallerylist();

});
var saveGallery = function () {
    var message = "";

    $formData = new FormData();

    var Title = $("#txttitle").val();
    var image = document.getElementById('fuphoto');;



    if (image.files.length > 0) {
        for (var i = 0; i < image.files.length; i++) {
            $formData.append('file-' + i,image.files[i]);
        }
    }

    $formData.append('Title', Title);
    $formData.append('Image', image);
    $.ajax({
        url: "/Gallery/SaveGallery",
        method: "post",
        data: $formData,
        processData: false,
        contentType: false,
        dataType: "json",
        success: function (response) {
            alert("submitted");
        }

    })
};

var DisplayGallerylist = function () {
    $.ajax({
        url: "/Gallery/DisplayGallerylist",
        method: 'post',
        //data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        datatype: "json",
        async: false,
        success: function (response) {
            //console.log(response)
            var html = "";
            $("#tblGallery tbody").empty();
            $.each(response.model, function (index, elementValue) {

                html += "<tr><td>" + elementValue.Id + "</td><td>" + elementValue.Title + "</td><td><img src='../Admin/Content/imgs/" + elementValue.Image + "'/></td></tr>";

            });
            $("#tblGallery tbody").append(html);
        }
    });
}