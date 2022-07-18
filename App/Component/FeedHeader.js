import React, { useContext, useState } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppContext } from '../Context';
import { AppImages } from '../Theme/AppImages';
import CommonStyle from '../Theme/CommonStyle';
import { width } from '../Utils/Constant';

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 20,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    left: 0,
    width: width,
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



const FeedHeader = ({ item, animation }) => {
  const { appTheme } = useContext(AppContext);
  const [selected, setSelected] = useState(0)
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={[styles.footer, { marginTop: insets.top + 10, }, animation]}>
      <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => setSelected(0)}>
          <Text style={{ color: selected == 0 ? 'white' : "#999999", fontSize: 16, alignItems: 'center', fontWeight: 'bold' }}>Following</Text>
        </TouchableOpacity>
        <View style={{ width: .5, backgroundColor: "#999999", marginHorizontal: 10 }} />
        <TouchableOpacity onPress={() => setSelected(1)}>
          <Text style={{ color: selected == 1 ? 'white' : "#999999", fontSize: 16, alignItems: 'center', fontWeight: 'bold' }}>For You</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export { FeedHeader };
