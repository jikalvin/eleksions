import { Box, Text } from "@chakra-ui/react";
import Header from "components/post/Header";
import Actions from "components/post/Actions";

export default function Poll({ post }) {
  const { question } = post;

  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header post={post} />

        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize="md">
            {question}
          </Text>
        </Box>

        <Actions post={post} />
      </Box>
    </Box>
  );
}
