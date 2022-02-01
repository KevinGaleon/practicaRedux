import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useAppDispatch } from '../app/hooks';
import { increment,  decrement, incrementByAmount, decrementByAmount } from '../features/counter/counterSlice';

const ButtonRedux = () => {

    const dispatch = useAppDispatch();

  return (
    <>
        <TouchableOpacity 
        onPress={() => dispatch(increment())}
        style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            margin: 5
        }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => dispatch(decrement())}
        style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            margin: 5
        }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => dispatch(incrementByAmount(10))}
        style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            margin: 5
        }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Increment 10</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => dispatch(decrementByAmount(10))}
        style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            margin: 5
        }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Decrement 10</Text>
        </TouchableOpacity>
    </>
  )
};

export default ButtonRedux;