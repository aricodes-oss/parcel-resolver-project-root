# parcel-resolver-project-root

[![Build Status](https://drone.aricodes.net/api/badges/aricodes-oss/parcel-resolver-project-root/status.svg)](https://drone.aricodes.net/aricodes-oss/parcel-resolver-project-root)

Resolve your imports from `'./src'` and not have to use a tilde or other alias.

## Installation

With `npm`:

```
$ npm install --save-dev parcel-resolver-project-root
```

With `yarn`:

```
$ yarn add --dev parcel-resolver-project-root
```

## Usage

In the `.parcelrc` file for your project, add this to the list of resolvers. A blank configuration with nothing but this plugin in it would look like:

```json
{
  "extends": "@parcel/config-default",
  "resolvers": ["parcel-resolver-project-root", "..."]
}
```

Note that the `"..."` entry is literal - that tells Parcel to use the rest of its default resolvers there. Without that, your project likely will not build.
