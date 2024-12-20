import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MessageTest from "./components/MessageTest.tsx";

const App = () => {
    const [message, setMessage] = useState<string>(''); // 메시지를 저장할 상태

    useEffect(() => {
        fetch('http://localhost:8080/api/hello') // Spring Boot API 호출
            .then(response => response.text()) // JSON 형태로 파싱
            .then(data => setMessage(data)) // 상태에 메시지 저장
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <View style={styles.container}>
            <MessageTest message={message} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
});

export default App;