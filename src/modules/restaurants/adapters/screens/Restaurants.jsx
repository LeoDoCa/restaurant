import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import FlatListRestaurant from "./components/FlatListRestaurant";
import Loading from "./../../../../kernel/components/Loading"

export default function Restaurants() {
  /*const restaurants = [
    {
      uid: 1,
      image: "https://images.otstatic.com/prod/25043214/1/huge.jpg",
      title: "El rincón del Bife",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis vel eligendi nulla? Similique, mollitia esse rem impedit, laboriosam nulla, magnam non beatae corrupti ut libero deleniti ab providentvoluptas iste.",
      rating: 4,
    },
    {
      uid: 2,
      image: "https://images.otstatic.com/prod1/42377505/2/huge.jpg",
      title: "Las mañanitas",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis vel eligendi nulla? Similique, mollitia esse rem impedit, laboriosam nulla, magnam non beatae corrupti ut libero deleniti ab providentvoluptas iste.",
      rating: 4,
    },
  ];*/

  const db = getFirestore();
  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "restaurants"));
        const arrayRestaurants = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          arrayRestaurants.push({
            uid: doc.id,
            title: doc.data()["title"],
            description: doc.data()["description"],
            rating: doc.data()["rating"],
            image: doc.data()["image"],
          });
          setRestaurants(arrayRestaurants);
        });
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => 
          <FlatListRestaurant
            image={item.image}
            title={item.title}
            description={item.description}
            rating={item.rating}
          />
        }
        keyExtractor={item => item.uid.toString()}
      />
      <Loading isShow={loading} title="Cargando restaurantes"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
