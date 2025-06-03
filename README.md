# NSPanelManager Documentation
[![Check Links](https://github.com/NSPManager/NSPanelManager-docs/actions/workflows/links.yml/badge.svg)](https://github.com/NSPManager/NSPanelManager-docs/actions/workflows/links.yml)

The documentation website [nspanelmanager.com](https://nspanelmanager.com) is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### Deployment

Deployment is automated by `.github/workflows/deploy.yml` to GitHub pages as soon as a PR is merged 
on `main` branch.

