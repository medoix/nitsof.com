# NITSOF Website

This is the official website for NITSOF, built with [Next.js](https://nextjs.org) and deployed to [GitHub Pages](https://pages.github.com/).

## Getting Started

To get started with development, you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nitsof/nitsof.com.git
    cd nitsof.com
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Contributing

We welcome contributions to improve the NITSOF website. Please follow these steps to contribute:

1.  **Fork the repository** on GitHub.

2.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b my-awesome-feature
    ```

3.  **Make your changes** and commit them. When you commit, a pre-commit hook will automatically run `next lint` to ensure your code adheres to the project's style guidelines. Please make sure your commit passes the linting checks.

4.  **Push your changes** to your forked repository:
    ```bash
    git push origin my-awesome-feature
    ```

5.  **Create a pull request** from your forked repository to the main NITSOF repository.

## Testing

Before submitting a pull request, please ensure that your changes do not introduce any new issues.

### Linting

This project uses ESLint to enforce code quality. To run the linter manually, use the following command:

```bash
npm run lint
```

Please fix any errors or warnings before submitting your pull request. The pre-commit hook will also run this check for you.

### Automated Tests

Currently, there are no automated tests set up for this project. However, we encourage you to manually test your changes to ensure that everything is working as expected.

## Deployment

This project is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment is handled by a GitHub Actions workflow defined in `.github/workflows/nextjs.yml`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
