import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/styles';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params || { item: { title: 'รายละเอียด', desc: 'ไม่มีข้อมูล' } };

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.card, { flexDirection: 'column', alignItems: 'flex-start' }]}>
        <Ionicons name="information-circle-outline" size={40} color="#3498db" style={{ marginBottom: 12 }} />
        <Text style={globalStyles.cardTitle}>{item.title}</Text>
        <Text style={[globalStyles.cardDescription, { fontSize: 15, marginTop: 8, lineHeight: 22 }]}>
          {item.desc}
        </Text>
      </View>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.goBack()}>
        <Text style={globalStyles.buttonText}>⬅ ย้อนกลับ</Text>
      </TouchableOpacity>
    </View>
  );
}