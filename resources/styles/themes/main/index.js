/*eslint-env node*/
const variables = {
    // colors
    red: '#cb4e30',
    'blue-extra-light': '#eaf5fc',
    'blue-100': '#278ed9',
    'blue-200': '#0575bd',

    'grey-100': '#f3f3f3',
    'grey-200': '#edeff0',
    'grey-300': '#d2dbe2',
    'grey-400': '#dfe4e8',
    'grey-500': '#d3d5d6',
    'grey-600': '#b9bcbd',
    'grey-700': '#aab5be',
    'grey-800': '#70787F',
    'grey-900': '#838c92',

    'text-color': '#384650',
    'error-color': 'var(--red)',

    // font
    'base-font-size': '12px',
    font: "normal var(--base-font-size)/1.4 Arial, 'OpenSans', sans-serif",

    // form editor
    'editor-height': '20px',
    'editor-textarea-height': 'auto',
    'editor-line-height': '20px',
    'editor-textarea-line-height': '18px',
    'editor-font-size': 'var(--base-font-size)',
    'editor-text-color': 'var(--text-color)',
    'editor-empty-text-color': 'var(--grey-500)',
    'editor-focused-text-color': 'var(--text-color)',

    // input
    'input-padding': '0 20px 0 0',
    'input-height': 'inherit',
    'input-line-height': 'inherit',
    'input-hover-color': 'var(--grey-600)',

    // textarea
    'textarea-padding': '0 0 2px',
    'textarea-line-height': 'inherit',
    'textarea-min-height': '26px',

    // custom control
    'custom-control-spacer-y': '0',

    // checkbox
    'checkbox-size': '16px',
    'checkbox-radius': '2px',
    'checkbox-border-color': 'var(--grey-900)',
    'checkbox-intermediate-color': 'var(--blue-100)',
    'checkbox-intermediate-size': '8px',

    // radio
    'radio-size': '12px',
    'radio-right-margin': '5px',
    'radio-checked-color': 'var(--blue-200)',
    'radio-inner-size': '6px',
    'radio-checked-disabled-color': 'var(--grey-800)',

    // svg-icons
    'svg-icon-right': '0',
    'svg-icon-top': '0',
    'svg-icon-width': '16px',
    'svg-icon-height': '16px',
    'svg-icon-transform': 'none',

    // grid
    'grid-checkbox-size': '14px',
    'grid-header-font-size': 'var(--base-font-size)',
    'grid-header-color': 'var(--grey-900)',
    'grid-header-bg': 'transparent',
    'grid-header-border-color': 'var(--grey-400)',
    'grid-header-height': '20px',
    'grid-header-padding': '0 0 0 2px',
    'grid-header-border': 'inset -1px -1px 0 0 var(--grid-header-border-color), inset 0 1px 0 0 var(--grid-header-border-color)',
    'grid-header-border-first': 'inset -1px -1px 0 0 var(--grid-header-border-color), inset 1px 1px 0 0 var(--grid-header-border-color)',
    'grid-header-border-last': 'var(--grid-header-border)',
    'grid-header-selection-bg': 'var(--grey-100)',

    'grid-cell-bg': 'var(--white)',
    'grid-cell-selection-bg': 'var(--grid-header-selection-bg)',
    'grid-cell-index-width': '53px',
    'grid-cell-index-padding-x': '10px',
    'grid-cell-border': 'inset -1px -1px 0 0 var(--grid-header-border-color)',
    'grid-cell-border-first': 'inset -1px -1px 0 0 var(--grid-header-border-color), inset 1px 0 0 0 var(--grid-header-border-color)',
    'grid-cell-height': '25px',
    'grid-cell-padding': '0 2px',
    'grid-selection-color': 'var(--grey-900)',
    'grid-dots-width': '50px',
    'grid-dots-padding': '0 25px 0 2px',
    'grid-dots-color': 'var(--grey-600)',
    'grid-row-selected-color': 'var(--blue-extra-light)',
    'grid-row-hover-color': 'var(--grey-100)',
    'grid-sort-icon-size': '11px',
    'grid-sort-icon-offset-y': '2px',
    'grid-sort-icon':
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDQ4NDJBRDQzQ0MxMUU0OTlENjlCNTY0NjYxODgwNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDQ4NDJBRTQzQ0MxMUU0OTlENjlCNTY0NjYxODgwNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0NDg0MkFCNDNDQzExRTQ5OUQ2OUI1NjQ2NjE4ODA3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0NDg0MkFDNDNDQzExRTQ5OUQ2OUI1NjQ2NjE4ODA3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4m7sIQAAAKtJREFUeNqMkbENwkAMRe8o6KAlFbAAe4QMwAzZAJggrJARQAI6yB4sEEQTajqa8L7kk05RQHzpyTr72c354+nsLDPYQAYJNHCBHdwlDExM4QY5TGFoNbd+GuQ57GHk+qP+QZ7kLYw7gu9ZWEteuv+SSZ78uBi/E8nPqNFGgrd3SCP52rnWdmpIJbmA15eFEM0LyTWsehZiUfM6fEoFCyjhAW+rpfU1dx8BBgDWbSIkm9JfYQAAAABJRU5ErkJggg==)'
};

module.exports.variables = variables;

// postcss apply добавляет правила по очереди в начало (prepend), что бы не переопределить свойства которые присутствуют изначально, в связи с этим приходится писать свойства в обратном порядке если нам нужно сначала сбросить свойство, а потом добавить его частично(https://github.com/pascalduez/postcss-apply/issues/43)

module.exports.apply = {
    'input-theme': {
        'border-bottom': `1px solid ${variables['grey-200']}`,
        border: '0'
    },
    'input-disabled-theme': {
        'border-bottom-color': 'transparent',
        background: 'none'
    },
    'textarea-theme': {
        'border-bottom': `1px solid ${variables['grey-200']}`,
        border: '0'
    },
    'custom-cotrol-disabled-theme': {
        filter: 'alpha(opacity=60)',
        opacity: '.6',
        cursor: 'auto'
    },
    'check-button-disabled-theme': {},
    'radio-disabled-theme': {}
};
