import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to add task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask(''); // Clear input field after adding
    }
  };

  // Function to delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={task}
        onChangeText={setTask}
      />

      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.task} onPress={() => deleteTask(item.id)}>
            <Text style={styles.taskText}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  task: {
    backgroundColor: '#ff6347',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  taskText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
