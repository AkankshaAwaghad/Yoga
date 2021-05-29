
$(document).ready(function () {

    //alert("Category added Sucessfully");
    DisplayYogasanDisplay();

});

var saveYogasan = function () {
    var message = "";

    $formData = new FormData();

    var asanname = $("#txtname").val();
    var description = $("#txtdescription").val();
    var steps = $("#txtsteps").val();
    var photo1 = document.getElementById('fuphoto1');;
    var photo2 = document.getElementById('fuphoto2');;
    var benefits = $("#txtbenefits").val();
    var precaution = $("#txtprecaution").val();
    var createdBy = $("#txtcreatedBy").val();
    var category = $("#txtcategory").val();
    var type = $("#txttype").val();



    if (photo1.files.length > 0) {
        for (var i = 0; i < photo1.files.length; i++) {
            $formData.append('file-' + i, photo1.files[i]);
        }
    }

    if (photo2.files.length > 0) {
        for (var i = 1; i < photo2.files.length; i++) {
            $formData.append('file-' + i, photo2.files[i]);
        }
    }

    $formData.append('AsanName', asanname);
    $formData.append('Description', description);
    $formData.append('Steps', steps);
    $formData.append('Photo1', photo1);
    $formData.append('Photo2', photo2);
    $formData.append('Benefits', benefits);
    $formData.append('Precaution', precaution);
    $formData.append('CreatedBy', createdBy);
    $formData.append('Category', category);
    $formData.append('Type', type);
    $.ajax({
        url: "/Yogasan/SaveYogasan",
        type: 'post',
        data: $formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
            alert("submitted");
        }

    })
};

var DisplayYogasanDisplay = function () {
    $.ajax({
        url: "/Yogasan/DisplayYogasanDisplay",
        method: 'post',
        //data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        datatype: "json",
        async: false,
        success: function (response) {
            console.log(response)
            var html = "";
            $("#tblAsan").empty();
            $.each(response.model, function (index, elementValue) {
                html += "<div class='col-lg-4 col-md-6'><div class='classes__item classes__item__page'>";
                html += "<div class='classes__item__pic set-bg' style='../Admin/Content/imgs/" + elementValue.Photo1 + "'><span>Beginer</span> </div>";
                html += "<div class='classes__item__text'><ul> <li><span class='icon_calendar'></span> Mon, Wed, Fri</li> <li><span class='icon_clock_alt'></span> 18:30 - 19:30</li></ul>";                
                html += "<h4><a href='#'> " + elementValue.AsanName + "</a></h4><h6>" + elementValue.CreatedBy + " <span>- Yoga Teacher</span></h6>";
                html += "<p>" + elementValue.Description + "</p>";
                html += "<a href='#' class='class-btn'>Details</a>";
                html += "</div> </div>";
                html += "</div></div>";




                //html += "<tr><td>" + elementValue.AsanId + "</td><td> " + elementValue.AsanName + "</td><td>" + elementValue.Description + "</td><td>" + elementValue.Steps + "</td><td><img src='../Admin/Content/imgs/" + elementValue.Photo1 + "'/></td><td><img src='../Admin/Content/imgs/" + elementValue.Photo2 + "'/></td><td>" + elementValue.Benefits + "</td><td>" + elementValue.Precaution + "</td><td>" + elementValue.CreatedBy + "</td><td>" + elementValue.Category + "</td><td>" + elementValue.Type  + "'/></td></tr>";

            });
            $("#tblAsan").append(html);
        }
    });
}
