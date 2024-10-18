import { StyleSheet } from 'react-native';

const rankingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 10, 
    marginTop: 23,
    alignSelf: 'flex-start',
    paddingLeft: 40,
  },
  rankingList: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 20,
    marginTop: 10,
    backgroundColor: '#d3d3d3', 
  },
  rankingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15, 
    paddingHorizontal: 10, 
    backgroundColor: '#000', 
    borderRadius: 10, 
    marginBottom: 15, 
    width: '100%', 
  },
  rankingText: {
    fontSize: 18,
    color: '#fff', 
    flex: 1, 
  },
  rankingScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
    padding: 5,
    marginLeft: 10, 
    backgroundColor: 'transparent', 
  },
});

export default rankingStyles;

