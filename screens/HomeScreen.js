import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Touchable, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      {/* <Button title='EKLE' onPress={addBlogPost} /> */}
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })} >
              <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <EvilIcons name="trash" size={28} color="blue" />
                </TouchableOpacity>

              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopWidth: 2,
    borderColor: 'gray',
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",

  }
});
