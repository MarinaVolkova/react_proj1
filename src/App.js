import { ListProvider } from "./context/ListContext";
import { ChakraProvider } from '@chakra-ui/react';

//использовала композицию компонентов, потому что куча стилей тут меня бесит:) 
import Header from "./components/Header"; 
import List from "./components/List";
import Footer from "./components/Footer";

function App(){
    return(
        <>
        <ChakraProvider>
            <Header />
            <ListProvider>
                <List />
            </ListProvider>
           <Footer />
        </ChakraProvider>
        </>
    );
};

export default App;