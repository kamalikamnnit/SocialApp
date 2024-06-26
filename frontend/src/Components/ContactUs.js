
// import React from "react";
// import "../App.css";
// import "tailwindcss/tailwind.css";
// import ContactImage from "../images/contact.jpg";

// export default function ContactUs() {
//   const sectionStyle = {
//     background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   return (
//     <div>
//       <section
//         className="text-gray-200 body-font relative"
//         style={sectionStyle}
//       >
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-12">
//             <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
//               Contact Us
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl text-white">
//               Reach out to us with your queries!
//             </p>
//           </div>
//           <div className="lg:w-1/2 md:w-2/3 mx-auto">
//             <div className="flex flex-wrap -m-2">
//               <div className="p-2 w-1/2">
//                 <div className="relative">
//                   <label
//                     htmlFor="name"
//                     className="leading-7 text-xl text-gray-200"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-600 focus:border-indigo-500 focus:bg-gray-900 text-base outline-none text-gray-200 py-2 px-4 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-1/2">
//                 <div className="relative">
//                   <label
//                     htmlFor="email"
//                     className="leading-7 text-xl text-gray-200"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-600 focus:border-indigo-500 focus:bg-gray-900 text-base outline-none text-gray-200 py-2 px-4 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full">
//                 <div className="relative">
//                   <label
//                     htmlFor="message"
//                     className="leading-7 text-xl text-gray-200"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-600 focus:border-indigo-500 focus:bg-gray-900 h-32 text-base outline-none text-gray-200 py-2 px-4 resize-none transition-colors duration-200 ease-in-out"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="p-2 w-full">
//                 <button className="flex mx-auto text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
import { Box, Container, Heading, Text, Flex, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Box bgGradient="linear(to-r, blue.600, blue.400)" py={10} id ="contact">
      <Container maxW="container.md" textAlign="center" color="white">
        <Heading as="h1" size="2xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="xl" mb={10}>
          Reach out to us with your queries!
        </Text>
        <Box bg="whiteAlpha.800" p={8} borderRadius="lg" boxShadow="lg">
          <Flex direction="column" gap={6}>
            <FormControl id="name" isRequired>
              <FormLabel style={{color:"black"}}>Name</FormLabel>
              <Input
                type="text"
                bg="gray.100"
                border="none"
                _placeholder={{ color: "gray.500" }}
                _focus={{ bg: "gray.200", outline: "none" }}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel style={{color:"black"}}>Email</FormLabel>
              <Input
                type="email"
                bg="gray.100"
                border="none"
                _placeholder={{ color: "gray.500" }}
                _focus={{ bg: "gray.200", outline: "none" }}
              />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel style={{color:"black"}}>Message</FormLabel>
              <Textarea style={{color:"black"}}
                bg="gray.100"
                border="none"
                _placeholder={{ color: "gray.500" }}
                _focus={{ bg: "gray.200", outline: "none" }}
                resize="none"
                h="150px"
              />
            </FormControl>
            <Button
              colorScheme="blue"
              bg="blue.700"
              _hover={{ bg: "blue.600" }}
              size="lg"
              mt={4}
            >
              Send
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
