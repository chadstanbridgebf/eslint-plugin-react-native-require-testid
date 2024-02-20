# eslint-plugin-react-native-require-testid

This ESLint plugin is used for ensuring the testID attribute is on all relevant components in React Native.

## Installation

```shell
yarn add eslint-plugin-react-native-require-testid --dev
```

## Usage
Configure ESLint to use the plugin. Add it to the ESLint configuration:

```javascript
{
  "plugins": ["react-native-require-testid"],
  "rules": {
    "react-native-require-testid/testid-missing": "error"
  }
}
```

## Conventional Commits

This project uses a specification called **Conventional Commits**, please **ensure** this specification is followed when commiting code to this project.

Guide: https://www.conventionalcommits.org/en/v1.0.0/

## Pull Requests, Approvals & Releases

###### Creating the develop release pull request

Pull Requests made to this project are required in order to merge to **develop** or **main**

When submitting a Pull Request, at least one approval is required before merging.

When constructing a release, ensure that a release branch is created based off of the contents of develop, the only changes contained within this branch should be the version numbers in **package.json** and android's **build.gradle**.

The Pull Request should be named as **[develop] release vX.Y.Z**

###### Creating the main release pull request

Once this Pull Request has been created, you will need to generate a new Pull Request based off **main** comparing the **develop** release branch you have just created, this should ensure that all changes that have been made to **develop** since the last release are contained within this update.

The Pull Request should be named as **[main] release vX.Y.Z**

###### Creating the release tag

Once this has been done and both Pull Requests have been merged, a release tag should be generated, named as **vX.Y.Z**