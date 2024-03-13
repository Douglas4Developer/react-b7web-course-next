const getWeekday=(today: Date)=>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

type Props = {
    name: string;
    avatar: string;
    roles: string[];


}

export const Person = (props: Props)=>{
// Variaveis posso criar variaveis // funcçoes e acessar no codigo ou criar const
    const data = {
        name: 'Elon Musk',
        avatar: 'https://s2-oglobo.glbimg.com/dtZTFBZPhkNzZQxcITGBiNbfzws=/0x0:4000x2668/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/0/r/6RAUoOSmSQDbSlBxnQoA/musk-sorrindo-bloomberg.jpg',
        roles: ['Ceo da Tesla', 'Ceo da SpaceX']
    }
    
    const today: Date = new Date();

    return(
        <>
           <h1 style={{color: 'red', fontSize: '30px'}}>Name: {data.name} - {getWeekday(today)}</h1>
           <img 
            src={data.avatar} 
            alt={data.name}
            className="w-40"
        />          

        <ul>
            <li>{data.roles[0]}</li>
            <li>{data.roles[1]}</li>
        
        </ul>
        
        </>
    );

}