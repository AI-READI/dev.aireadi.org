---
lang: en-US
title: Developer documentation
description: How to use the documentation site
---

# Getting started

## ⚠️ Prerequisites

This project uses `Yarn` as package manager.

```sh
npm install --global yarn
```

If you already have a conda environment on your machine, you can install the dependencies with:

```sh
conda install -c conda-forge yarn nodejs
```

## Run locally

Clone the project

```sh
https://github.com/AI-READI/software-best-practices.git
```

Go to the project directory

```sh
cd software-best-practices
```

Install dependencies

```sh
yarn install
```

Start the server

```sh
yarn dev
```

## Build locally

Use this step to build a local production version of the site. Use `serve` to preview the local build.

```sh
yarn docs:build
```

## Updating the documentation

Whenever a change in build, release, or development instructions occurs update the documentation. To do this follow the below steps:

- Clone the [software-best-practices](https://github.com/AI-READI/software-best-practices) repository from GitHub

```sh
git clone https://github.com/AI-READI/software-best-practices.git
```

- Get the project running locally using the [README](/docs/README.md) instructions
- Create a separate branch based off `main`
- Make your changes to the project and commit them to the local repository
- Create a PR to the main branch with [@bvhpatel](https://github.com/bvhpatel) and/or [@megasanjay](https://github.com/megasanjay) as reviewers
- After approval merge the PR into `main`

## Tech Stack

- [Vitepress](https://vitepress.vuejs.org/)
- [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview)
