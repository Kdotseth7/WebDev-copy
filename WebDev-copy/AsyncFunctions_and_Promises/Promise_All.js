

//Promise All is used to run 3 promises in parallel




let downloadFile = function (url) {
    return new Promise(function (resolve,reject) {
        if (!url.startsWith("http")) {
            reject(new Error("Url does not start with http"));
        }
        else {
            console.log("Downloading File : " + url);
            setTimeout(function () {
                resolve(url);
            }, 3000)
        }
    })
}

let resizeFile = function (fileName) {
    return new Promise(function (resolve,reject) {
        if (!fileName.endsWith(".png"))
        {
            reject(new Error("File is not png"));
        }
        else
        {
            console.log("Resizing File : " + fileName);
            setTimeout(function () {
                let a = fileName.split("/").pop();
                let resizedFile = "C:\\Downloads\\WebDev\\" + "-resized-" + a;
                resolve(resizedFile);
            }, 3000)
        }

    })
}

let uploadFile = function(fileName){
    return new Promise( function(resolve, reject){
        let siteName = "https://cb.lk/uploads/" + fileName.split("\\").pop();
        console.log("Uploading the file to : " + siteName);
        setTimeout(function () {
            resolve(siteName);
        }, 3000)
    })
}


Promise.all([downloadFile("https://javascript.info/image.png"),
    downloadFile("https://google.com/photo.png"),
    downloadFile("https://yahoo.com/img.png")]).then(function (downloadResult) {
        return Promise.all(downloadResult.map(resizeFile))
}).then(function (resizeResult) {
    return Promise.all(resizeResult.map(uploadFile))
}).then(function (uploadResult) {
    console.log(uploadResult)
}).catch(function (err) {
    console.error(err)
})

