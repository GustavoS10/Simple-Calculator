import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput} from "react-native";
import Result from "./Result";
import styles from './style'

export default function Casa(){
    
    // calculadora
    let data = new Date()
    let year  = data.getFullYear()

    const [ano, setAno]         = useState(null)
    const [idade, setIdade]     = useState(null)
    const [TButton, setTButton] = useState("Calcular")
    const [msg, setMsg]         = useState("")

    const validator = ()=>{
        if(ano != null){
            calcularIdade()
            setAno(null)
            setTButton("Calcular Novamente!")
            setMsg("Sua idade é: ")
            return
        }
        setAno(null)
        setIdade(null)
        setTButton("Calcular")
        setMsg("Digite seu ano")
    }
    const calcularIdade = ()=>{
        return setIdade( year - ano )
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.title}>Calculadora de idade!</Text>
                <Text style={styles.formLabel}>Ano</Text>

                <TextInput  style={styles.formInput} 
                onChangeText={setAno}
                value={ano}
                placeholder="Digite seu ano de nascimento! Ex: 2000" 
                keyboardType="numeric">
                </TextInput>

                <TouchableOpacity style={styles.button} onPress={validator}>
                    <Text style={styles.textButton}>{TButton}</Text>
                </TouchableOpacity>

            </View>
            <Result msgResult={msg} resultado={idade}/>
        </View>
    );
}