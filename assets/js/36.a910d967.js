(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{472:function(t,e,a){"use strict";a.r(e);var s=a(35),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mayim-sql-sqlite-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mayim-sql-sqlite-interface"}},[t._v("#")]),t._v(" mayim.sql.sqlite.interface")]),t._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#mayim-sql-sqlite-interface"}},[t._v("mayim.sql.sqlite.interface")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#sqlitepool"}},[t._v("SQLitePool")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#__init__"}},[t._v("__init__")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#close"}},[t._v("close")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#connection"}},[t._v("connection")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#open"}},[t._v("open")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#scheme"}},[t._v("scheme")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"sqlitepool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlitepool"}},[t._v("#")]),t._v(" "),a("code",[t._v("SQLitePool")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SQLitePool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BaseInterface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/ahopkins/mayim/tree/main/src/mayim/sql/sqlite/interface.py#L17",target:"_blank",rel:"noopener noreferrer"}},[t._v("[view_source]"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Interface for connecting to a SQLite database")]),t._v(" "),a("p",[a("strong",[t._v("Parents")]),t._v(": "),a("RouterLink",{attrs:{to:"/api/mayim.base.interface.html#BaseInterface"}},[t._v("BaseInterface")])],1),t._v(" "),a("h3",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[t._v("#")]),t._v(" "),a("code",[t._v("__init__")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/ahopkins/mayim/tree/main/src/mayim/sql/sqlite/interface.py#L22",target:"_blank",rel:"noopener noreferrer"}},[t._v("[view_source]"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close"}},[t._v("#")]),t._v(" "),a("code",[t._v("close")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/ahopkins/mayim/tree/main/src/mayim/sql/sqlite/interface.py#L38",target:"_blank",rel:"noopener noreferrer"}},[t._v("[view_source]"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Close connections to the pool")]),t._v(" "),a("h3",{attrs:{id:"connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[t._v("#")]),t._v(" "),a("code",[t._v("connection")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@asynccontextmanager")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/ahopkins/mayim/tree/main/src/mayim/sql/sqlite/interface.py#L43",target:"_blank",rel:"noopener noreferrer"}},[t._v("[view_source]"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Obtain a connection to the database")]),t._v(" "),a("p",[a("strong",[t._v("Arguments")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("timeout")]),t._v(" "),a("em",[t._v("float, optional")]),t._v(" - "),a("em",[t._v("Not implemented")]),t._v(". Defaults to "),a("code",[t._v("None")]),t._v(".")])]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("AsyncIterator[Connection]")]),t._v(" - Iterator that will yield a connection")])]),t._v(" "),a("p",[a("strong",[t._v("Yields")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Iterator[AsyncIterator[Connection]]")]),t._v(" - A database connection")])]),t._v(" "),a("h3",{attrs:{id:"open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open"}},[t._v("#")]),t._v(" "),a("code",[t._v("open")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/ahopkins/mayim/tree/main/src/mayim/sql/sqlite/interface.py#L33",target:"_blank",rel:"noopener noreferrer"}},[t._v("[view_source]"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Open connections to the pool")]),t._v(" "),a("h3",{attrs:{id:"scheme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheme"}},[t._v("#")]),t._v(" "),a("code",[t._v("scheme")])]),t._v(" "),a("p",[a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v('""')])])])}),[],!1,null,null,null);e.default=n.exports}}]);