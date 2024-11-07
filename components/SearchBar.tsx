import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color={Colors.darkGrey} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.lightGrey}
          style={styles.searchText}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  searchBar: {
    backgroundColor: "#E4e4e4",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  searchText: {
    flex: 1,
    fontSize: 14,
    color: Colors.lightGrey,
  },
});
