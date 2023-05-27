import {
    FormControl,
    FormLabel,
    Box,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react'

import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useState } from 'react';

import { useAddPoll } from 'hooks/polls';
import { useAuth } from 'hooks/auth';

export default function PollForm(){
    const [formValues, setFormValues] = useState({})

    const { addPoll, isLoading: addingPoll } = useAddPoll();
    const { user, isLoading: authLoading } = useAuth();

    function handleAddPoll(e) {
        e.preventDefault()

        addPoll({
            uid: user.id,
            name: formValues.title,
            question: formValues.question,
            options: [formValues.option1, formValues.option2]
        });
        setFormValues({})
        console.log(formValues)
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log(formValues)
    // }

    return(
        <Box>
            <form onSubmit={handleAddPoll}>
                <FormControl>
                    <FormLabel>Title Of Poll</FormLabel>
                    <Input 
                        type="text"
                        id="title"
                        value={formValues.title || ""}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Poll Question</FormLabel>
                    <Textarea 
                        id="question"
                        value={formValues.question || ""}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Option 1</FormLabel>
                    <Input 
                        type='text' 
                        id="option1"
                        value={formValues.option1}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Option 2</FormLabel>
                    <Input 
                        type='text'
                        id="option2"
                        value={formValues.option2}
                        onChange={handleChange}
                    />
                </FormControl>
                <Box py={2}>
                    <Button 
                        leftIcon={<AddIcon />} 
                        colorScheme='white'
                        color={"teal"}
                        variant='solid' 
                        borderRadius={"5%"}
                        border={"1px solid teal"}
                    ></Button>
                </Box>
                <Button 
                    rightIcon={<TelegramIcon/>}
                    colorScheme="teal"
                    variant='solid' 
                    borderRadius={"5%"}
                    border={"1px solid teal"}
                    w={"100%"}
                    type='submit'
                >
                    Add Poll
                </Button>
            </form>
        </Box>
    )
  }