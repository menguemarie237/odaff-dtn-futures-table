export default {
	id : {
		type : 'string',
	},
	width : {
		type : 'number',
		default : 100,
	},
	widthUnits : {
		type : 'string',
		default : '%',
	},
	apiKey : {
		type : 'string',
	},
	symbol : {
		type : 'string',
		default : '@S`##',
	},
	visibleFields : {
		type : 'array',
		default : [
			'LAST',
			'CHANGE',
			'HIGH',
			'LOW',
			'SETTLE_DATE',
			'SETTLE_PRICE',
		],
	},
	groupBy : {
		type : 'boolean',
		default : true,
	},
	priceFormat : {
		type : 'string',
		default : 'TICK',
	},


	containerMarginTop : {
		type : 'number',
		default : 32,
	},
	containerMarginBottom : {
		type : 'number',
		default : 32,
	},
	containerHPadding : {
		type : 'number',
		default : 0,
	},
	containerVPadding : {
		type : 'number',
		default : 0,
	},
	containerBackground : {
		type : 'string',
		default : 'transparent',
	},


};
