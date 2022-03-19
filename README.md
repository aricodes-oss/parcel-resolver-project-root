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

## Example

After adding that to your parcel config, say you have a project layout like this:

```
my-awesome-project
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── constants.js
    └── index.js
```

You can now do this -

```js
import constants from 'constants';
```

...from anywhere in your project and trust that it will resolve correctly.

## Why?

I really liked being able to do this with NextJS and SWC/babel, and Parcel seemed to be lacking this feature. Looking at their plugin API, implementing it as a plugin seemed trivial - so I did.

I may add configuration options later to support more filetypes or the like, submit a GitHub issue if there's any features you'd like to see in the project!
