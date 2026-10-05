import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/styles';

export default function MediaScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>🎬 สื่อมัลติมีเดีย</Text>
      <Text style={globalStyles.subtitle}>ตัวอย่างภาพประกอบบทเรียน</Text>

      <View style={globalStyles.card}>
        <Ionicons name="image-outline" size={28} color="#e74c3c" />
        <View style={globalStyles.cardTextContainer}>
          <Text style={globalStyles.cardTitle}>รูปภาพประกอบ 1</Text>
          <Text style={globalStyles.cardDescription}>แสดงการโหลดรูปภาพจากลิงก์ภายนอก</Text>
        </View>
      </View>

      <Image
        source={{ uri: 'https://picsum.photos/400/200' }}
        style={globalStyles.image}
      />
    </ScrollView>
  );
}