import React from 'react';
// @ts-ignore
import { usePluginData } from '@docusaurus/useGlobalData';
import { BielOptions, DEFAULT_OPTIONS } from '../../conf';
import { camelToKebab } from '../../utils';

export default function SearchBar() {
    // Retrieve plugin options
    const pluginData: BielOptions = usePluginData('docusaurus-biel-plugin') || {};
    const { search = {} as any, customFont, headerTitle, hideExpandButton, project, errorMessage404, errorMessage403, errorMessageDefault, footerText } = {
        ...DEFAULT_OPTIONS,
        ...pluginData,
    };

    const searchProps = {
        ...DEFAULT_OPTIONS.search,
        ...search,
        customFont,
        headerTitle,
        hideExpandButton,
        project,
        errorMessage404,
        errorMessage403,
        errorMessageDefault,
        footerText,
    };

    const buttonText = search.searchButtonText || DEFAULT_OPTIONS.search?.searchButtonText;

    const domAttributes = Object.entries(searchProps)
        .filter(([key, value]) => key !== 'enable' && key !== 'searchButtonText' && value !== undefined)
        .reduce((acc, [key, value]) => {
            acc[camelToKebab(key)] = value;
            return acc;
        }, {} as Record<string, any>);

    // @ts-ignore
    return <biel-search-button {...domAttributes}>{buttonText}</biel-search-button>;
}
