import { Stack } from "expo-router";

const RootLayout = () => { // Declare the RootLayout variable using the const keyword
    return <Stack>
        <Stack.Screen name="index" options={{title: 'Exercises'}}/>

    </Stack>

}
export default RootLayout;
