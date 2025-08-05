import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

   const handleSignup = () => {
     if (name && email  &&  number  && password ) {
       setSubmitted(true);
     } else {
       alert('Please fill out all fields.');
     }
   };

   
   const handleClear = () => {
    setName('');
     setEmail('');
    setNumber('');
     setPassword('');
    setSubmitted(false);
  };


  return (

    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
        <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        
      />
      <TextInput
        placeholder="Phone Number"
        value={number}
        onChangeText={setNumber}
        style={styles.input}
        
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />


      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
       <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
       {submitted && (
           <View style={styles.output}>
             <Text style={styles.outputTitle}>Submitted Information:</Text>
             <Text>Full Name: {name}</Text>
               <Text>Email Address: {email}</Text>
              <Text>Phone Number: {number}</Text>
             <Text>Password: {password}</Text>
             
           
           </View>
         )}
       </View>
 )
   
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#2e86de',
    paddingVertical: 14,
    borderRadius: 8,
  },
   clearButton: {
    marginTop: 20,
    backgroundColor: '#ff5c5c', 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
    output: {
    backgroundColor: '#baa2a2ff',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});