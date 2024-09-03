import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../Components/BlogPostForm'
import { Context } from '../context/BlogContext'

export default function CreatScreen({ navigation }) {
  const { addBlogPost } = useContext(Context)
  return (
    <BlogPostForm
      isEditable={false}
      onsubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Home'));
      }} />
  )
}

const styles = StyleSheet.create({})

