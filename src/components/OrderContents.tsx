import { formatCurrency } from "../helpers"
import type { MenuItemT, OrderItemT } from "../types"

type OrderContentsProps = {
    order: OrderItemT[]
    removeItem: (id: MenuItemT['id']) => void
}

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="text-4xl font-black">Expenses</h2>

            <div className="space-y-3 mt-10">
                {order.map(item => (
                    <div key={item.id} className=" justify-between flex bg-gray-200 p-3 rounded items-center">
                        <div>
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black">Quantity: {item.quantity} - {formatCurrency(item.quantity * item.price)}</p>
                        </div>
                        <button className="bg-red-600 text-white h-6 w-6 rounded-full"
                            onClick={() => removeItem(item.id)}
                        >X</button>
                    </div>
                ))
                }

            </div>
        </div>
    )
}

export default OrderContents