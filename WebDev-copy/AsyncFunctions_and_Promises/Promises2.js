

function downloadPromise() {
    return new Promise(function (resolve, reject) {
        console.log("Starting to download your file");
        setTimeout(function () {
            console.log("Download is complete")
            resolve();
        }, 3000)
    })
}

/*downloadPromise().then(function () {
    console.log("After download");
})*/

//If we want the result later on [DEFERRED RESOLVE]  -- this is the adv over async functions

let downloadFile = downloadPromise();

setTimeout(function () {
    downloadFile.then(function () {
        console.log("After download")
    })
}, 5000)

