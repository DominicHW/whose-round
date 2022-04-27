import { StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Warning, Note, SignOut } from 'phosphor-react-native'

import { Text, View } from '../components/Themed';
import Tile from '../components/Tile';
import Colors from '../constants/Colors'

export const action = (Icon:any, title:string, onPress:()=>void) => {
  return <TouchableOpacity onPress={onPress} style={styles.action}>
    <Icon size={20} color={Colors.grey} style={{marginRight:5}} />
    <Text style={{color: Colors.grey}}>{title}</Text>
  </TouchableOpacity>

}

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <ScrollView style={{width:'100%', marginTop:7}}>
          <Tile key="profile-stats">
              <Text>Stats</Text>
          </Tile>

          <Tile key="user-details">
            <Text>Name and username</Text>
          </Tile>

          <Tile key="theme-switch">
            <Text>Theme Switcher</Text>
            <Switch></Switch>
          </Tile>

          <Tile key="actions">
            {action(Warning, 'Report a Bug', ()=>console.log('report'))}
            {action(Note, 'See Terms and Conditions', ()=>console.log('t&cs'))}
            <View style={styles.separatorLine} />
            {action(SignOut, 'Sign Out', ()=>console.log('sign out'))}
          </Tile>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    alignItems:'center',
    paddingVertical: 5
  },
  separatorLine: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    opacity: 0.2,
    marginVertical: 10
  }
});
