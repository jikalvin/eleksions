import { Box, Button, Center, Heading, HStack, Textarea } from "@chakra-ui/react";
import { usePolls } from "hooks/polls";
import { CircularProgress } from "@chakra-ui/react";
import PollsList from "./PollsList";

export default function AllPolls() {
    const { polls, isLoading } = usePolls();

    if (isLoading) return (
        <Center>
            <CircularProgress />
        </Center>
    );
  
    return (
      <>
        <PollsList posts={polls} />
      </>
    )
}
