import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
import FResult from "./FResult";
import styles from './styles'

export default function Fatorial(){

    const [num, setNum]             = useState(null)
    const [msg, setmsg]             = useState("Preencha o número!")
    const [res, setRes]             = useState(null)
    const [TButton, setTButton]     = useState("Calcular")

    const calculaFat= ()=>{
        let number = num
        // for( fatorial = num; number > 1; number--  ){
            // fatorial = ( fatorial * number )
        // }
        for( let i = 1; i < num; i++){
            number*= i;
        }
        setRes( number )
        return 
    }
    const validator = ()=>{
        if( num >= 0 && num != null ){
            calculaFat()
            setNum(null)
            setmsg("Fatorial: ")
            setTButton("Calcular Novamente")
            return
        }
        else if(num < 0) {
            setmsg(`Número ${num} é menor que 0, impossivel calcular fatorial!`)
            setNum(null)
            setTButton("Calcular Novamente")
            return
        }
        setRes(null)
        setTButton("Calcular")
        setmsg("Digite o número para calcular")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Digite o número o qual deseja calcular o fatorial!</Text>
                <TextInput style={styles.formInput}
                onChangeText={setNum}
                value={num}
                placeholder="Digite um número Ex: 5" keyboardType="numeric"/>

                <TouchableOpacity style={styles.button} onPress={()=> validator()}>
                    <Text style={styles.textButton}>{TButton}</Text>
                </TouchableOpacity>
            </View>
            <FResult fatMsg={msg} result={res}/>
        </View>
    );
}