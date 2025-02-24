import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function EditPegawai() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    //data pegawai berdasarkan ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNama(data.name);
        setEmail(data.email);
      });
  }, [id]);

  const handleUpdate = async () => {
    if (!nama || !email) {
      Alert.alert("Error", "Semua field harus diisi!");
      return;
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: nama, email: email }),
        }
      );

      if (response.ok) {
        Alert.alert("Sukses", "Data pegawai berhasil diperbarui!");
        router.push("/(tabs)");
      } else {
        Alert.alert("Gagal", "Terjadi kesalahan saat mengupdate pegawai.");
      }
    } catch (error) {
      Alert.alert("Error", "Gagal menghubungi server.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Pegawai</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Pegawai"
        value={nama}
        onChangeText={setNama}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update Pegawai</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F9FAFB" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#3B82F6",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});
