const express = require ( "express" );

const serverHtmlResponse = express() ;

//Use back-ticks to write multi-line strings
serverHtmlResponse.get( "/html", function (req, res, next) {
    res.send(` 
    <html>
        <body>
            <h1>This is a heading</h1>
            <div style="background-color: coral; height: 300px; width: 400px;">
                <p>This is a paragraph</p>
            </div>
        </body>
    </html>   
`)
})

serverHtmlResponse.listen(68);
