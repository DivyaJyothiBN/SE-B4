$('#usn').change(() => {
    var data = { usn : $('#usn').val(), pass: $('#pass').val()};
    var url = `${location.protocol}//${location.host}/routes/index1`;
    // Function which displays whether the USN is avaialable for use or not
    displayMessage = (res) => {
        $("#usn_response").show();
        if(res.usn) {
            $("#usn_response").html("<span class='not-exists'>* USN Already in use.</span>");       
        }
        else {
            $("#usn_response").html("<span class='exists'>Available.</span>");
        }
    }
    // Ajax request to check the existence of USN
    $.ajax({
        url:url,
        data:data,
        success:displayMessage
    });
});