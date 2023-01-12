import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, Checkbox, Headline, TextInput} from 'react-native-paper';

const Register = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View className="flex-1">
      <Headline className="my-5 text-center font-bold text-purple-800">
        Register
      </Headline>
      <TextInput placeholder="Enter Name" className="my-2 mx-10 bg-white" />
      <TextInput placeholder="Enter Email" className="my-2 mx-10 bg-white" />
      <TextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        className="my-2 mx-10 bg-white"
      />
      <View className="flex-row justify-start items-center ml-7 my-3">
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
        <Text>Please accept all terms & conditions</Text>
      </View>
      <Button
        className="bg-purple-800 mx-8 my-4 font-bold"
        textColor="white"
        onPress={() => console.log('Registered')}
        disabled={checked ? false : true}>
        Submit
      </Button>
    </View>
  );
};

export default Register;
