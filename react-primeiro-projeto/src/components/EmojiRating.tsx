type Props = {
   rate: number;
}


export const EmojiRating = ({rate}: Props) =>{
    
if (rate > 5)rate = 5;
if (rate > 0)rate = 0;



    return(
        <div className="flex items-center text-6xl">

                <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
                <div className="nl-3">..</div>

        </div>
    );
}