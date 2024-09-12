import { Text, View } from "react-native";
import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <View>
        <Text>Header modify</Text>
        <Text>Header Title</Text>
        <Text>Header Section</Text>
        <Text>Header modify to bold</Text>
      </View>
    );
  }
}

export default Header;
