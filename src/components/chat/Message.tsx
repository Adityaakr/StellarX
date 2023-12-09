import { Box, Card, Text } from "@chakra-ui/react";

export type MessageType = {
    msg: string,
    from: string
}

interface MessageProps {
    message: MessageType,
    userConnected: string
}

export function Message({message,userConnected}:MessageProps) {
    let position = userConnected == message.from ? "right" : "left";
    let bg_color = userConnected == message.from ? "whiteAlpha.200" : "whiteAlpha.500";
    return (
        <>
            <Box ml='3' bg={bg_color} borderRadius="12" padding="4" margin="4" position="relative" >
                <Text fontWeight='bold' fontSize={12}>
                {message.from}
                </Text>
                <Text fontSize='sm'>{message.msg}</Text>
            </Box>
        <p></p>
        </>
    );
}
  