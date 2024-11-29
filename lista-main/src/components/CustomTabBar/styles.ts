import { StyleSheet,Dimensions} from "react-native";
import { temas } from "../../global/themes";

export const style =StyleSheet.create({
    TabArea:{
       height:80,
       backgroundColor:'#FFF',
       flexDirection:'row',
       borderTopColor: 'black',
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    TabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    TabItemButton:{
        width:70,
        height:70,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        top:-30,
        zIndex:9999,
        backgroundColor:temas.Colors.primary,
    },
    row:{
        width:'100%',
        paddingHorizontal:2
    }
})