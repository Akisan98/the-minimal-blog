const contentful = require('contentful')

exports.handler = async function (event) {
    const { slug } = JSON.parse(event.body);

    const client = contentful.createClient({
        space: process.env.SPACE_ID,
        // environment: '<environment_id>', // defaults to 'master' if not set
        accessToken: process.env.CONTENT_DELIVERY_API,
    });
        
    return await client.getEntry(slug)
        .then((response) => {
            return {
                statusCode: 200,
                body: JSON.stringify(response)
            }
        })
        .catch((error) => {
            var body = JSON.parse(error.message);
            return {
                statusCode: body.status,
                body: JSON.stringify({
                    code: body.status,
                    status: body.statusText,
                    userMessage: body.message
                }),
            };
        }); // asynchronous, returns promise

   

}



