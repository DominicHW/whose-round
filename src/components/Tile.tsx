import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const styles = StyleSheet.create({
    tile: {
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 7,
        width:'90%'
    }
});

const Tile = ({children}: {children:any}) => {  
    const colorScheme = useColorScheme();

    const themedStyles = {
        backgroundColor: colorScheme === 'light' ? Colors.white : Colors.mediumGrey,
        color: Colors[colorScheme].text
    }

    return <View style={[ styles.tile, themedStyles ]}>
        {children}
    </View>
}

export default Tile;