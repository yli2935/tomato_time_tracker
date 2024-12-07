/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-06 13:31:21
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-06 15:55:07
 * @FilePath: /tomato_time_tracker/screens/profile/index.tsx
 */
import { SafeAreaView } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
export default () => {
  return (
    <SafeAreaView>
      <HStack
        space="md"
        reversed={false}
      >
        <Text>Settings</Text>

 
      </HStack>
    </SafeAreaView>
  );
};
