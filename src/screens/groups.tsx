import { StyleSheet, ScrollView } from 'react-native';
import { Plus } from 'phosphor-react-native';
import NoGroupsImage from '../../assets/images/no-groups-available.svg'

import { View, Text } from '../components/Themed';
import Tile from '../components/Tile';
import GroupItem, { IGroupItem } from '../components/GroupItem';
import { RootTabScreenProps } from '../../types';
import Colors from '../constants/Colors'


const data:Array<IGroupItem> = [
  {
    name: '948 Marybill Road', 
    userTotal: 4, 
    userRound: 'Dominic'
  },
  {
    name: '948 Marybill Road', 
    userTotal: 4, 
    userRound: 'Dominic'
  },
  {
    name: '948 Marybill Road', 
    userTotal: 4, 
    userRound: 'Dominic'
  },
  {
    name: '948 Marybill Road', 
    userTotal: 4, 
    userRound: 'Dominic'
  },
  {
    name: '948 Marybill Road', 
    userTotal: 4, 
    userRound: 'Dominic'
  },
  {
    name: '948 Marybill Road', 
    userTotal: 4, 
    userRound: 'Dominic'
  },
  {
    name: '948 Marybill Road', 
    userTotal: 4, 
    userRound: 'Dominic'
  },
  {
    name: '948 Marybill Road', 
    userTotal: 4, 
    userRound: 'Dominic'
  }
];

const EmptyState = () => {
  return <View style={styles.container}>
    <NoGroupsImage height={175}/>
    <Text style={styles.title}>No Groups Available</Text>
    <View style={styles.subContainer}>
      <Text style={styles.subTitle}>Create or join a group using the </Text>
      <Plus color={Colors.grey} />
      <Text style={styles.subTitle}> button</Text>
    </View>
  </View>
}

export default function GroupsPage({ navigation }: RootTabScreenProps<'Groups'>) {
  return data.length === 0 ? <EmptyState /> : (
    <View style={styles.container}>
      <ScrollView style={{width:'100%', marginTop:7}}>
        {data.map((group:IGroupItem, index:number) => (
            <Tile key={`group-tiles-${index}-${group.name}`}>
              <GroupItem name={group.name} userTotal={group.userTotal} userRound={group.userRound} />
            </Tile>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 10
  },
  subTitle: {
    fontSize: 17,
    color: Colors.grey,
  }
});
