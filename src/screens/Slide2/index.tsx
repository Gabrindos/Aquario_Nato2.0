import { ImageBackground, Image, View, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from './style'
import React from "react"

export function Slide2() {
    const slide = require('../../assets/UltraPeixolas.png')
    const pxbo = require('../../assets/PeixeBranco.png')
    const pxto = require('../../assets/PeixePreto.png')
    return (
        <>
            <ImageBackground source={slide} style={styleContainer.container}>
                <View style={styles.view2}>
                    <View style={styles.centralizar}>
                        <Image source={pxbo} style={styles.img}></Image>
                        <Image source={pxto} style={styles.img2}></Image>
                    </View>
                    <View style={styles.centralizar2}>
                        <Text style={styles.text}>Aracu</Text>
                        <Text style={styles.text2}>Cascudo-Preto</Text>
                    </View>
                </View>

            </ImageBackground>
        </>


    )
}