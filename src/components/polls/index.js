import React from "react";
import { Box } from "@chakra-ui/react";

import PollForm from "./PollForm";

export default function Polls(){
    return(
        <Box 
            display={"flex"} 
            flexDirection={"column"} 
            alignItems={"center"}
            justifyContent={"center"}
            py={8}
        >
            <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' p={5}>
                <PollForm />
            </Box>
        </Box>
    )
}