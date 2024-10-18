import { StyleSheet } from 'react-native';

const campeonatosStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    marginTop: 10,
  },
  campeonatoItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  campeonatoName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  campeonatoDate: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});

export default campeonatosStyles;
