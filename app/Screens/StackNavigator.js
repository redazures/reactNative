import React, { useContext } from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import AuthContext from '../auth/AuthContext'
import AppText from '../components/AppText'
import Colors from '../config/Colors'


const Post =({navigation})=>(
  <SafeAreaView>
    <AppText onPress={()=>navigation.navigate("Content")}>Alvin Kamara will match whatever NFL fines him for cleats and donate it to charity after six-touchdown game **Click Here**</AppText>
  </SafeAreaView>
)

const Content =()=>(
  <SafeAreaView>
    <AppText>Alvin Kamara put his name into the NFL record books with his six-touchdown performance on Christmas, becoming just the fourth player to record six touchdowns in a game. Kamara accomplished the feat in style, wearing red and green cleats throughout the game -- a pair of shoes that will certainly find their way into the Pro Football Hall of Fame after his historic performance. </AppText>
  </SafeAreaView>
)

const Stack = createStackNavigator();

const StackNavigator =()=>{
  const context = useContext(AuthContext)
  console.log("Stack Navigator", context.user, context.setUser)
  return(
    <Stack.Navigator initialRouteName="Post">
      <Stack.Screen name="Post" component={Post}
        options={{ 
          headerRight:()=>(
            <Button
              onPress={()=>context.setUser(false)}
              title="Logout"
              color={Colors.secondary}
            />
          )
        }}
      />
      <Stack.Screen name="Content" component={Content}/>
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles  = StyleSheet.create({
    container:{
        backgroundColor:Colors.medium,
    },
})