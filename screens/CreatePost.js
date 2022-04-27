import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import QuizCard from './QuizCard'

let customFonts = {
  "Cabin-Regular": require("../assets/fonts/Cabin-Regular.ttf")
};

export default class Feed extends Component {

  render() {
      return (
        <QuizCard 
        image = {require("../assets/69883695.png")}
        title = "International Day of Yoga"
        start = "14th June 2022"
        end = "21st June 2022"
        description = "This quiz will interpret how much you know about Yoga and it's benefits"
        />
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  });
