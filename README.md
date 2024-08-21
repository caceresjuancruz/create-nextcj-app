<h1>Nextcj</h1>

Introducing the ultimate Next.js essential starter template for successful projects.

## Features

- Next.js 14 (App Router)
- Typescript
- TailwindCSS
- Shadcn UI components
- Validations with Zod
- Zustand
- TanStack React Query
- Internationalization with i18next
- Support for multiple middlewares
- Testing with Jest & Cypress
- Clean project structure

## Getting Started

Open a terminal and run
```bash
npx create-nextcj-app
```

Once the process is finished, go to the project folder and run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

## Project Structure
This project follows a clean and organized structure to help you scale and maintain your codebase effectively.

Folders purpose:
- actions: server actions, server utilities, types and database related
- lib: client utilities
- providers: client providers
- types: client types, interfaces, etc.
- __tests__: Jest tests
- cypress: Cypress tests

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.

## Internationalization

<p>use useTranslation() for Client Components</p>
<p>use serverSideTranslation() for Server Components</p>

## Icons

https://geist-ui.dev/en-us/components/icons

## Contributing

Contributions to the project are welcome. Feel free to fork the repository, make your changes, and submit a pull request. You can also open issues to suggest improvements or report bugs.

## License

This project is licensed under the MIT License.
