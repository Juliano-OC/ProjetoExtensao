import { StyleSheet,Dimensions} from "react-native";
import { temas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        width:70,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:temas.Colors.red,
        borderRadius:4
    },
    caption:{
        color:'#FFF'
    }
})