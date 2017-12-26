var css = [
	{
		type: 'display',
		css2: ['none', 'inline', 'block', 'list-item', 'inline-block', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-row', 'table-row-group', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group'],
		css3: ['run-in', 'box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid'],
		prefix: ['-webkit-box', '-webkit-inline-box']
	},
	{
		type: 'position',
		css2: ['static', 'relative', 'absolute', 'fixed'],
		css3: ['center', 'page', 'sticky'],
		prefix: ['-webkit-sticky']
	}
];

var cssNext = {
	flex: [
		{ type: 'flex', value: '1 1 0%' },
		{ type: 'flex-grow', value: '1' },
		{ type: 'flex-shrink', value: '1' },
		{ type: 'flex-basis', value: '0%' },
		{ type: 'flex-flow', value: 'row nowrap' },
		{ type: 'flex-direction', value: 'row' },
		{ type: 'flex-wrap', value: 'nowrap' },
		{ type: 'align-content', value: 'flex-start' },
		{ type: 'align-items', value: 'flex-start' },
		{ type: 'align-self', value: 'flex-start' },
		{ type: 'justify-content', value: 'flex-start' },
		{ type: 'order', value: '1' }
	],
	'-webkit-box': [
		{ type: '-webkit-box-orient', value: 'horizontal' },
		{ type: '-webkit-box-pack', value: 'start' },
		{ type: '-webkit-box-align', value: 'start' },
		{ type: '-webkit-box-flex', value: '1' },
		{ type: '-webkit-box-flex-group', value: '1' },
		{ type: '-webkit-box-ordinal-group', value: '1' },
		{ type: '-webkit-box-direction', value: 'normal' },
		{ type: '-webkit-box-lines', value: 'single' },
	]
}