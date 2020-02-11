import * as contentful from 'contentful';

export const client = contentful.createClient({

    accessToken: process.env.REACT_APP_ACCESS_TOKEN,

    space: process.env.REACT_APP_SPACE_ID
});
