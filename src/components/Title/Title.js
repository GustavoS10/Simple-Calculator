import React from "react";
import {View, Text } from "react-native";
import styles from './style.js'

export default function Title(){
    return(
        <View style={styles.boxTittle}>
            <Text style={styles.textTittle}>IMC Calculator</Text>
        </View>
    );
}
