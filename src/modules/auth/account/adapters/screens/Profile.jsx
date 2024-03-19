import { StyleSheet, Text, View } from 'react-native'
import { getAuth, updateProfile } from "firebase/auth";
import React,{useState, useEffect} from 'react'
import { signOut } from 'firebase/auth';
import { Button, Avatar } from '@rneui/base';
import PhotoProfile from '../components/PhotoProfile';
import ActionProfile from '../components/ActionProfile';


export default function Profile(props) {
  const { navigation } = props;
  const auth = getAuth();
  const  user = auth.currentUser;
  const [userProfile, setUserProfile] = useState(null);

  useEffect(()=>{
    if(user!==null){
      user.providerData.forEach((profile) => {
        setUserProfile(profile)
      });
    }
  }, [])

  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate('UserLogged');
    }).catch((error) => {
      console.error(error);
    });
  }

  /*
  const updateProfileData = () => {
    console.log("Actualizar perfil");
    updateProfile(auth.currentUser, {
      displayName: "Leonardo Daniel Dorantes Castañeda", photoURL: "https://firebasestorage.googleapis.com/v0/b/restauranteb-72a55.appspot.com/o/avatar%2FHxqDAeyToAgeG6RO2VKfusS2hLW2.jpg?alt=media&token=ac12617a-0ce1-4ae8-9e56-0cfa2e5ee5a5"
    }).then(() => {
      console.log("listo");
    }).catch((error) => {
      console.log("error");
    });

    <Button title="Actualizar perfil" onPress={updateProfileData} buttonStyle={{backgroundColor: "#88c040"}} containerStyle={styles.btnContainer} />
  }*/

  //Cuando userProfile cambie su valor (no sea nulo) va a renderizar el PhotoProfile
  return (
    <View style={styles.container}>
      {userProfile && (<PhotoProfile infoUser={userProfile}/>)}
      {userProfile && <ActionProfile infoUser={userProfile} />}
      <Button title="Cerrar sesión" onPress={logout} buttonStyle={styles.btnStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  btnStyle: {
    backgroundColor: "#ef524a"
  },
  text: {
    marginBottom: 12
  }, 
})