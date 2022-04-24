import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    tile: {
        backgroundColor: Colors.offWhite,
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 7,
        width:'90%'
    }
});

const Tile = ({children}: {children:any}) => {  
    return <View style={styles.tile}>
        {children}
    </View>
}

export default Tile;