(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{247:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"core-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Core plugin "),a("Badge",{attrs:{text:"3.0.0"}})],1),t._v(" "),a("LegacyWarning"),t._v(" "),a("p",[t._v("Since "),a("Badge",{attrs:{text:"3.0.0"}}),t._v(" with introduction of "),a("em",[t._v("plugins")]),t._v(", Markwon\n"),a("strong",[t._v("core")]),t._v(" functionality was moved to a dedicated plugin.")],1),t._v(" "),t._m(0),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("List item type")]),t._v(" "),a("p",[t._v("Before "),a("Badge",{attrs:{text:"3.0.0"}}),t._v(" "),a("code",[t._v("Markwon")]),t._v(" had 2 distinct lists (bullet and ordered).\nSince "),a("Badge",{attrs:{text:"3.0.0"}}),t._v(" a single "),a("code",[t._v("SpanFactory")]),t._v(" is used, which internally checks\nfor "),a("code",[t._v("Prop<ListItemType> LIST_ITEM_TYPE")]),t._v(".\nBeware of this if you would like to override only one of the list types. This is\ndone to correspond to "),a("code",[t._v("commonmark-java")]),t._v(" implementation.")],1)]),t._v(" "),a("p",[t._v("More information about props can be found "),a("router-link",{attrs:{to:"/docs/v3/core/render-props.html"}},[t._v("here")])],1),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Soft line break")]),t._v(" "),a("p",[t._v("Since "),a("Badge",{attrs:{text:"3.0.0"}}),t._v(" Markwon core does not give an option to\ninsert a new line when there is a soft line break in markdown. Instead a\ncustom plugin can be used:")],1),t._v(" "),t._m(11)]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Please note that "),a("code",[t._v("CorePlugin")]),t._v(" will implicitly set a "),a("code",[t._v("LinkMovementMethod")]),t._v(" on a TextView\nif one is not present. If you wish to customize a MovementMethod that is used, apply\none manually to a TextView (before applying markdown) or use the "),a("router-link",{attrs:{to:"/docs/v3/core/movement-method-plugin.html"}},[t._v("MovementMethodPlugin")]),t._v("\nwhich accepts a MovementMethod as an argument.")],1)])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[this._v("CorePlugin"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token function"}},[this._v("create")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"node-visitors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-visitors","aria-hidden":"true"}},[this._v("#")]),this._v(" Node visitors")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("CorePlugin")]),this._v(" registers these "),s("code",[this._v("commonmark-java")]),this._v(" node visitors:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("Text")])]),t._v(" "),a("li",[a("code",[t._v("StrongEmphasis")])]),t._v(" "),a("li",[a("code",[t._v("Emphasis")])]),t._v(" "),a("li",[a("code",[t._v("BlockQuote")])]),t._v(" "),a("li",[a("code",[t._v("Code")])]),t._v(" "),a("li",[a("code",[t._v("FencedCodeBlock")])]),t._v(" "),a("li",[a("code",[t._v("IndentedCodeBlock")])]),t._v(" "),a("li",[a("code",[t._v("BulletList")])]),t._v(" "),a("li",[a("code",[t._v("OrderedList")])]),t._v(" "),a("li",[a("code",[t._v("ListItem")])]),t._v(" "),a("li",[a("code",[t._v("ThematicBreak")])]),t._v(" "),a("li",[a("code",[t._v("Heading")])]),t._v(" "),a("li",[a("code",[t._v("SoftLineBreak")])]),t._v(" "),a("li",[a("code",[t._v("HardLineBreak")])]),t._v(" "),a("li",[a("code",[t._v("Paragraph")])]),t._v(" "),a("li",[a("code",[t._v("Link")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"span-factories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#span-factories","aria-hidden":"true"}},[this._v("#")]),this._v(" Span factories")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("CorePlugin")]),this._v(" adds these "),s("code",[this._v("SpanFactory")]),this._v("s:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("StrongEmphasis")])]),t._v(" "),a("li",[a("code",[t._v("Emphasis")])]),t._v(" "),a("li",[a("code",[t._v("BlockQuote")])]),t._v(" "),a("li",[a("code",[t._v("Code")])]),t._v(" "),a("li",[a("code",[t._v("FencedCodeBlock")])]),t._v(" "),a("li",[a("code",[t._v("IndentedCodeBlock")])]),t._v(" "),a("li",[a("code",[t._v("ListItem")])]),t._v(" "),a("li",[a("code",[t._v("Heading")])]),t._v(" "),a("li",[a("code",[t._v("Link")])]),t._v(" "),a("li",[a("code",[t._v("ThematicBreak")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("By default "),a("code",[t._v("CorePlugin")]),t._v(" does not register a "),a("code",[t._v("Paragraph")]),t._v(" "),a("code",[t._v("SpanFactory")]),t._v(" but\nthis can be done in your custom plugin:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configureSpansFactory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonSpansFactory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setFactory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Paragraph"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configuration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n                        "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ForegroundColorSpan")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RED"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("These props are exported by "),s("code",[this._v("CorePlugin")]),this._v(" and can be found in "),s("code",[this._v("CoreProps")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("Prop<ListItemType> LIST_ITEM_TYPE")]),t._v(" (BULLET | ORDERED)")]),t._v(" "),a("li",[a("code",[t._v("Prop<Integer> BULLET_LIST_ITEM_LEVEL")])]),t._v(" "),a("li",[a("code",[t._v("Prop<Integer> ORDERED_LIST_ITEM_NUMBER")])]),t._v(" "),a("li",[a("code",[t._v("Prop<Integer> HEADING_LEVEL")])]),t._v(" "),a("li",[a("code",[t._v("Prop<String> LINK_DESTINATION")])]),t._v(" "),a("li",[a("code",[t._v("Prop<Boolean> PARAGRAPH_IS_IN_TIGHT_LIST")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configureVisitor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonVisitor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SoftLineBreak"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("visitor"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" softLineBreak"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                        visitor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forceNewLine")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="core-plugin.md";s.default=e.exports}}]);