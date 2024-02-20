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
  create(context) {
    return {
      JSXOpeningElement(node) {
        const elementName = node.name.name;
        const hasTestIDAttribute = node.attributes.some(
          (attr) =>
            attr.type === "JSXAttribute" &&
            attr.name.name === "testID"
        );
        if(!hasTestIDAttribute) {
          context.report({
            node,
            message: `React Native component <${elementName}> should have a testID attribute.`,
          });
        }
      },
    };
  },
};