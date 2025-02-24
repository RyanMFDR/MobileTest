import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface Employee {
  id: number;
  name: string;
  email: string;
}

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: Employee[]) => setEmployees(data));
  }, []);

  return (
    <View className="flex-1 p-4">
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/detail/[id]",
                params: { id: item.id.toString() },
              })
            }
            className="p-4 border-b border-gray-300"
          >
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-gray-500">{item.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
