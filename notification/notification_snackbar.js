import {
  Animated,
  Easing,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import tailwind from 'tailwind-rn';

/**
 * Notification ui component for in app nnotifications within the app,
 * @param {*} props data as message object to be displayed
 */
const NotificationSnackbar = (props) => {
  const [message, setMessage] = useState([]);
  const transition = useRef(new Animated.Value(0)).current;

  /**
   * Exit animation handler
   */
  const exitAnim = useRef(
    Animated.timing(transition, {
      duration: 500,
      easing: Easing.in(Easing.exp),
      toValue: -300,
      useNativeDriver: true,
    }),
  ).current;

  /**
   * Sets value to state object and handle enter animation.
   */
  useEffect(() => {
    transition.setValue(0);
    const enterAnim = Animated.spring(transition, {
      toValue: 30,
      useNativeDriver: true,
    });

    setMessage(props.message.message_one);
    enterAnim.start();

    const timeoutHandler = setTimeout(() => {
      exitAnim.start(() => {
        props.toggleSnackBar();
      });
    }, 10000);
    return () => {
      setMessage(null);
      clearTimeout(timeoutHandler);
    };
  }, [transition, exitAnim, props]);

  /**
   * Exit animation handler, fires exitAnim object and toggles snackbar within callback to ensure animation completes.
   */
  const exitAnimatedSnackbar = () => {
    exitAnim.start(() => {
      props.toggleSnackBar();
    });
  };

  return (
    <>
      {props.show ? (
        <Animated.View
          style={[
            tailwind('absolute top-0 z-10 inset-x-0 px-2 mt-2'),
            {
              transform: [{translateY: transition}],
            },
          ]}>
          <View style={tailwind('bg-pink-500 rounded-md justify-center')}>
            <View style={tailwind('py-3 px-4 flex-row')}>
              <TouchableOpacity
                style={tailwind('w-5/6')}
                onPress={() => {
                  setMessage(props.message.message_two);
                }}>
                <Text style={tailwind('text-white')}>{message}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tailwind('w-1/6')}
                onPress={() => {
                  exitAnimatedSnackbar();
                }}>
                <Image
                  style={tailwind('self-center justify-center ml-2')}
                  source={require('../asset/close/close.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      ) : (
        <View />
      )}
    </>
  );
};

export default NotificationSnackbar;
