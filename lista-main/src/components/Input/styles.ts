import { StyleSheet,Dimensions} from "react-native";
import { temas } from "../../global/themes";


export const style = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        borderColor:temas.Colors.lightGray,
        backgroundColor:temas.Colors.bgScreen,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    input:{
        height:'100%',
        width:'100%',
        borderRadius:40,
    },
    titleInput:{
        marginLeft:5,
        color:temas.Colors.gray,
        marginTop:20
    },
    Button:{
        width:'10%',
    },
    Icon:{
        width:'100%',
    }
    
})