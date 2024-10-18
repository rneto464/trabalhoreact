import { StyleSheet } from 'react-native';

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  // Centraliza o conteúdo do botão horizontalmente
  },
  button: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  // Centraliza os itens dentro do botão horizontalmente
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10, 
    width: '100%' 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',  // Centraliza o texto
    marginLeft: 10,
  },
  Text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',  
  },
  somText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 0, 
  },
  ajudaText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 0, 
  },
  icon: {
    
    width: 20,
    height: 20,  
    top: 13,   
    left: 10, 
    position: 'absolute', 
    
  },
});

export default menuStyles;
