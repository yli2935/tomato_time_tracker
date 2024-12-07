/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-06 16:59:31
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-06 17:22:37
 * @FilePath: /tomato_time_tracker/screens/auth/index.tsx
 */
import React from "react";
import { SafeAreaView } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/providers/AuthProvider";
export default () => {
  const { user, setUser } = useAuth();
  React.useEffect(() => {
    setUser({ name: "Adam" });
  }, []);
  return (
    <SafeAreaView>
      <HStack
        space="md"
        reversed={false}
      >
        <Text>Auth</Text>
      </HStack>
    </SafeAreaView>
  );
};
