import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import colours from '../config/colours';
import LottieView from 'lottie-react-native';

function UploadScreen({ onDone, progress = 0, visible = false }) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						progress={progress}
						color={colours.primary}
						width={200}
					/>
				) : (
					<LottieView
						autoPlay
						loop={false}
						source={require('../assets/animations/loader.json')}
						style={styles.animation}
						onAnimationFinish={onDone}
					/>
				)}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	animation: {
		width: 150
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
});
export default UploadScreen;
