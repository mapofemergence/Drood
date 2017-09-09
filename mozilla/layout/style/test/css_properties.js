var gLonghandProperties = [
	{ name: "-moz-appearance", prop: "MozAppearance"},
	{ name: "-moz-border-radius-topleft", prop: "MozBorderRadiusTopleft"},
	{ name: "-moz-border-radius-topright", prop: "MozBorderRadiusTopright"},
	{ name: "-moz-border-radius-bottomleft", prop: "MozBorderRadiusBottomleft"},
	{ name: "-moz-border-radius-bottomright", prop: "MozBorderRadiusBottomright"},
	{ name: "-moz-outline-radius-topleft", prop: "MozOutlineRadiusTopleft"},
	{ name: "-moz-outline-radius-topright", prop: "MozOutlineRadiusTopright"},
	{ name: "-moz-outline-radius-bottomleft", prop: "MozOutlineRadiusBottomleft"},
	{ name: "-moz-outline-radius-bottomright", prop: "MozOutlineRadiusBottomright"},
	{ name: "azimuth", prop: "azimuth"},
	{ name: "background-attachment", prop: "backgroundAttachment"},
	{ name: "-moz-background-clip", prop: "MozBackgroundClip"},
	{ name: "background-color", prop: "backgroundColor"},
	{ name: "background-image", prop: "backgroundImage"},
	{ name: "-moz-background-inline-policy", prop: "MozBackgroundInlinePolicy"},
	{ name: "-moz-background-origin", prop: "MozBackgroundOrigin"},
	{ name: "background-position", prop: "backgroundPosition"},
	{ name: "background-repeat", prop: "backgroundRepeat"},
	{ name: "-moz-binding", prop: "MozBinding"},
	{ name: "border-bottom-color", prop: "borderBottomColor"},
	{ name: "-moz-border-bottom-colors", prop: "MozBorderBottomColors"},
	{ name: "border-bottom-style", prop: "borderBottomStyle"},
	{ name: "border-bottom-width", prop: "borderBottomWidth"},
	{ name: "border-collapse", prop: "borderCollapse"},
	{ name: "-moz-border-left-colors", prop: "MozBorderLeftColors"},
	{ name: "-moz-border-right-colors", prop: "MozBorderRightColors"},
	{ name: "border-spacing", prop: "borderSpacing"},
	{ name: "border-top-color", prop: "borderTopColor"},
	{ name: "-moz-border-top-colors", prop: "MozBorderTopColors"},
	{ name: "border-top-style", prop: "borderTopStyle"},
	{ name: "border-top-width", prop: "borderTopWidth"},
	{ name: "bottom", prop: "bottom"},
	{ name: "-moz-box-sizing", prop: "MozBoxSizing"},
	{ name: "caption-side", prop: "captionSide"},
	{ name: "clear", prop: "clear"},
	{ name: "clip", prop: "clip"},
	{ name: "color", prop: "color"},
	{ name: "-moz-column-count", prop: "MozColumnCount"},
	{ name: "-moz-column-width", prop: "MozColumnWidth"},
	{ name: "-moz-column-gap", prop: "MozColumnGap"},
	{ name: "content", prop: "content"},
	{ name: "counter-increment", prop: "counterIncrement"},
	{ name: "counter-reset", prop: "counterReset"},
	{ name: "cue-after", prop: "cueAfter"},
	{ name: "cue-before", prop: "cueBefore"},
	{ name: "cursor", prop: "cursor"},
	{ name: "direction", prop: "direction"},
	{ name: "display", prop: "display"},
	{ name: "elevation", prop: "elevation"},
	{ name: "empty-cells", prop: "emptyCells"},
	{ name: "float", prop: "cssFloat"},
	{ name: "-moz-float-edge", prop: "MozFloatEdge"},
	{ name: "font-family", prop: "fontFamily"},
	{ name: "font-size", prop: "fontSize"},
	{ name: "font-size-adjust", prop: "fontSizeAdjust"},
	{ name: "font-stretch", prop: "fontStretch"},
	{ name: "font-style", prop: "fontStyle"},
	{ name: "font-variant", prop: "fontVariant"},
	{ name: "font-weight", prop: "fontWeight"},
	{ name: "-moz-force-broken-image-icon", prop: "MozForceBrokenImageIcon"},
	{ name: "height", prop: "height"},
	{ name: "-moz-image-region", prop: "MozImageRegion"},
	{ name: "ime-mode", prop: "imeMode"},
	{ name: "left", prop: "left"},
	{ name: "letter-spacing", prop: "letterSpacing"},
	{ name: "line-height", prop: "lineHeight"},
	{ name: "list-style-image", prop: "listStyleImage"},
	{ name: "list-style-position", prop: "listStylePosition"},
	{ name: "list-style-type", prop: "listStyleType"},
	{ name: "margin-bottom", prop: "marginBottom"},
	{ name: "margin-top", prop: "marginTop"},
	{ name: "marker-offset", prop: "markerOffset"},
	{ name: "marks", prop: "marks"},
	{ name: "max-height", prop: "maxHeight"},
	{ name: "max-width", prop: "maxWidth"},
	{ name: "min-height", prop: "minHeight"},
	{ name: "min-width", prop: "minWidth"},
	{ name: "opacity", prop: "opacity"},
	{ name: "orphans", prop: "orphans"},
	{ name: "outline-color", prop: "outlineColor"},
	{ name: "outline-style", prop: "outlineStyle"},
	{ name: "outline-width", prop: "outlineWidth"},
	{ name: "outline-offset", prop: "outlineOffset"},
	{ name: "overflow-x", prop: "overflowX"},
	{ name: "overflow-y", prop: "overflowY"},
	{ name: "padding-bottom", prop: "paddingBottom"},
	{ name: "padding-top", prop: "paddingTop"},
	{ name: "page", prop: "page"},
	{ name: "page-break-after", prop: "pageBreakAfter"},
	{ name: "page-break-before", prop: "pageBreakBefore"},
	{ name: "page-break-inside", prop: "pageBreakInside"},
	{ name: "pause-after", prop: "pauseAfter"},
	{ name: "pause-before", prop: "pauseBefore"},
	{ name: "pitch", prop: "pitch"},
	{ name: "pitch-range", prop: "pitchRange"},
	{ name: "position", prop: "position"},
	{ name: "quotes", prop: "quotes"},
	{ name: "richness", prop: "richness"},
	{ name: "right", prop: "right"},
	{ name: "size", prop: "size"},
	{ name: "speak", prop: "speak"},
	{ name: "speak-header", prop: "speakHeader"},
	{ name: "speak-numeral", prop: "speakNumeral"},
	{ name: "speak-punctuation", prop: "speakPunctuation"},
	{ name: "speech-rate", prop: "speechRate"},
	{ name: "stress", prop: "stress"},
	{ name: "table-layout", prop: "tableLayout"},
	{ name: "text-align", prop: "textAlign"},
	{ name: "text-decoration", prop: "textDecoration"},
	{ name: "text-indent", prop: "textIndent"},
	{ name: "text-shadow", prop: "textShadow"},
	{ name: "text-transform", prop: "textTransform"},
	{ name: "top", prop: "top"},
	{ name: "unicode-bidi", prop: "unicodeBidi"},
	{ name: "-moz-user-focus", prop: "MozUserFocus"},
	{ name: "-moz-user-input", prop: "MozUserInput"},
	{ name: "-moz-user-modify", prop: "MozUserModify"},
	{ name: "-moz-user-select", prop: "MozUserSelect"},
	{ name: "vertical-align", prop: "verticalAlign"},
	{ name: "visibility", prop: "visibility"},
	{ name: "voice-family", prop: "voiceFamily"},
	{ name: "volume", prop: "volume"},
	{ name: "white-space", prop: "whiteSpace"},
	{ name: "widows", prop: "widows"},
	{ name: "width", prop: "width"},
	{ name: "word-spacing", prop: "wordSpacing"},
	{ name: "z-index", prop: "zIndex"},
	{ name: "-moz-box-align", prop: "MozBoxAlign"},
	{ name: "-moz-box-direction", prop: "MozBoxDirection"},
	{ name: "-moz-box-flex", prop: "MozBoxFlex"},
	{ name: "-moz-box-orient", prop: "MozBoxOrient"},
	{ name: "-moz-box-pack", prop: "MozBoxPack"},
	{ name: "-moz-box-ordinal-group", prop: "MozBoxOrdinalGroup"},
	{ name: "clip-path", prop: null},
	{ name: "clip-rule", prop: null},
	{ name: "color-interpolation", prop: null},
	{ name: "color-interpolation-filters", prop: null},
	{ name: "dominant-baseline", prop: null},
	{ name: "fill", prop: null},
	{ name: "fill-opacity", prop: null},
	{ name: "fill-rule", prop: null},
	{ name: "filter", prop: null},
	{ name: "flood-color", prop: null},
	{ name: "flood-opacity", prop: null},
	{ name: "lighting-color", prop: null},
	{ name: "marker-end", prop: null},
	{ name: "marker-mid", prop: null},
	{ name: "marker-start", prop: null},
	{ name: "mask", prop: null},
	{ name: "pointer-events", prop: null},
	{ name: "shape-rendering", prop: null},
	{ name: "stop-color", prop: null},
	{ name: "stop-opacity", prop: null},
	{ name: "stroke", prop: null},
	{ name: "stroke-dasharray", prop: null},
	{ name: "stroke-dashoffset", prop: null},
	{ name: "stroke-linecap", prop: null},
	{ name: "stroke-linejoin", prop: null},
	{ name: "stroke-miterlimit", prop: null},
	{ name: "stroke-opacity", prop: null},
	{ name: "stroke-width", prop: null},
	{ name: "text-anchor", prop: null},
	{ name: "text-rendering", prop: null}
];

var gShorthandProperties = [
	{ name: "-moz-border-radius", prop: "MozBorderRadius"},
	{ name: "-moz-outline-radius", prop: "MozOutlineRadius"},
	{ name: "background", prop: "background"},
	{ name: "border", prop: "border"},
	{ name: "border-bottom", prop: "borderBottom"},
	{ name: "border-color", prop: "borderColor"},
	{ name: "-moz-border-end", prop: "MozBorderEnd"},
	{ name: "-moz-border-end-color", prop: "MozBorderEndColor"},
	{ name: "-moz-border-end-style", prop: "MozBorderEndStyle"},
	{ name: "-moz-border-end-width", prop: "MozBorderEndWidth"},
	{ name: "border-left", prop: "borderLeft"},
	{ name: "border-left-color", prop: "borderLeftColor"},
	{ name: "border-left-style", prop: "borderLeftStyle"},
	{ name: "border-left-width", prop: "borderLeftWidth"},
	{ name: "border-right", prop: "borderRight"},
	{ name: "border-right-color", prop: "borderRightColor"},
	{ name: "border-right-style", prop: "borderRightStyle"},
	{ name: "border-right-width", prop: "borderRightWidth"},
	{ name: "-moz-border-start", prop: "MozBorderStart"},
	{ name: "-moz-border-start-color", prop: "MozBorderStartColor"},
	{ name: "-moz-border-start-style", prop: "MozBorderStartStyle"},
	{ name: "-moz-border-start-width", prop: "MozBorderStartWidth"},
	{ name: "border-style", prop: "borderStyle"},
	{ name: "border-top", prop: "borderTop"},
	{ name: "border-width", prop: "borderWidth"},
	{ name: "cue", prop: "cue"},
	{ name: "font", prop: "font"},
	{ name: "list-style", prop: "listStyle"},
	{ name: "margin", prop: "margin"},
	{ name: "-moz-margin-end", prop: "MozMarginEnd"},
	{ name: "margin-left", prop: "marginLeft"},
	{ name: "margin-right", prop: "marginRight"},
	{ name: "-moz-margin-start", prop: "MozMarginStart"},
	{ name: "outline", prop: "outline"},
	{ name: "overflow", prop: "overflow"},
	{ name: "padding", prop: "padding"},
	{ name: "-moz-padding-end", prop: "MozPaddingEnd"},
	{ name: "padding-left", prop: "paddingLeft"},
	{ name: "padding-right", prop: "paddingRight"},
	{ name: "-moz-padding-start", prop: "MozPaddingStart"},
	{ name: "pause", prop: "pause"},
	{ name: "marker", prop: null}
];

var gShorthandPropertiesLikeLonghand = [
	{ name: "-moz-margin-end", prop: "MozMarginEnd"},
	{ name: "margin-left", prop: "marginLeft"},
	{ name: "margin-right", prop: "marginRight"},
	{ name: "-moz-margin-start", prop: "MozMarginStart"},
	{ name: "overflow", prop: "overflow"},
	{ name: "-moz-padding-end", prop: "MozPaddingEnd"},
	{ name: "padding-left", prop: "paddingLeft"},
	{ name: "padding-right", prop: "paddingRight"},
	{ name: "-moz-padding-start", prop: "MozPaddingStart"},
];