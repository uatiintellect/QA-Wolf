export declare const DEFAULT_ATTRIBUTE_LIST = "data-cy,data-e2e,data-qa,/^data-test.*/,/^qa-.*/";
export declare type AttributeValuePair = {
    name: string;
    value: string;
};
declare type GetAttribueValue = {
    attribute: string;
    element: HTMLElement;
};
declare type GetRegexAttribute = {
    element: HTMLElement;
    regexString: string;
};
export declare const deserializeRegex: (regexString: string) => RegExp | null;
export declare const getRegexAttribute: ({ element, regexString, }: GetRegexAttribute) => AttributeValuePair | null;
export declare const getAttribute: ({ attribute, element, }: GetAttribueValue) => AttributeValuePair | null;
export declare const hasAttribute: (element: HTMLElement, attributes: string[]) => boolean;
export {};
