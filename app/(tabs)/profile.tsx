import { View, Text, Image, ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 p-4 bg-white">
      <View className="items-center">
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
        <Text className="text-xl font-bold mt-4">Ryan MFDR</Text>
        <Text className="text-gray-600">HR Manager</Text>
      </View>
      <View className="mt-6">
        <Text className="text-lg font-semibold">Tentang Saya</Text>
        <Text className="text-gray-700 mt-2">
          Saya seorang HR Manager yang bertanggung jawab atas manajemen
          karyawan.
        </Text>
      </View>
    </ScrollView>
  );
}
