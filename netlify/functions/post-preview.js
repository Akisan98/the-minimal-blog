const contentful = require('contentful')

exports.handler = async function (event) {
    const { slug } = JSON.parse(event.body);

    const client = contentful.createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.CONTENT_PREVIEW_API,
        host: "preview.contentful.com"
    });
        
    var res = await client.getEntry(slug); // asynchronous, returns promise

    return {
        statusCode: 200,
        body: JSON.stringify(res)
    }
}
