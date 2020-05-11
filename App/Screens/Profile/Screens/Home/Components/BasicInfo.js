
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Alert, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import Colors from 'App/Theme/Colors';
import UserBehavior from 'App/Services/User';
// const image = { uri: "https://reactjs.org/logo-og.png" };
export default function BasicInfo() {

  const navigation = useNavigation();
  const user = useSelector(state => state.user.user);

  const _logout = () =>
    Alert.alert(
      "Shopping Me thông báo",
      "Bạn có chắc chắn muốn đăng xuất ?",
      [
        {
          text: "Huỷ bỏ",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Đồng ý", onPress: async () => {
            UserBehavior.logout();
            navigation.navigate("Home")
          }
          , style: "cancel"
        }
      ],
      { cancelable: true }
    )

  const Header = (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center' }}>
      <TouchableOpacity activeOpacity={0.8} style={{ elevation: 2, backgroundColor: 'white', paddingVertical: 4, paddingHorizontal: 8, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
        <Text style={{ color: Colors.redOrange, fontWeight: 'bold' }}>Bán Hàng <Icon name={'chevron-right'} size={14} /></Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', width: 90, justifyContent: 'space-between', color: 'white', marginHorizontal: 10 }}>
        <Icon style={{ color: 'white' }} name={'shopping-cart'} size={20} onPress={() => { alert("haha") }} />
        <Icon style={{ color: 'white' }} name={'settings'} size={20} />
        <Icon style={{ color: 'white' }} name={'log-out'} size={20} onPress={_logout} />
      </View>
    </View>
  )
  const Info = (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20, marginTop: 15 }}>
      <View
        style={{ backgroundColor: Colors.lynxWhite, marginRight: 20, height: 50, width: 50, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}
      >
        {
          user ? <Image source={require('App/Assets/Images/screens/man.png')} style={{ height: 50, aspectRatio: 1, borderRadius: 50, overflow: 'hidden' }} /> : <Icon name="user" size={24} color="grey" />
        }
      </View>
      <TouchableOpacity activeOpacity={0.8} style={{ marginRight: 20, }} onPress={() => navigation.navigate('Auth')}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.white }}>
          {user ? user.username : 'Đăng nhập/Đăng kí'}
        </Text>
        {user ?
          <View>
            <Text style={{ fontSize: 13, color: Colors.white }}>
              Khách Hàng Mới
                  </Text>
          </View>
          :
          <Text style={{ fontSize: 13, color: Colors.white }}>
            Bắt đầu trải nghiệm ứng dụng
              </Text>}
      </TouchableOpacity>
    </View>
  )

  const source_bg = user ? require('App/Assets/Images/screens/Bg/orange_gradient.png')
    : require('App/Assets/Images/screens/Bg/Btn/Rectangle.png')

  return <ScrollView
    style={{
      paddingBottom: 5
    }}
  >
    <View style={{
      backgroundColor: 'white',
    }}>
      <ImageBackground
        source={source_bg}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        }}>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 20,
            position: 'relative',
          }}
        >
          {Header}
          {Info}
        </View>
      </ImageBackground>
    </View>
  </ScrollView>
}