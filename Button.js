import { StyleSheet, Text, View, Button } from 'react-native';

const ButtonCustom = () => {
    return (
        <View
          style={{
            flexn: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "flex-end",
            flexDirection: "row",
            marginBottom: 100,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              width: 150,
              height: 60,
              marginRight: 10,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                lineHeight: 60,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </View>
        <View
          style={{
            backgroundColor: "blue",
            width: 150,
            height: 60,
            marginRight: 10,
            borderRadius: 15,
          }}
        >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            lineHeight: 60,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </View>
      </View>
      )
    }
export default ButtonCustom;