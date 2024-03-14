import { Card } from "@/components/Card";
import { Person } from "@/components/Person";
 

 
 const Page = () =>{
  return (

    <div>
      <h1 className="font-bold  text-2xl">Olá Mundo</h1> 
      <h3>Algum outro texto</h3>
        /* PROPS para dados dinamicos */

        <Card
            phrase ="Alguma frase top"
            author="Douglas COACH"
        />
   

    </div>
  
   );
}




export default Page;