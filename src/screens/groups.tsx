import { StyleSheet, ScrollView } from 'react-native';

import GroupItem, { IGroupItem } from '../components/GroupItem';
import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';

import Tile from '../components/Tile';

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

export default function GroupsPage({ navigation }: RootTabScreenProps<'Groups'>) {
  return (
    <View style={styles.container}>
      <ScrollView style={{width:'100%', marginTop:7}}>
        {data.map((group:IGroupItem, index:number) => (
            <Tile key={`group-tiles-${index}-${group.name}`}>
              <GroupItem name={group.name} userTotal={group.userTotal} userRound={group.userRound} />
            </Tile>
        ))}
      </ScrollView>

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
  },
});
