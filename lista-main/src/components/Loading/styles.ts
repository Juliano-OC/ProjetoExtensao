import { StyleSheet,Dimensions} from "react-native";
import { temas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:9999,
        backgroundColor:temas.Colors.blackTransparent,
        alignItems:'center',
        justifyContent:'center'
    }
})