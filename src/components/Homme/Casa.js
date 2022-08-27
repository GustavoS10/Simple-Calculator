import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
// import { CommonActions, useNavigation } from "@react-navigation/core"
import styles from './style'

export default function Casa({navigation}){

    // const navigation = useNavigation()

    // const openForm = ()=>{
    //     navigation.dispatch(CommonActions.navigate({
    //         name: 'Form'
    //     }))
    // }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Selecione qual calculadora você deseja!</Text>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Form')}>
                <Text style={styles.textButton}>IMC Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate("Idade")}>
                <Text style={styles.textButton}>Calculadora de idade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate("Fatorial")}>
                <Text style={styles.textButton}>Calculadora de fatorial</Text>
            </TouchableOpacity>
        </View>
    );
}