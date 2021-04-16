import React, {Component} from 'react';
import {
  Text,
  Animated,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class SnackBar extends Component {
  constructor() {
    super();

    this.animatedValue = new Animated.Value(60);
    this.snackBarShown = false;
    this.snackBarHidden = true;
    this.state = {message: ''};
  }

  componentWillUnmount() {
    // clear the timer on component unmount
    clearTimeout(this.timerID);
  }

  /**
   * Responsible to show snackbar
   * @param {Message to be shown} message
   * @param {*} duration
   */
  show(message = 'Default Message...', duration = 3000) {
    if (this.snackBarShown === false) {
      this.setState({message: message});
      this.snackBarShown = true;

      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start(this.hide(duration));
    }
  }

  /**
   * Hide snackbar after a given time duration
   */
  hide = (duration) => {
    this.timerID = setTimeout(() => {
      if (this.snackBarHidden === true) {
        this.snackBarHidden = false;

        Animated.timing(this.animatedValue, {
          toValue: 60,
          duration: 350,
          useNativeDriver: true,
        }).start(() => {
          this.snackBarHidden = true;
          this.snackBarShown = false;

          clearTimeout(this.timerID);
        });
      }
    }, duration);
  };

  /**
   * Hide snackbar on close button click
   */
  closeSnackBar = () => {
    if (this.snackBarHidden === true) {
      this.snackBarHidden = false;

      clearTimeout(this.timerID);

      Animated.timing(this.animatedValue, {
        toValue: 60,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {
        this.snackBarShown = false;
        this.snackBarHidden = true;
      });
    }
  };

  render() {
    return (
      // SnackBar design

      <Animated.View
        style={[
          {
            transform: [{translateY: this.animatedValue}],
            backgroundColor: this.props.snackBarBackColor,
          },
          styles.animatedView,
        ]}>
        <Text
          numberOfLines={2}
          style={[styles.snackBarText, {color: this.props.snackBarTextColor}]}>
          {this.state.message}
        </Text>
        <TouchableOpacity
          onPress={this.closeSnackBar}
          activeOpacity={1}
          style={styles.closeBtn}>
          {this.props.closeText === undefined || this.props.closeText === '' ? (
            <Image
              source={require('../asset/close/close.png')}
              style={[styles.closeBtnImage, {tintColor: this.props.imageColor}]}
            />
          ) : (
            <Text
              style={{color: this.props.closeTextColor, fontWeight: 'bold'}}>
              {this.props.closeText.toUpperCase()}
            </Text>
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 55,
  },
  snackBarText: {
    color: 'white',
    fontSize: 15,
  },

  closeBtn: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    padding: 5,
  },

  closeBtnImage: {
    resizeMode: 'contain',
    width: 23,
    height: 23,
  },
});
