import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm'; 

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
