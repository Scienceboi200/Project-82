import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

renderItem = ({ item: posts }) => {
  return <PostCard posts={posts} />;
};

keyExtractor = (item, index) => index.toString();

export default class Feed extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appTitle}>
          <View>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem} />
        </View>
      </View >
    );
  }
}

const styles = StyleSheet. create( {
  container: {
  flex: 1,
  backgroundColor: "black"
  },
  appTitle: {
  flex: 0.07,
  flexDirection: "row"
  } ,
  appicon: {
  flex: 0.2,
  justifyContent: "center",
  alignItems: "center"
  },
  iconImage: {
  width: " 100%",
  height: "100% ",
  resizeMode: "contain",
  },
  appTitleTextContainer: {
  flex: 0.8,
  justifyContent: "center"
  },
  appTitleText: {
  color: "white",
  fontSize: RFValue(28),
  } ,
  cardContainer: {
  flex: 0.85
  }
  });