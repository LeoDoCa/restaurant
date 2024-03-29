import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AirbnbRating, Image } from "@rneui/base";

export default function FlatListRestaurant(props) {
  const { image, title, rating, description, action } = props;
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.listRestaurants}>
        <Image source={{ uri: `${image}` }} style={styles.image} />
        <View style={styles.containerText}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>{title}</Text>
            <AirbnbRating
              count={5}
              isDisabled={true}
              defaultRating={rating}
              size={12}
              showRating={false}
              starContainerStyle={{ alignItems: "flex-end" }}
            />
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listRestaurants: {
    flex: 1,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 8,
  },
  image: {
    width: 124,
    height: 124,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
  },
  containerText: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
  },
});
