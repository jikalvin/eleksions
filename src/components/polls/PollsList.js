import { Box, Text } from "@chakra-ui/react";
import Poll from "./Poll";

export default function PollsList({ polls }) {
  return (
    <Box px="4" align="center">
      {polls?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          No polls yet... Feeling a little lonely here.
        </Text>
      ) : (
        polls?.map((post) => <Poll key={post.id} post={post} />)
      )}
    </Box>
  );
}
