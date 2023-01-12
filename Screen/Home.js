import React from 'react';
import {View, Text} from 'react-native';
import {Button, Appbar, Avatar, Headline} from 'react-native-paper';

const Home = ({navigation}) => {
  return (
    <View className="flex-1">
      <Appbar style={{backgroundColor: '#fc6044'}}>
        <Appbar.Action
          icon="heart"
          color="white"
          onPress={() => console.log('heart')}
        />
        <Appbar.Content title="Home" titleStyle={{color: 'white'}} />
        <Appbar.Action
          icon="account-circle"
          color="white"
          onPress={() => console.log('Account')}
        />
        <Appbar.Action
          icon="camera"
          color="white"
          onPress={() => console.log('Camera')}
        />
      </Appbar>
      <View className="items-center">
        <Avatar.Image
          className="my-8"
          source={{
            uri: 'https://res.cloudinary.com/dvnlehz6m/image/upload/v1665501566/x4huvwpquiqp8dcezkaa.jpg',
          }}
          size={120}
        />
        <Button
          textColor="white"
          className="bg-[#fc6044] cursor-pointer w-3/4"
          onPress={() => navigation.navigate('Register')}>
          Click Here
        </Button>
        <View className="my-8 items-center w-3/4">
          <Headline className="font-bold ">About Me</Headline>
          <Text className="text-center my-3 font-semibold">
            Hey, I am Frontend web-developer. I build amazing websites.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
