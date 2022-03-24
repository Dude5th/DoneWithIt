import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import colours from '../../config/colours';
import defaultStyles from '../../config/styles';
import AppText from '../AppText';
import Screen from '../Screen';
import PickerItem from './PickerItem';

function AppPicker({
	icon,
	items,
	numberOfColumns,
	onSelectItem,
	PickerItemConponent = PickerItem,
	placeholder,
	selectedItem,
	width = '100%'
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colours.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={[styles.text, styles.placeholder]}>
							{placeholder}
						</AppText>
					)}
					<MaterialCommunityIcons
						name='chevron-down'
						size={20}
						color={defaultStyles.colours.medium}
						style={styles.icon}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType='slide'>
				<Screen>
					<Button title='Close' onPress={() => setModalVisible(false)} />
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemConponent
								item={item}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colours.light,
		borderRadius: 15,
		flexDirection: 'row',
		padding: 5,
		marginVertical: 10
	},
	icon: {
		margin: 10
	},
	placeholder: {
		color: defaultStyles.colours.medium
	},
	text: {
		flex: 1,
		marginTop: 7,
		marginBottom: 7
	}
});

export default AppPicker;
