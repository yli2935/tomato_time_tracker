/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-06 13:31:21
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-06 15:26:12
 * @FilePath: /tomato_time_tracker/screens/statistics/index.tsx
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
        <Box className="mt-10" >
          <Text>Statistics</Text>
        </Box>

        
      </HStack>
    </SafeAreaView>
  );
};
