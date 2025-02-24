import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
}

export default function EmployeeDetail() {
  const { id } = useLocalSearchParams();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data: Employee) => setEmployee(data));
  }, [id]);

  if (!employee) return <Text>Loading...</Text>;

  return (
    <View className="flex-1 p-4">
      <Text className="text-xl font-bold">{employee.name}</Text>
      <Text className="text-gray-600">Email: {employee.email}</Text>
      <Text className="text-gray-600">Phone: {employee.phone}</Text>
      <Text className="text-gray-600">
        Address: {employee.address.street}, {employee.address.city}
      </Text>
    </View>
  );
}
