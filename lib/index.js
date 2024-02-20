const defaultComponents = [
    "ActivityIndicator",
    "Button",
    "DatePickerIOS",
    "DrawerLayoutAndroid",
    "FlatList",
    "Image",
    "ImageBackground",
    "KeyboardAvoidingView",
    "ListView",
    "Modal",
    "Picker",
    "PickerIOS",
    "ProgressBarAndroid",
    "ProgressViewIOS",
    "RefreshControl",
    "ScrollView",
    "SectionList",
    "SegmentedControlIOS",
    "Slider",
    "SnapshotViewIOS",
    "StatusBar",
    "Switch",
    "TabBarIOS",
    "Text",
    "TextInput",
    "TouchableHighlight",
    "TouchableOpacity",
    "TouchableWithoutFeedback",
    "ViewPagerAndroid",
    "VirtualizedList",
    "WebView",
];

module.exports = {
    rules: {
        "testid-missing": {
            create(context) {
                const options = context.options[0] || {};
                const { disableDefaultComponents = [], enableComponents = [] } =
                    options;

                return {
                    JSXOpeningElement(node) {
                        const { name, attributes } = node;
                        if (!name || !name.name) {
                            return; // Return early if name or name.name is undefined
                        }
                        const componentName = name.name;

                        const filteredDefaultComponents =
                            defaultComponents.filter(
                                (component) =>
                                    !disableDefaultComponents.includes(
                                        component
                                    )
                            );
                        const mergedAllowedComponents = [
                            ...filteredDefaultComponents,
                            ...enableComponents,
                        ];
                        if (mergedAllowedComponents.includes(componentName)) {
                            const hasTestIDAttribute = attributes.some(
                                (attribute) =>
                                    attribute.name &&
                                    attribute.name.name === "testID" // Check if attribute.name is defined before accessing its name property
                            );

                            if (!hasTestIDAttribute) {
                                context.report({
                                    node: name,
                                    message: `React Native component <${componentName}> should have a testID attribute.`,
                                });
                            }
                        }
                    },
                };
            },
        },
    },
};
