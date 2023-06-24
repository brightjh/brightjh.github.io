(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{309:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git的基础使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git的基础使用"}},[a._v("#")]),a._v(" Git的基础使用")]),a._v(" "),s("blockquote",[s("p",[a._v("Git是一种分布式版本控制系统，用于跟踪文件和项目的变化，并协同多人在同一个代码库上进行开发。")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("初始化一个新的仓库：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" init\n")])])])]),a._v(" "),s("li",[s("p",[a._v("克隆（Clone）一个现有仓库到本地：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("repository_url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("添加文件到暂存区（Staging Area）：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("       // 添加单个文件\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("                 // 添加所有文件\n")])])])]),a._v(" "),s("li",[s("p",[a._v("提交变更到本地仓库：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Commit message"')]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("推送（Push）变更到远程仓库：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("更新本地仓库至最新版本：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n")])])])]),a._v(" "),s("li",[s("p",[a._v("创建新分支：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("切换分支：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("合并分支：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("查看仓库状态：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" status\n")])])])]),a._v(" "),s("li",[s("p",[a._v("查看提交历史：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log\n")])])])]),a._v(" "),s("li",[s("p",[a._v("撤销文件的修改：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -- "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("撤销已暂存的文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset HEAD "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);