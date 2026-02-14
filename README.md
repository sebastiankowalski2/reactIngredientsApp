# Chef Claude - AI Recipe Generator

A small React app that turns your ingredient list into a suggested recipe using a Hugging Face LLM. Add items, generate a recipe, and render the result as Markdown.

## Features

- Add ingredients through a simple form
- Generate a recipe with an AI model (Hugging Face Inference API)
- Markdown rendering for clean, readable output

## Tech Stack

- React + Vite
- Hugging Face Inference API
- react-markdown

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

Create a `.env` file in the project root and add your Hugging Face token:

```dotenv
VITE_HF_ACCESS_TOKEN=your_hugging_face_access_token
```

Important: this app runs in the browser, so any `VITE_*` variable is bundled into client code. Treat the token as public and use a personal token with minimal permissions.

### 3) Run locally

```bash
npm run dev
```

Open the URL from the terminal (usually http://localhost:5173).

## Scripts

```bash
npm run dev      # start local dev server
npm run build    # build for production
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Notes on Security

This project calls the Hugging Face API directly from the client. That means the access token is visible to anyone who can run the app. If you need a private token, move the API call to a backend or serverless function.

## Project Structure

```
src/
	components/
		Header/
		IngredientsList/
		Mainer/
		Recipe/
	ai.js
	App.jsx
	main.jsx
```

## License

MIT
