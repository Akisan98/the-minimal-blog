const contentful = require('contentful')

exports.handler = async function() {
    const client = contentful.createClient({
        space: process.env.SPACE_ID,
        // environment: '<environment_id>', // defaults to 'master' if not set
        accessToken: process.env.CONTENT_DELIVERY_API,
    });
        
    // var res = await client.getEntry(process.env.ENTRY_ID); // asynchronous, returns promise
    var res = await client.getEntries()
            .then((response) => {
                return response.items
            })
            .catch(console.error) 

    return {
        statusCode: 200,
        body: JSON.stringify(res)
    }
}



