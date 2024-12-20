import {Text, View, StyleSheet} from "react-native";

interface MessageProps {
    message: string;
}

const MessageTest = ({ message } : MessageProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin : 20,
        padding : 10,
        backgroundColor: '#f8f9fa',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MessageTest;