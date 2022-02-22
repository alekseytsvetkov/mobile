import fetch from 'isomorphic-unfetch';
import {createUploadLink} from 'apollo-upload-client';
import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';
import {ApolloClient, InMemoryCache, from} from '@apollo/client';

import {loadToken} from '_app/utils/storage';
import {PLATFORM} from '_app/constants';

const cache = new InMemoryCache();

const httpLink = createUploadLink({
    uri:
        process.env.NODE_ENV === 'dev'
            ? PLATFORM.IS_ANDROID
                ? 'http://10.0.2.2:3000/graphql'
                : 'http://localhost:3000/graphql'
            : 'https://api.skeetry.com/graphql',
    credentials: 'include',
    fetch,
});

const authLink = setContext(async (_, {headers}) => {
    const token = await loadToken();

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    };
});

const errorLink = onError(({graphQLErrors, networkError, operation, forward}) => {
    if (graphQLErrors)
        graphQLErrors.map(({message, locations, path}) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache,
});
