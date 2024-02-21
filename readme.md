# eslint-plugin-react-native-require-testid

This ESLint plugin helps ensure that React Native components have the necessary testID attribute, which is crucial for effective testing of React Native applications.

## Installation

```shell
yarn add eslint-plugin-react-native-require-testid --dev
```

## Usage

After installation, you need to configure ESLint to use this rule. Here's an example configuration:

```javascript
{
  "plugins": ["react-native-require-testid"],
  "rules": {
    "react-native-require-testid/testid-missing": ["error", {
      "disableDefaultComponents": [],
      "enableComponents": []
    }]
  }
}
```

In this configuration:

-   `disableDefaultComponents` allows you to specify default components to exclude from the rule check.
-   `enableComponents` allows you to specify additional components to include in the rule check.

###### Rule Logic

-   The rule iterates through JSX opening elements in your code.
-   It filters out default React Native components based on the configuration.
-   It merges the filtered default components with any additional components specified.
-   For each JSX opening element, it checks if the component is allowed and if it has a `testID` attribute.
-   If the component is allowed but lacks a `testID` attribute, a linting error is reported.

###### Example

Consider the following JSX code snippet:

`<MyCustomComponent />`

With the ESLint rule configured, it will raise a linting error if `MyCustomComponent` is included in the allowed components list but does not have a `testID` attribute.

###### Contributing

Contributions to this ESLint rule are welcome! If you encounter issues or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

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
