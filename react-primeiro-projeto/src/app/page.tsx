import { Person } from "@/components/Person";
 

 
 const Page = () =>{
  return (

    <div>
      <h1 className="font-bold  text-2xl">Olá Mundo</h1> 
      <h3>Algum outro texto</h3>
        /* PROPS para dados dinamicos */
       <Person 
          name= "Elon Musk"
          avatar= "https://s2-oglobo.glbimg.com/dtZTFBZPhkNzZQxcITGBiNbfzws=/0x0:4000x2668/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/0/r/6RAUoOSmSQDbSlBxnQoA/musk-sorrindo-bloomberg.jpg"
          roles= {['Ceo da Tesla', 'Ceo da SpaceX']}
       />
       <Person 
          name= "LaraCROFT"
          avatar= "https://upload.wikimedia.org/wikipedia/pt/7/7a/Lara_Croft_Tomb_Raider.jpg"
          roles= {['Ceo da Ubisodt', 'Ceo da caça de tesouros']}
       />
       <Person
          name= "Douglas"
          roles={['Algo', 'Dono de algo']}       
       />

    </div>
  
   );
}




export default Page;