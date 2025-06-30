import { useMemo } from "react"
import type { OrderItemT } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItemT[]
    tip: number
    placeOrder: () => void
}


const OrderTotal = ({ order, tip, placeOrder }: OrderTotalProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0),
        [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])   
    const totalAmount =  useMemo(() => subtotalAmount + tipAmount, [tip, order])
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-gray-700">Totals and tip:</h2>
                <p>Subtotal: <span className="font-black text-gray-800">{formatCurrency(subtotalAmount)}</span></p>
                <p>Tips: <span className="font-black text-gray-800">{formatCurrency(tipAmount)}</span></p>
                <p className="text-2xl">Total: <span className="font-black">{formatCurrency(totalAmount)}</span></p>
            </div>

            <button 
                className="w-full bg-gray-700 disabled:opacity-20 p-3 uppercase text-white font-bold mt-10"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Save order
            </button>
        </>
    )
}

export default OrderTotal