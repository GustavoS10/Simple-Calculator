import React from "react";
import { View, Text} from "react-native";
import styles from './style'

export default function Resultado(props){
    return(
        <View style={styles.resultado} >
            <Text style={styles.texto}>{props.msgResult}</Text>
            <Text style={styles.texto}>{props.result}</Text>
        </View>
    );
}