/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-06 13:31:21
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-06 14:23:33
 * @FilePath: /tomato_time_tracker/app/(tabs)/index.tsx
 */
import { StyleSheet, View, SafeAreaView } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack
        space="md"
        reversed={false}
      >
        <Box className="h-20 w-20 bg-primary-300" />
        <Box className="h-20 w-20 bg-primary-400" />
        <Box className="h-20 w-20 bg-primary-500" />
      </HStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
