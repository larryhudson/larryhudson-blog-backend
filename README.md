## Blog backend with Keystone

This project is a headless CMS powered by [Keystone](https://keystonejs.com/).

To get it running locally:

1. clone this repo locally
2. `cd` into the directory and run `npm install`
3. create a new Postgres database (I like using [TablePlus](https://tableplus.com/) for managing local DBs)
4. copy `.env.sample` to `.env` and:
    - adjust the DB user and DB name to match what you created above
    - set the `SESSION_SECRET` to a new random string
5. run `npm run dev`
6. i will finish these instructions when I know what I'm doing

See the [Keystone docs](https://keystonejs.com/docs) for more info.