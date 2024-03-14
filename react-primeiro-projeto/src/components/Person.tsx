const getWeekday=(today: Date)=>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

type Props = {
    name: string; //obrigatorio
    avatar?: string;//obrigatorio
    roles: string[]; // array de strings
    address?: string; //obrigatorio opcional
}

export const Person = ({
    name, 
    avatar = 'https://static.vecteezy.com/ti/vetor-gratis/p1/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg', 
    roles
}: Props)=>{
// Variaveis posso criar variaveis // funcçoes e acessar no codigo ou criar const
    
    return(
        <div className="p-1" >
           <h1>{name}</h1>
           <img 
            src={avatar} 
            alt={name}
            className="w-40"
            />          

        <ul>
            <li>{roles[0]}</li>
            <li>{roles[1]}</li>
        
        </ul>
        
        </div>
    );

}