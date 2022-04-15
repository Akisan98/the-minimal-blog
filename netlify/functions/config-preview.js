const contentful = require('contentful')

exports.handler = async function() {
    const client = contentful.createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.CONTENT_PREVIEW_API,
        host: "preview.contentful.com"
    });
        
    return await client.getEntries({ content_type: 'blogConfiguration' })
        .then((response) => {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    title: response.items[0]?.fields?.title,
                    heroSubtext: response.items[0]?.fields?.heroSubtext,
                    pageName: response.items[0]?.fields?.pageName,
                    hero: response.items[0]?.fields?.hero?.fields,
                    navbarTitle: response.items[0]?.fields?.navbarTitle,
                    navbarIcon: response.items[0]?.fields?.navbarIcon?.fields,
                })
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
