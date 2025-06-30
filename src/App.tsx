import { MenuItem } from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotal from "./components/OrderTotal"
import { TipForm } from "./components/TipForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-blue-900 py-5">
        <h1 className="text-center text-4xl font-black text-white">Tip calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 ">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-2 mt-10">

            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {order.length ?
          <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotal
                tip={tip}
                order={order}
                placeOrder={placeOrder}
              />
          </>
          : <p>There are no items</p>}

          </div>
      </main>
    </>
  )
}

export default App
