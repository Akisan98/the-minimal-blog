const contentful = require('contentful')

exports.handler = async function() {
    const client = contentful.createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.CONTENT_DELIVERY_API,
    });
        
    return await client.getEntries({ content_type: 'blogPost' })
        .then((response) => {
            return {
                statusCode: 200,
                body: JSON.stringify(response.items)
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
        });
}



