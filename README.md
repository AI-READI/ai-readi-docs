<div align="center">
  <img src="static/img/logo.svg" alt="logo" width="200" height="auto" />

  <h1>AI-READI Documentation</h1>

  <p>
    Documentation for the AI-READI project.
  </p>

  <h4>
    <a href="https://docs.aireadi.org">docs.aireadi.org</a>
  </h4>

  <p>
    <a href="https://github.com/ai-readi/ai-readi-docs/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/ai-readi/ai-readi-docs.svg?style=flat-square" alt="contributors" />
    </a>
    <a href="https://github.com/ai-readi/ai-readi-docs/stargazers">
      <img src="https://img.shields.io/github/stars/ai-readi/ai-readi-docs.svg?style=flat-square" alt="stars" />
    </a>
    <a href="https://github.com/ai-readi/ai-readi-docs/issues/">
      <img src="https://img.shields.io/github/issues/ai-readi/ai-readi-docs.svg?style=flat-square" alt="open issues" />
    </a>
    <a href="https://github.com/ai-readi/ai-readi-docs/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/ai-readi/ai-readi-docs.svg?style=flat-square" alt="license" />
    </a>
    <a href="https://fairdataihub.org/fairshare">
      <img src="https://img.shields.io/badge/Curated%20with-FAIRshare-yellow" alt="Curated with FAIRshare" />
    </a>

  </p>
</div>

<br />

## :star2: About

content here

## :toolbox: Getting Started

### :bangbang: Prerequisites

This project uses Yarn as package manager

```bash
npm install --global yarn
```

Additionally, a version of Node.js that is >= 14 is required for compatibility with Docusarus.
If your Node.js version is < 14 you can download the latest Node.js version from [the Node.js download page.](https://nodejs.org/en/download/)

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

- None at the moment

### :running: Run Locally

Clone the project

```bash
git clone https://github.com/AI-READI/ai-readi-docs.git
```

Go to the project directory

```bash
cd ai-readi-docs
```

Install dependencies

```bash
yarn install
```

Start the server

```bash
yarn dev
```

### :stopwatch: Versioning

You can use the version script to create a new documentation version based on the latest content in the `docs` directory. That specific set of documentation will then be preserved and accessible even as the documentation in the `docs` directory changes moving forward.

Ideally, you should create a new branch and update the relevant pages. Then send a PR with [@megasanjay](https://github.com/megasanjay) or [@bvhpatel](https://github.com/bvhpatel) on the review page.

Only do these steps after all changes to the documentation for the specific version have been completed:

1. Make sure the current docs version (the `docs` directory) is ready to be frozen.
2. Update the `version` key in package.json for this repository.

```bash
yarn run docusaurus docs:version 2
```

This will freeze the current version of the documentation. The files under the current `docs` directory will be considered to be `Upcoming 🚧` version.

### :building_construction: Build locally

Use this step to build a local production version of the site. Use `serve` to preview the local build.

```bash
yarn build
yarn serve
```

### :triangular_flag_on_post: Deployment

You will not need to do anything to the hosted site. Continuous Delivery has been setup with Azure Static Web Apps. All you need to do is push your commit and wait for it to deploy.

## :wave: Contributing

<a href="https://github.com/AI-READI/ai-readi-docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AI-READI/ai-readi-docs" alt='repository contributors' />
</a>

Contributions are always welcome!

See [`contributing.md`](https://github.com/AI-READI/ai-readi-docs/blob/main/CONTRIBUTING.md) for ways to get started.

### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/AI-READI/ai-readi-docs/blob/master/CODE_OF_CONDUCT.md)

## :grey_question: FAQ

- Can I make changes to previous versions of the documentation?

  - Yes, you can make changes to previous versions of the documentation. You can do this by creating a new branch and adding your changes directly in the `versioned_docs` directory.

## :warning: License

Distributed under the MIT License. See [`LICENSE`](https://github.com/AI-READI/ai-readi-docs/blob/main/LICENSE) for more information.

## :handshake: Contact

Contact us on Twitter: [@fairdataihub](https://twitter.com/fairdataihub)

Send us an E-mail: [info@fairdataihub.org](mailto:info@fairdataihub.org)

## :gem: Acknowledgements

This project is funded by the NIH under award number 1OT2OD032644. The content is solely the responsibility of the authors and does not necessarily represent the official views of the NIH.

<div align="center">

<a href="https://aireadi.org">
  <img src="https://github.com/AI-READI/AI-READI-logo/raw/main/logo/png/option2.png" height="200" alt='aireadi logo' />
</a>

</div>
