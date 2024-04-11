import { ImageBackground, Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";

import { styles } from './style'
import React from "react"

export function Slide1() {
    const slide = require('../../assets/UltraPeixolas.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.view2}>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        Login      ||      Registrar
                    </Text>
                </View>
                  
            </View>

        </ImageBackground>


    )
}