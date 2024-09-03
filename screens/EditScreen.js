import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react'; 
import { Context } from '../context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

export default function EditScreen({ navigation, route }) {
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
    const id = route.params.id;

    // Debugging logs
    console.log("Route params ID:", route.params.id);
    console.log("BlogPost found:", blogPost);

    if (!blogPost) {
        return <Text>Post not found!</Text>;
    }

    return (
        <BlogPostForm
            isEditable={true}
            initialValues={{
                title: blogPost.title,
                content: blogPost.content
            }}
            onsubmit={(title, content) => {
                console.log("Submitting:", { title, content, id });
                editBlogPost(id, title, content, () => {
                    console.log("Navigating back");
                    navigation.pop();
                });
            }}
        />
    );
}

const styles = StyleSheet.create({});
 