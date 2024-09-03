import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'

export default function ShowScreen({ route }) {
      const { state } = useContext(Context);
      console.log(route.params.id);
      const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
      return (
            <View style={styles.mainContainer}>
                  <View style={styles.container}>
                        <Text style={styles.label}>Başlık</Text>
                        <Text style={styles.content}>{blogPost.title}</Text>
                  </View>
                  <View style={styles.container}>
                        <Text style={styles.label}>İçerik</Text>
                        <Text style={styles.content}>{blogPost.content}</Text>
                  </View>

            </View>
      )
}

const styles = StyleSheet.create({
      mainContainer: {
            alignItems: "center",
            marginTop: 10,
      },
      container: {
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 28,
            alignItems: "center",
            width: '85%',

      },
      label: {
            fontSize: 25,
            fontWeight: "700",
            color: "green",
      },
      content: {
            fontSize: 19,
            fontWeight: "500",
            color: "red",
      },



})