// const contentful = require('contentful')

// exports.handler = async function() {
//     const client = contentful.createClient({
//         space: process.env.SPACE_ID,
//         // environment: '<environment_id>', // defaults to 'master' if not set
//         accessToken: process.env.CONTENT_DELIVERY_API,
//     });
        
//     var res = await client.getEntry({ content_type: 'blogConfiguration' })
//             .then((response) => {
//                 return response.items
//             })
//             .catch(console.error) 

//     return {
//         statusCode: 200,
//         body: JSON.stringify(res)
//     }
// }



