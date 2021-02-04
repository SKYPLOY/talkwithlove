import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {useSelector} from "react-redux";


export default function FriendListScreen({navigation}){
    const usersOnline = useSelector(state => state.usersOnline);
    console.log("usersOnline",usersOnline);

    

    return(
        <View style={{ flex: 1 }}>
            <FlatList
                data={usersOnline}
                renderItem={({ item })=> {
                    console.log("item", item);
                    return (
                        <TouchableOpacity onPress={()=>
                        navigation.navigate("Chat",{
                            name:item.username,
                            userId: item.userId
                        }) }>
                            <View style={styles.itemContainerStyle}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: item.avatar }} />
                                <View style={styles.avatarNameView}>
                                    <Text style={{fontSize:20}}>{item.username}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item.userId}
            />       
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainerStyle:{flex: 1, flexDirection:"row" },
    avatar:{ width:100, height:100, borderRadius:50},
    avatarNameView:{ flex: 1,  justifyContent:"center",alignContent:"center" }
})