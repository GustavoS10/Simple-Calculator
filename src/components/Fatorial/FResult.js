import React from "react";
import { View, Text} from "react-native";
import styles from './styles'

export default function Result(props){
    return(
        <View style={styles.resultado} >
            <Text style={styles.texto}>{props.fatMsg}</Text>
            <Text style={styles.texto}>{props.result}</Text>
        </View>
    );
}