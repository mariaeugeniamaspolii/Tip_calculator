
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}


export const TipForm = ( {setTip, tip}: TipFormProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">Tip:</h3>


            <form action="">
                {tipOptions.map(tipOp =>
                    <div key={tipOp.id} className="flex gap-2">
                        <label htmlFor={tipOp.id}>{tipOp.label}</label>
                        <input 
                            type="radio" 
                            name="tip"
                            id={tipOp.id} 
                            value={tipOp.value}
                            onChange={ e => setTip(+e.target.value)}
                            checked={tipOp.value === tip}
                        />
                        
                        </div>
                )}
            </form>
        </div>
    )
}


