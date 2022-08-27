import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
import Resultado from "../Resultado/Resultado";
import styles from './style'

export default function Form(){

    const [altura, setAltura] = useState(null)
    const [peso, setPeso]     = useState(null)
    const [msg, setmsg]       = useState("Preencha o peso e altura")
    const [imc, setimc]     = useState(null)
    const [TButton, setTButton]     = useState("Calcular")

    const calculaIMC= ()=>{
        return setimc((peso/(altura*altura)).toFixed(2) )
    }
    const validator = ()=>{
        if(peso != null && altura != null){
            calculaIMC()
            setAltura(null)
            setPeso(null)
            setmsg("Seu IMC e igual:")
            setTButton("Calcular Novamente")
            return
        }
        setimc(null)
        setTButton("Calcular")
        setmsg("Preencha o peso e altura")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.formInput}
                onChangeText={setAltura}
                value={altura}
                placeholder="Coloque sua altura Ex: 1.75" keyboardType="numeric"/>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.formInput} 
                onChangeText={setPeso}
                value={peso}
                placeholder="Coloque seu peso Ex: 75.5" keyboardType="numeric"/>
                <TouchableOpacity style={styles.button} onPress={()=> validator()}>
                    <Text style={styles.textButton}>{TButton}</Text>
                </TouchableOpacity>
            </View>
            <Resultado msgResult={msg} result={imc}/>
        </View>
    );
}
