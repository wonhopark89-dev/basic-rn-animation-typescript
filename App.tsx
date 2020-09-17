import React, { useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
	const [value, setValue] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
	const [opacity, setOpacity] = useState(new Animated.Value(0));

	const moveBall = () =>
		Animated.spring(value, {
			toValue: { x: 100, y: 200 },
			// duration: 1000,
			useNativeDriver: false,
		}).start();

	const showBall = () => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 5000,
			useNativeDriver: true,
		}).start();

		setTimeout(() => {
			for (let i = 0; i < 1000000; i++) {
				console.log(i);
			}
		}, 1000);
	};

	return (
		<View>
			<Animated.View style={value.getLayout()}>
				<View
					style={{
						width: 100,
						height: 100,
						borderRadius: 100 / 2,
						backgroundColor: 'orange',
					}}
				/>
			</Animated.View>

			<Animated.View
				style={{
					width: 200,
					height: 200,
					borderRadius: 200 / 2,
					backgroundColor: 'blue',
					opacity: opacity,
				}}
			/>
			<TouchableOpacity onPress={moveBall}>
				<Text>Move ~ </Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={showBall}>
				<Text>Show ~ </Text>
			</TouchableOpacity>
		</View>
	);
};

export default App;
