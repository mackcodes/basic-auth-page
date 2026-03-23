# Login Auth (Express + EJS + MongoDB)

A simple authentication project built with Express, EJS templates, MongoDB (Mongoose), bcrypt password hashing, JWT token creation, and Tailwind CSS (via PostCSS).

## Features

- User sign-up with hashed passwords
- User sign-in with password verification
- JWT token stored in cookie
- Logout by clearing auth cookie
- Server-rendered auth pages (`sign-up` and `sign-in`)

## Tech Stack

- Node.js
- Express
- EJS
- MongoDB + Mongoose
- bcrypt
- jsonwebtoken
- Tailwind CSS + PostCSS

## Project Structure

```
.
├── app.js
├── models/
│   └── user.js
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       ├── input.css
│       └── global.css
├── views/
│   ├── sign-in.ejs
│   └── sign-up.ejs
├── .env.example
└── postcss.config.mjs
```

## Clone And Run

### 1) Clone the repository

```bash
git clone git@github.com:mackcodes/basic-auth-page.git
cd login-auth
```

### 2) Install dependencies

```bash
npm install
```

### 3) Create your environment file

Copy `.env.example` and create `.env`:

```bash
cp .env.example .env
```

Then update `.env` values for your machine.

Required variables:

- `MONGO_URI`: Your MongoDB connection string
- `JWT_SECRET`: Strong secret used for signing tokens
- `PORT`: Optional app port (default in current code is `3000`)

Example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/login-auth
JWT_SECRET=replace-with-a-strong-random-secret
PORT=3000
```

### 4) Start the app

Run the Node server in one terminal:

```bash
node app.js
```

For auto-restart during development (optional):

```bash
npx nodemon app.js
```

### 5) (Optional) Run Tailwind/PostCSS watcher

In a second terminal:

```bash
npm run dev
```

This watches `public/stylesheets/input.css` and rebuilds `public/stylesheets/global.css`.

### 6) Open in browser

Visit:

```
http://localhost:3000
```

## NPM Scripts

- `npm run dev` - Run PostCSS in watch mode for styles.

## Notes For Anyone Cloning

- Do not commit `.env`; use `.env.example` as the template.
- Ensure MongoDB is running (local or hosted) before signing up/in.
- If styles are missing, start `npm run dev` in another terminal.

## Troubleshooting

- **Mongo connection error**: Check `MONGO_URI` and confirm MongoDB is running.
- **JWT issues**: Ensure `JWT_SECRET` is set in `.env`.
- **Styles not updating**: Make sure `npm run dev` is running without errors.

## License

ISC
