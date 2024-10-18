import { StyleSheet } from 'react-native';

const inicioStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Fundo claro para contraste
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50, // Espaçamento entre o título e os botões
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // Fundo preto do botão
    paddingVertical: 50,
    paddingHorizontal: 70,
    borderRadius: 10,
    marginBottom: 20, // Espaçamento entre os botões
    width: '100%', // O botão ocupa a largura completa
  },
  buttonText: {
    color: '#fff', // Texto branco no botão
    fontSize: 18,
    textAlign: 'center', // Centraliza o texto
    marginLeft: 10,
  },
});

export default inicioStyles;
