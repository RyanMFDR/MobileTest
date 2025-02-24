import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const handleGithubPress = () => {
    Linking.openURL("https://github.com/ryanmfdr");
  };

  return (
    <ScrollView style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/v2/D5603AQERIsv-9HZZNw/profile-displayphoto-shrink_400_400/B56ZP4i1lwHoAg-/0/1735041702689?e=1746057600&v=beta&t=svBHmZIsC9n6i6nuTOKLfIHd5QNiMAmwNHAc5IpIMwA",
          }}
          style={{ width: 150, height: 150, borderRadius: 75 }}
        />

        <Text style={styles.name}>Ryan Muhammad Firdaus</Text>
        <Text style={styles.role}>Mahasiswa Asik</Text>
      </View>

      {/*Tentang Saya*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tentang Saya</Text>
        <Text style={styles.sectionText}>
          Mahasiswa IT yang memiliki ketertarikan di bidang Data, Mobile
          Development, dan Human Resources. Berfokus pada pengembangan solusi
          inovatif dengan menggabungkan teknologi dan manajemen untuk
          menciptakan dampak positif
        </Text>
      </View>

      {/*Portofolio*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Portofolio</Text>

        {/*GitHub*/}
        <TouchableOpacity onPress={handleGithubPress} style={styles.githubLink}>
          <Ionicons name="logo-github" size={24} color="black" />
          <Text style={styles.githubText}>github.com/ryanmfdr</Text>
        </TouchableOpacity>

        {/*LinkedIn*/}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/ryanmfdr/")
          }
          style={styles.githubLink}
        >
          <Ionicons name="logo-linkedin" size={24} color="#0077B5" />
          <Text style={[styles.githubText, { color: "#0077B5" }]}>
            linkedin.com/in/ryanmfdr
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    backgroundColor: "#3B82F6",
    paddingVertical: 32,
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: "#FFFFFF",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 12,
  },
  role: {
    color: "#E5E7EB",
  },
  section: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  sectionText: {
    color: "#374151",
    fontSize: 14,
  },
  githubLink: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  githubText: {
    color: "#2563EB",
    textDecorationLine: "underline",
    marginLeft: 8,
  },
});
