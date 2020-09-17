import React, { useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
	const [value, setValue] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

	const moveBall = () =>
		Animated.timing(value, {
			toValue: { x: 100, y: 200 },
			duration: 1000,
			useNativeDriver: false,
		}).start();

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
			<TouchableOpacity onPress={moveBall}>
				<Text>Move ~ </Text>
			</TouchableOpacity>
		</View>
	);
};

export default App;
