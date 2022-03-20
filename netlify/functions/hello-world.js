exports.handler = async function() {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!',
            // test: process.env.ENTRY_ID
        })
    }
}