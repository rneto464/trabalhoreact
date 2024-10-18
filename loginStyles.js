import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'flex-start',
    paddingLeft: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '50%',  
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonAlt: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '50%',  
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default loginStyles;
