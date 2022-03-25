const contentful = require('contentful')

exports.handler = async function() {
    const client = contentful.createClient({
        space: process.env.SPACE_ID,
        // environment: '<environment_id>', // defaults to 'master' if not set
        accessToken: process.env.CONTENT_DELIVERY_API,
    });
        
    return await client.getEntries({ content_type: 'blogPost' })
            .then((response) => {
                console.log(response);

                return {
                    statusCode: 200,
                    body: JSON.stringify(response.items)
                }
            })
            .catch((error) =>
            {
                var body = JSON.parse(error.message);

                return {
                    statusCode: 404,
                    body: JSON.stringify({
                        code: body.status,
                        status: body.statusText,
                        userMessage: body.message
                    }),
                };
            });
}



