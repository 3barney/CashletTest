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

import Card from './shared/card';
import NotificationSnackbar from './notification/notification_snackbar';
import {
  messages,
  goal_items,
  time,
  title_summary,
  currency,
  total_funds,
  your_goals,
  finish_goal,
} from './utils/strings_en';
import {
  header,
  subHeader,
  body,
  priceAmount,
  verticalLineDivider,
  baseButton,
  submitButton,
  rowDirections,
  iconSize,
  flexSize,
} from './utils/styles_holder';

/**
 * Main application view holder
 *
 * NOTE
 * Used a component struct to show familiriaty  with old react constructs the other NotificationSnackbar uses latest react constructs such as hooks
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      goals: goal_items,
      message: messages,
    };
  }

  // Toggle snackbar show/unshow by alternating state items: show state is used to show snackbar
  toggleSnackBar = (stateItem) => {
    this.setState({show: stateItem});
  };

  render() {
    const {message, goals, show} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.MainContainer}>
          <View style={styles.SectionProfileHeader}>
            <Text style={styles.SectionProfileHeaderMainText}>{time} Jo</Text>
            <Text style={styles.SectionProfileHeaderSubText}>
              {title_summary}
            </Text>
            <Text style={styles.SectionProfileHeaderMainTextGreen}>
              {currency} 42,000
            </Text>
            <Text style={styles.SectionProfileHeaderSubText}>
              {total_funds}
            </Text>
          </View>
          <View style={styles.BodySummary}>
            <Text style={styles.bodySummaryTitle}>{your_goals}</Text>
            <View>
              <FlatList
                data={goals}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <Card>
                    <View style={{...rowDirections}}>
                      <View style={{...flexSize}}>
                        <Text style={styles.bodySummaryTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.priceAmount}>{item.amount}</Text>
                      </View>

                      <View style={styles.finishGoalHolder}>
                        <TouchableOpacity style={styles.finishGoalButton}>
                          <Text style={styles.finishGoal}>{finish_goal}</Text>
                        </TouchableOpacity>
                        <View style={styles.verticleLine} />
                        <Image
                          style={{...iconSize}}
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
                onPress={() => {
                  this.toggleSnackBar(true);
                }}
                activeOpacity={0.8}>
                <Text style={styles.SubmitText}>Show Snackbar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <NotificationSnackbar
          show={show}
          message={message}
          toggleSnackBar={this.toggleSnackBar}
        />
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
    ...header,
    marginTop: 20,
  },

  SectionProfileHeaderSubText: {
    ...subHeader,
    marginBottom: 10,
  },

  SectionProfileHeaderMainTextGreen: {
    ...header,
    color: '#00E771',
  },

  BodySummary: {
    flex: 3,
    ...body,
  },
  bodySummaryTitle: {
    ...subHeader,
    fontWeight: '400',
    color: '#4A5C80',
  },
  priceAmount: {
    ...priceAmount,
  },
  listEnd: {
    alignItems: 'flex-end',
  },
  verticleLine: {
    ...verticalLineDivider,
  },

  SubmitSection: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  SubmitButton: {
    ...submitButton,
  },
  SubmitText: {
    ...subHeader,
    fontWeight: '400',
    textAlign: 'center',
  },
  finishGoalHolder: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  finishGoalButton: {
    ...baseButton,
  },
  finishGoal: {
    color: '#fff',
    fontWeight: '100',
  },
});

export default App;
