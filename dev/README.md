# :toolbox: Getting Started

## :bangbang: Prerequisites

This project uses Yarn as package manager

```bash
npm install --global yarn
```

Additionally, a version of Node.js that is >= 14 is required for compatibility with Docusarus.
If your Node.js version is < 14 you can download the latest Node.js version from [the Node.js download page.](https://nodejs.org/en/download/)

## :running: Run Locally

Clone the project

```bash
git clone https://github.com/ai-readi/ai-readi-docs.git
```

Go to the project directory

```bash
cd Docs
```

Install dependencies

```bash
yarn install
```

Start the server

```bash
yarn dev
```

## :stopwatch: Versioning

You can use the version script to create a new documentation version based on the latest content in the `docs` directory. That specific set of documentation will then be preserved and accessible even as the documentation in the `docs` directory changes moving forward.

Ideally, you should create a new branch and update the relevant pages.

Only do these steps after all changes to the documentation for the specific version have been completed:

1. Update the docs changelog.
2. Make sure the current docs version (the `docs` directory) is ready to be frozen.
3. Update the `version` key in package.json for this repository.

```bash
yarn run docusaurus docs:version 5.3.0
```

This will freeze the current version of the documentation. The files under the current `docs` directory will be considered to be `Upcoming 🚧` version.

## :building_construction: Build locally

Use this step to build a local production version of the site. Use `serve` to preview the local build.

```bash
yarn build
yarn serve
```

## :arrow_forward: Submitting a PR

If you are an external contributor, please make a fork of the repository and submit a PR from your fork. If you are a member of the FAIR-BioRS Working Group, you can submit a PR from a branch in this repository.

1. Create a new branch from the `main` branch.
2. Make your changes. You can test your changes locally by running `yarn dev`. Make sure to check the console for any errors.
3. Test your changes on a local build by running `yarn build` and `yarn serve`. If this works, you can submit yout changes.
4. Push your changes to the remote branch.
5. Create a PR to merge your branch into `main`.

You can tag `@bvhpatel` or `@megasanjay` in the PR on GitHub for a review. If your changes are approved, they will be merged into `main` and deployed to the live site.

## :triangular_flag_on_post: Deployment

You will not need to do anything to the hosted site. Continuous Delivery has been setup with Vercel. All you need to do is push your commit and wait for it to deploy.
