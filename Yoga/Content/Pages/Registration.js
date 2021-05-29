var saveRegistration = function () {
    var message = "";

    $formData = new FormData();
    //var id = $("#txtid").val();
    var name = $("#txtname").val();
    var photo = document.getElementById('fuphoto');;
    var fatherhubandname = $("#txtfatherhubandname").val();
    var dateofbirth = $("#dateofbirth").val();
    var age = $("#txtage").val();
    var education = $("#txteducation").val();
    var schoolnameifstudying = $("#txtschoolnameifstudying ").val();
    var weight = $("#txtweight").val();
    var height = $("#txtheight").val();
    var occupation = $("#txtoccupation").val();
    var mobilenumber = $("#txtmobilenumber").val();
    var healthissueifanypleasespecify = $("#txthealthissueifanypleasespecify").val();
    var address = $("#txtaddress").val();
    var doyouknowaboutyogaifyespleasespecify = $("#txtdoyouknowaboutyogaifyespleasespecify").val();




    if (photo.files.length > 0) {
        for (var i = 0; i < photo.files.length; i++) {
            $formData.append('file-' + i,photo.files[i]);
        }
    }

    /*$formData.append('Id', id)*/;
    $formData.append('Name', name);
    $formData.append('Photo', photo);
    $formData.append('Fatherhubandname', fatherhubandname);
    $formData.append('Dateofbirth', dateofbirth);
    $formData.append('Age', age);
    $formData.append('Education', education);
    $formData.append('Schoolnameifstudying ', schoolnameifstudying);
    $formData.append('Weight', weight);
    $formData.append('Height', height);
    $formData.append('Occupation', occupation);
    $formData.append('Mobilenumber', mobilenumber);
    $formData.append('Healthissueifanypleasespecify', healthissueifanypleasespecify);
    $formData.append('Address', address);
    $formData.append('doyouknowaboutyogaifyespleasespecify', doyouknowaboutyogaifyespleasespecify);
    $.ajax({
        url: "/SaveRegistration",
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