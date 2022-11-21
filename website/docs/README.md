---
lang: en-US
title: Developer documentation
description: How to use the documentation site
---

# Overview

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Tech Stack

- [Vitepress](https://vitepress.vuejs.org/)

## Getting started

### ⚠️ Prerequisites

This project uses `Yarn` as package manager.

```sh
npm install --global yarn
```

If you already have a conda environment on your machine, you can install the dependencies with:

```sh
conda install -c conda-forge yarn nodejs
```

### Run locally

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

### Build locally

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
