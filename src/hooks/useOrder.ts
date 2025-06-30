import { useState } from "react";
import type { MenuItemT, OrderItemT } from "../types";

const useOrder = () => {

    const [order, setOrder] = useState<OrderItemT[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItemT) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(updatedOrder)
        } else {
            const newItem: OrderItemT = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItemT['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)

    }

    return {
        order,
        tip,
        setTip,
        addItem, 
        removeItem,
        placeOrder
    };
};

export default useOrder;
