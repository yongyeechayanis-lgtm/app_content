import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const contentList = [
    { id: 1, title: 'บทเรียนที่ 1: React Native Basics', desc: 'เรียนรู้พื้นฐาน Component และ State', icon: 'book-outline' },
    { id: 2, title: 'บทเรียนที่ 2: React Navigation', desc: 'การใช้งาน Tab และ Stack Navigation', icon: 'compass-outline' },
    { id: 3, title: 'บทเรียนที่ 3: Style & UI Design', desc: 'การจัดการ Stylesheet และการออกแบบ UI', icon: 'color-palette-outline' },
  ];

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>📌 บทเรียนทั้งหมด</Text>
      <Text style={globalStyles.subtitle}>เลือกบทเรียนเพื่อดูรายละเอียด</Text>

      {contentList.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={globalStyles.card}
          onPress={() => navigation.navigate('DetailScreen', { item })}
        >
          <Ionicons name={item.icon} size={28} color="#3498db" />
          <View style={globalStyles.cardTextContainer}>
            <Text style={globalStyles.cardTitle}>{item.title}</Text>
            <Text style={globalStyles.cardDescription}>{item.desc}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}