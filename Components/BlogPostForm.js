import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function BlogPostForm({ onsubmit, initialValues, isEditable }) {
    const [title, setTitle] = useState(initialValues ? initialValues.title : '');
    const [content, setContent] = useState(initialValues ? initialValues.content : '');

    // Log props for debugging
    console.log("Props received: ", { onsubmit, initialValues, isEditable });

    return (
        <View style={styles.main}>
            <Text style={styles.label}>Başlığı Giriniz</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>İçeriği Giriniz</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <TouchableOpacity
                style={styles.buttonmain}
                onPress={() => {
                    console.log("Button pressed. Title:", title, "Content:", content);
                    onsubmit(title, content);
                }}
            >
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>
                        {isEditable ? 'Güncelle' : 'Kaydet'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
    },
    label: {
        fontSize: 20,
        marginLeft: 10,
    },
    input: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 20,
        padding: 5,
        fontSize: 18,
        marginBottom: 20,
    },
    buttonmain: {
        padding: 30,
    },
    buttonView: {
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});
