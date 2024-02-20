module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Ensure all React Native components have a testID attribute.",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  rules: {
    "testid-missing": {
      create(context) {
        return {
          JSXOpeningElement(node) {
            const { name, attributes } = node;
            if (!name || !name.name) {
              return; // Return early if name or name.name is undefined
            }
            const componentName = name.name;

            const hasTestIDAttribute = attributes.some(
              (attribute) =>
                attribute.name && attribute.name.name === "testID" // Check if attribute.name is defined before accessing its name property
            );

            if (!hasTestIDAttribute) {
              context.report({
                node: name,
                message: `React Native component <${componentName}> should have a testID attribute.`,
              });
            }
          },
        };
      },
    },
  },
};