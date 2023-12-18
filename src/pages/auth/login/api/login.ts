import { BASE_URL } from "@/utils/constants";

export default async function login (email: string, password: string) {

    try{
    // Add logic here to look up the user from the credentials supplied
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
            email: email, 
            password: password
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
   
      const data = await response.json();
      if (!response.ok) {
        // Handle and display errors here
        // console.error(data); 
        throw new Error(data)// Log the error for debugging
      } else {
        // Authentication succeeded
        // Redirect or perform other actions as needed
        return data 
      }
    }catch(e){
        console.log(e)
    }

}