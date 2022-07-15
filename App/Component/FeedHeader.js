import React, { useContext } from 'react';
import {
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppContext } from '../Context';
import { AppImages } from '../Theme/AppImages';
import CommonStyle from '../Theme/CommonStyle';
import { width } from '../Utils/Constant';
import { FollowButton } from './AppButton';
import { Comments } from './CommentsList'
import ReadMore from '@fawazahmed/react-native-read-more';
import { TextInput } from 'react-native-gesture-handler';

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
  const insets = useSafeAreaInsets();
  const { row, avatar, userDetail, userName, postDetail } = styles;
  const {
    user: { name, isFollowing },
    comments,
  } = item;

  const onUserProfile = () => {
    // Navigate to user Profile
  };

  const onFollow = () => {
    // Here Perform Follow Unfollow
  };

  return (

    <Animated.View
      style={[
        styles.footer,
        {
          marginTop: insets.top + 10,


        },
        animation,
      ]}>


      <View style={{ backgroundColor: 'grey', height: 80 }}>
      </View>




    </Animated.View>
  );
};

export { FeedHeader };
