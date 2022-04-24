import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { CaretRight } from 'phosphor-react-native';

const styles = StyleSheet.create({
    primary: {
        color: Colors.black,
        fontSize: 17
    },
    secondary:{
        color: Colors.black,
        fontSize: 13
    },
    tertiary:{
        color: Colors.grey,
        fontSize: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }
})

export interface IGroupItem {
    name:string, 
    userTotal:number, 
    userRound:string
}

const GroupItem = ({name, userTotal, userRound}: IGroupItem) => {
    return <View style={styles.container}>
        <View>
            <Text style={styles.primary}>{name}</Text>
            <Text style={styles.secondary}>{userTotal} People</Text>
            <Text style={styles.tertiary}>It's {userRound}'s Round!</Text>
        </View>

        <TouchableOpacity onPress={()=>console.log(name)}>
            <CaretRight color={Colors.black} size={28} />
        </TouchableOpacity>
    </View>
}

export default GroupItem;