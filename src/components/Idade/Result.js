import React from "react";
import { View, Text} from "react-native";
import styles from './style'

export default function Result(props){
    return(
        <View style={styles.resultado} >
            <Text style={styles.texto}>{props.msgResult} {props.resultado}</Text>
        </View>
    );
}