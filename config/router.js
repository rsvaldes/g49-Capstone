import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../components/Home';
import PersonalityTest from '../components/PersonalityTest';

export const Root = StackNavigator ({
  Home:{
    screen: Home
  },
  PersonalityTest:{
    screen: PersonalityTest
  }
})
