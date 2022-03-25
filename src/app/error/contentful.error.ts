export class ContentfulError {
    'BadRequest': {
        errorCode: 400,
        userMessage: "The request was malformed or missing a required parameter."
    };
    'InvalidQuery': {
        errorCode: 400,
        userMessage: "The request contained invalid or unknown query parameters."
    };
    'AccessTokenInvalid': {
        errorCode: 401,
        userMessage: "The authorization token was invalid."
    };
    'AccessDenied': {
        errorCode: 403,
        userMessage: "The user tried to access a resource they do not have access to. This could include a missing role."
    };
    'NotFound': {
        errorCode: 404,
        userMessage: "The requested resource or endpoint could not be found."
    };
    'VersionMismatch': {
        errorCode: 409,
        userMessage: "This error occurs when you're trying to update an existing asset, entry or content type, and you didn't specify the current version of the object or specified an outdated version."
    };
    'ValidationFailed': {
        errorCode: 422,
        userMessage: "The request payload was valid JSON, but something was wrong with the data. The error details should provide more specific information about the error."
    };
    'UnknownField': {
        errorCode: 422,
        userMessage: "The triggered query references an unknown field."
    };
    'InvalidEntry': {
        errorCode: 422,
        userMessage: "The entered value is invalid."
    };
    'RateLimitExceeded': {
        errorCode: 429,
        userMessage: "The user sent too many requests in a given timeframe. See API Rate limits for details."
    };
    'ServerError': {
        errorCode: 500,
        userMessage: "Something went wrong on the Contentful servers."
    };
    'Hibernated': {
        errorCode: 502,
        userMessage: 'The space has not been accessed for a long time and has been "hibernated" in a saved state. This error should resolve on its own in a few moments, once the space has been successfully awakened.'
    };
}

