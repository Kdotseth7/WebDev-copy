
// Download, resize and upload file

//DOWNLOADING FILE
function downloadFile(url, downloadLocation) {
    console.log("Downloading File : " + url);
    //Generate 3s fake delay
    setTimeout(function() {
        let filePath = "C:\\Downloads\\" + url.split("/").pop();
        console.log("File was downloaded to : " + filePath);
        downloadLocation(filePath);
    }, 3000);
}

//RESIZING FILE
function resizeFile(filePath, resized) {
    console.log("Resizing File : " + filePath);
    let resizedPath = filePath.split(".")[0] + "-resized." + filePath.split(".")[1];
    //Generate 3s fake delay
    setTimeout(function() {
        resized(resizedPath);
    }, 3000);
}

//UPLOADING FILE
function uploadFile( filePath, uploaded ) {

    console.log("Uploading File : " + filePath);
    let uploadPath = "https://cb.lk/uploads/" + filePath.split("\\").pop();
    //Generate 3s fake delay
    setTimeout(function() {
        uploaded(uploadPath);
    }, 3000);
}

//Calling downloadFile ()
downloadFile("https://google.com/logo.png",function (dPath){
    console.log("We got the file at : " + dPath);
    console.log("---------------------------------------------------------------");

    //Calling resizeFile() from within downloadFile()
    resizeFile(dPath, function (rPath) {
        console.log("Resized file is at : " + rPath);
        console.log("---------------------------------------------------------------");

        //Calling uploadFile() from within resizeFile()
        uploadFile(rPath, function (uPath) {
            console.log("Uploaded successfully to : " + uPath);
        })
    })
});

