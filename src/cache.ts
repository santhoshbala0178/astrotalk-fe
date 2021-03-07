import { InMemoryCache, makeVar, Reference } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                astrologers: {
                    keyArgs: ["type","sortBy","searchName"],
                    merge(existing, incoming) {
                        let astrologers: Reference[] = [];
                        if (existing && existing.astrologers) {
                            astrologers = astrologers.concat(existing.astrologers);
                        }
                        if (incoming && incoming.astrologers) {
                            astrologers = astrologers.concat(incoming.astrologers);
                        }

                        return {
                            ...incoming,
                            astrologers
                        }
                    },
                },
    }
}
    }
});

export const sortByVar = makeVar<string>('NO_SORT');

export const searchNameVar = makeVar<string>('');

