---
lang: en-US
title: Developer documentation
description: How to use the documentation site
---

# Getting started

## ⚠️ Prerequisites

This project uses [`Yarn`](https://yarnpkg.com/) as package manager.

```sh
npm install --global yarn
```

If you already have a `Anaconda` environment on your machine, you can install the dependencies with:

```sh
conda install -c conda-forge yarn nodejs
```

## Run locally

Clone the project

```sh
https://github.com/AI-READI/dev.aireadi.org.git
```

Go to the project directory

```sh
cd dev.aireadi.org
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

Use this step to build a local production version of the site. Use `docs:serve` to preview the local build.

```sh
yarn docs:build
yarn docs:serve
```

## Tech Stack

- [Vitepress](https://vitepress.vuejs.org/)
- [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview)
