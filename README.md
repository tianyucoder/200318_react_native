## 文件结构简介：
	1.metro.config.js：
				facebook公司出的一个模块打包器
	2.babel.config.js
				做js和jsx的语法转换
	3.app.json
				定义应用名
	4..watchmanconfig
				用于检测整个RN项目文件变化的，用于给实施编译做支持。
	5..prettierrc.js
				用于格式化代码+js语法检查
	6...gitattributes
				用于告诉git如何去“理解”一个文件

				若配置：*.pbxproj -text
				含义：告诉git将所有以pbxproj为后缀的文件，都看成是非文本，不去做文本格式化(空格、换行符的处理)

				若配置：*.pbxproj text
				含义：告诉git将所有以pbxproj为后缀的文件，都看成是非文本，不去做文本格式化(空格、换行符的处理)
	7...flowconfig
				用于支持打包时配置
	8..eslintrc.js
				用于做js语法检查的
	9..buckconfig
				用于支持项目打包时，下载依赖包。axios
