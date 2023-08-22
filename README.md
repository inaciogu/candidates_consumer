# Service Example

![test workflow](https://github.com/Coaktion/consumer_example/actions/workflows/test.yml/badge.svg)
![stale workflow](https://github.com/Coaktion/consumer_example/actions/workflows/stale.yml/badge.svg)

<details>
  <summary>
    <strong>Table of Contents</strong>
    <small><i>(🔎 Click to expand/collapse)</i></small>
  </summary>

- [Description](##description)
- [Squad responsible](#squad-responsible)
- [Install](#install)
- [Release](#release)
- [Documentation](#documentation)
  - [Subscriptions](#subscriptions)
  - [Topics](#topics)
  - [APIs](#apis)
- [Links](#links)
</details>

## Description

A short description about this service

## Squad responsible

The squad responsible for this project is **aktienow**.

## Install

Clone this repository and run:

```bash
npm install
```

Copy and configure .env:

```bash
cp local.env .env
```

Check if tests are passing

```bash
npm test
```

Configure husky:

```bash
npm run pre-commit:prepare
```

## Release

To release a new version of this service, follow the steps below:

1. Create a new branch with the name `release/vX.X.X` (where `X.X.X` is the version number)
2. Update the version number in the `package.json` file
3. Create a pull request to the `main` branch
4. After the pull request is approved, merge it into the `main` branch
5. Create a new tag with the version number (e.g. `v1.0.0`)
6. Push the tag to the repository

## Documentation

Check [complete documentation](https://https://coaktion.drozbase.cx/) about this service.

### Subscriptions

Queues that this service consumes:

- `queue-1`
- `queue-2`

### Topics

Topics that this service publishes:

- `topic-1`
- `topic-2`

### APIs

Locals:

- `endpoint-1`
- `endpoint-2`

Externals:

- `tapioca-x`
- `tapioca-y`

## Links

- [Sentry](https://sentry.io/organizations/olist/issues/?project=XXXXX)

_Based on template: 1.0_
