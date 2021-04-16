/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Card from './shared/card';
import Snackbar from './shared/snackbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          title: 'Goal 1',
          amount: 'KES 12,000',
        },
        {
          title: 'Goal 2',
          amount: 'KES 12,000',
        },
      ],
    };
  }

  showSnackBar = () => {
    this.refs.mySnackBar.show('Hello World');
  };

  render() {
    const {reviews} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.MainContainer}>
          <View style={styles.SectionProfileHeader}>
            <Text style={styles.SectionProfileHeaderMainText}>
              Afternoon Jo
            </Text>
            <Text style={styles.SectionProfileHeaderSubText}>
              Here's the latest
            </Text>
            <Text style={styles.SectionProfileHeaderMainTextGreen}>
              KES 42,000
            </Text>
            <Text style={styles.SectionProfileHeaderSubText}>Total funds</Text>
          </View>
          <View style={styles.BodySummary}>
            <Text style={styles.bodySummaryTitle}>Your Goals</Text>
            <View>
              <FlatList
                data={reviews}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <Card>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 1}}>
                        <Text style={styles.bodySummaryTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.priceAmount}>{item.amount}</Text>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity style={styles.finishGoalButton}>
                          <Text style={styles.finishGoal}>Finish Goal</Text>
                        </TouchableOpacity>
                        <View style={styles.verticleLine} />
                        <Image
                          style={{height: 15, width: 15}}
                          source={require('./asset/arrow-forward/arrow-forward.png')}
                        />
                      </View>
                    </View>
                  </Card>
                )}
              />
            </View>
            <View style={styles.SubmitSection}>
              <TouchableOpacity
                style={styles.SubmitButton}
                onPress={this.showSnackBar}
                activeOpacity={0.8}>
                <Text style={styles.SubmitText}>Show Snackbar</Text>
              </TouchableOpacity>
            </View>
            <Snackbar
              ref="mySnackBar"
              closeText="close"
              snackBarBackColor="rgba(0,0,0,0.8)"
              closeTextColor="rgb(253,85,82)"
              snackBarTextColor="white"
              imageColor="rgb(253,85,82)"
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 4,
    backgroundColor: '#4A5C80',
  },
  SectionProfileHeader: {
    flex: 1,
    padding: 16,
  },
  SectionProfileHeaderMainText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 30,
    marginTop: 20,
    fontFamily: 'Roboto',
  },
  SectionProfileHeaderSubText: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 10,
  },
  SectionProfileHeaderMainTextGreen: {
    fontWeight: '600',
    fontSize: 32,
    fontFamily: 'Roboto',
    color: '#00E771',
  },

  BodySummary: {
    flex: 3,
    backgroundColor: '#F5FCFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  bodySummaryTitle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    color: '#4A5C80',
  },
  priceAmount: {
    fontWeight: '200',
    fontSize: 14,
    color: '#a9a9a9',
  },
  listEnd: {
    alignItems: 'flex-end',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
    marginLeft: 10,
    marginRight: 10,
  },

  SubmitSection: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  SubmitButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    elevation: 5,
    backgroundColor: '#00E771',
    borderRadius: 20,
    borderColor: '#fff',
  },
  SubmitText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
  },
  finishGoalButton: {
    backgroundColor: '#00E771',
    borderRadius: 3,
    padding: 5,
  },
  finishGoal: {
    color: '#fff',
    fontWeight: '100',
  },

  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   positio§n: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

export default App;
