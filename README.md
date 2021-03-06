# π Task List (Monorepo)

## π Requirements
1. Node v14+
2. Yarn as package manager
3. MySQL

## π Stack used
1. Backend - (Node.js, Apollo, Graphql, MySQL, Sequelize, JWT)
2. Fontend - (React, Tailwindcss, React-Hook-Form, Apollo Client, Apollo React Hooks)
3. Mono Repo - (Lerna, Eslint, Prettier)

## π¨ Local Development

1. Clone the repository `git clone https://github.com/ronmrcdo/task-list-demo.git`
2. Navigate to the project `cd task-list-demo`
3. Copy the .env.example `cp packages/api/.env.example packages/api/.env`
4. Update the .env at the `nano packages/api/.env` based on your server
```
BCRYPT_ROUND=10
JWT_SECRET=randomkeyofcourse

DEV_DB_CONNECTION=mysql
DEV_DB_HOSTNAME=127.0.0.1
DEV_DB_PORT=3306
DEV_DB_NAME=carelulu_core
DEV_DB_USERNAME=homestead
DEV_DB_PASSWORD=secret
```
5. Install the dependencies by running `yarn install`. This will install the modules of both backend and frontend in the workspace directory.
6. Run the migration to automatically create the tables in your mysql `yarn db:migrate`
7. To serve the application locally, run `yarn start`

### π± Seeding (Optional)

To seed the users table. You need to run
```
yarn db:seed
```

This will create a 2 user with credentials of

```
// User 1
email: john@example.dev
password: secret

// User2
email: juan@example.dev
password: secret
```


### πNotes

To clean node_modules across packages run `npx lerna clean -y` and install the dependecies in a shared root directory `yarn install`.
