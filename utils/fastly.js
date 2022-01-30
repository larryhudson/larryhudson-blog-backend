import fetch from "node-fetch"

export function purgeUrl(url) {
    if (!process.env.FASTLY_API_KEY) {
        console.log('FASTLY_API_KEY not set, cannot purge')
        return
    }

    const purgeRequestUrl = `${process.env.FASTLY_DOMAIN}${url}`

    return fetch(
        purgeRequestUrl,
        {
            method: 'PURGE',
            headers: {
                'Fastly-Key': process.env.FASTLY_API_KEY,
                'Host': process.env.FASTLY_HOSTNAME,
                'Accept': 'application/json',
            }
        }
    )
}