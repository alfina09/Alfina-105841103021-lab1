import { StyleSheet, Text, View, Image, Button } from "react-native";

const Image1 = () => {
    return (
        <>
        <Image source={require('./assets/flowers.png')}
        style = {{ 
            width: 300,
            height: 200,
            alignContent: "center",
            justifyContent: "center",
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            }}></Image>
        </>
    )
}

export default Image1;
