import { STATIC_PATH } from '../shared/config';

const renderApp = title =>
    `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>${title}</title>
                <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
            </head>
            <body>
                <h1>${title} </h1><small>The js-god</small>
            </body>
        </html>
    `;

export default renderApp;
