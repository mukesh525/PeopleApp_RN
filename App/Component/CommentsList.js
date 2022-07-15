import React, { useContext } from 'react';
import {
    View,
    Animated,
    FlatList,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { AppContext } from '../Context';
import { width } from '../Utils/Constant';
import ReadMore from '@fawazahmed/react-native-read-more';
import { AutoScrollFlatList } from "react-native-autoscroll-flatlist";

const styles = StyleSheet.create({
    footer: {
        paddingHorizontal: 20,
        position: 'absolute',
        zIndex: 1000,
        bottom: 0,
        left: 0,
        width: width - 60,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
    },
    userName: {
        fontSize: 16,
        marginHorizontal: 8,
        fontWeight: '600',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    userDetail: {
        marginBottom: 5,
    },
    postDetail: {
        flexDirection: 'row',
        marginLeft: 8,
    },
    avatar: {
        height: 34,
        width: 34,
        borderRadius: 17,
        marginRight: 10,
        alignSelf: 'flex-start'
    },
});


const comment = ({ item }) => (
    <View style={styles.row}>
        <Image
            source={{
                uri: item.picUrl,
            }}
            style={[
                styles.avatar
            ]}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.user}</Text>
            <ReadMore
                numberOfLines={2}
                style={{ color: 'white', marginTop: 5 }}
                seeMoreStyle={{ color: 'white', fontWeight: 'bold' }}
                seeLessStyle={{ color: 'white', fontWeight: 'bold' }}>
                {
                    item.comment}
            </ReadMore>
        </View>
    </View>
);

const Comments = ({ comments }) => {
    return (
        <AutoScrollFlatList
            ref={this.myRef}
            threshold={10}
            style={{ marginTop: 10, flex: 1, maxHeight: 200, overflow: "hidden" }}
            data={comments}
            renderItem={comment}
            keyExtractor={item => item.id}
        />
    );
};

export { Comments };