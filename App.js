import React from 'react';
import { 
  StyleSheet, 
  ScrollView, 
  Text, 
  View, 
  StatusBar, 
  TextInput, 
  Dimensions, 
  Platform 
} from 'react-native';
import ToDo from './ToDo';

const { width, height } = Dimensions.get("window");

export default class App extends React.Component{
  stat = {
    newToDo: ""
  }
  render() {
    const { newToDo } = this;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Have To Do</Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input} 
            placeholder="New To Do" 
            value={newToDo} 
            onChangeText={this._controlNewToDo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"I'm a potato!"}/>
          </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23657",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // 그림자의 경우, 안드로이드는 elevation ( 0 ~ 5 존재) 사용. ios는 shadow 사용.
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }
});