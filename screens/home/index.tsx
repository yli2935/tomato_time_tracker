/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-06 13:31:21
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-06 16:59:56
 * @FilePath: /tomato_time_tracker/screens/home/index.tsx
 */
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";

const Home = () => {

  return (
    <SafeAreaView>
      <HStack space="md" reversed={false}>
        <Box className="bg-black" />
        <Box className="h-20 w-20 bg-primary-400" />
      </HStack>
    </SafeAreaView>
  );
};

export default () => <Home />;