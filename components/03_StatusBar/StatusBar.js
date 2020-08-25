import React, { Component } from 'react'
import {StatusBar,Text,SafeAreaView} from 'react-native'

export default class App extends Component {

	componentDidMount(){
		//使用静态方法给状态栏设置样式
		// StatusBar.setBackgroundColor('green')
		// StatusBar.setBarStyle('dark-content')
		// StatusBar.setHidden(true,'fade')
	}

	render() {
		return (
			<>
				{/* 使用标签属性给状态栏设置样式 */}
				<StatusBar
					backgroundColor="orange" //背景色
					barStyle="dark-content" //状态栏文字颜色
					// hidden //状态栏是否隐藏
					// animated //动画
					// translucent //“沉浸式”状态栏
				/>
				<SafeAreaView>
					<Text>123</Text>
				</SafeAreaView>
			</>
		)
	}
}
