import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimension,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import DrawerNavigator from '../navigation/DrawerNavigator'



export default class QuizCard extends Component {

  render() {
    return (
        <View>
        <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Profile')}>
          <View style={styles.cardContainer}>
            <Image
              source={this.props.image}
              style={styles.storyImage}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.title}
              </Text>
              <Text style={styles.storyAuthorText}>
                Starts : {this.props.start}
              </Text>
              <Text style={styles.storyAuthorText}>
                Ends : {this.props.end}
              </Text>
              <Text style={styles.descriptionText}>
                {this.props.description}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <TouchableOpacity style={styles.likeButton}>
                <Ionicons name={"people"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>View Leaderboard</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(15),
    justifyContent: "center",
    textAlign:'center'
  },
  storyTitleText: {
    paddingTop:5,
    fontSize: RFValue(25),
    fontFamily: "",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Cabin-Regular",
    color: "white"
  },
  descriptionText: {
    fontFamily: "Cabin-Regular",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(250),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Cabin-Regular",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});
