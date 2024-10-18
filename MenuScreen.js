import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import menuStyles from '../styles/menuStyles';
import Tabuleiro from '../components/Tabuleiro';

import VolumeIcon from '../../assets/volume.svg';
import LockIcon from '../../assets/lock2.svg';
import Mensage from '../../assets/msg.svg';
import Config from '../../assets/settings.svg';
import Sair from '../../assets/sairdaconta.svg';
import Ajuda from '../../assets/ayuda.svg';
import Notificações from '../../assets/sino.svg';

export default function MenuScreen() {
  
  const navigation = useNavigation();

  return (
    <View style={menuStyles.container}>
      
      <Tabuleiro />

      
      <TouchableOpacity
        style={menuStyles.button}
        onPress={() => navigation.navigate('Ranking')} 
      >
        <Ajuda style={menuStyles.icon} />
        <Text style={menuStyles.somText}>Ajuda</Text>
      </TouchableOpacity>

    
      <TouchableOpacity
        style={menuStyles.button}
        onPress={() => navigation.navigate('Ranking')} 
      >
        <LockIcon style={menuStyles.icon} />
        <Text style={menuStyles.Text}>Privacidade</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={menuStyles.button}
        onPress={() => navigation.navigate('Ranking')} 
      >
        <VolumeIcon style={menuStyles.icon} />
        <Text style={menuStyles.somText}>Som</Text>
      </TouchableOpacity>

   
      <TouchableOpacity
        style={menuStyles.button}
        onPress={() => navigation.navigate('Ranking')} 
      >
        <Mensage style={menuStyles.icon} />
        <Text style={menuStyles.Text}>Mensagens</Text>
      </TouchableOpacity>

  
      <TouchableOpacity
        style={menuStyles.button}
        onPress={() => navigation.navigate('Ranking')} 
      >
        <Notificações style={menuStyles.icon} />
        <Text style={menuStyles.Text}>Notificações</Text>
      </TouchableOpacity>

     
      <TouchableOpacity
        style={menuStyles.button}
        onPress={() => navigation.navigate('Ranking')} 
      >
        <Config style={menuStyles.icon} />
        <Text style={menuStyles.Text}>Configurações</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={menuStyles.button}
        onPress={() => navigation.navigate('Login')} 
      >
        <Sair style={menuStyles.icon} />
        <Text style={menuStyles.Text}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}
