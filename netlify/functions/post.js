const contentful = require('contentful')

exports.handler = async function (event) {
    const { slug } = JSON.parse(event.body);

    const client = contentful.createClient({
        space: process.env.SPACE_ID,
        // environment: '<environment_id>', // defaults to 'master' if not set
        accessToken: process.env.CONTENT_DELIVERY_API,
    });
        
    // var res = await client.getEntry(slug); // asynchronous, returns promise

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(res)
    // }

    return client.getEntry(slug);
}



