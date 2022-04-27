import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { CaretRight } from 'phosphor-react-native';
import useColorScheme from '../hooks/useColorScheme';

const styles = StyleSheet.create({
    primary: {
        fontSize: 17
    },
    secondary:{
        fontSize: 13
    },
    tertiary:{
        fontSize: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    }
})

export interface IGroupItem {
    name:string, 
    userTotal:number, 
    userRound:string
}

const GroupItem = ({name, userTotal, userRound}: IGroupItem) => {
    const colorScheme = useColorScheme();

    return <View style={styles.container}>
        <View>
            <Text style={[styles.primary, { color: Colors[colorScheme].text }]}>{name}</Text>
            <Text style={[styles.secondary, { color: Colors[colorScheme].text }]}>{userTotal} People</Text>
            <Text style={[styles.tertiary, { color: Colors.grey, marginTop: 5 }]}>It's {userRound}'s Round!</Text>
        </View>

        <TouchableOpacity onPress={()=>console.log(name)}>
            <CaretRight color={Colors[colorScheme].text} size={28} />
        </TouchableOpacity>
    </View>
}

export default GroupItem;