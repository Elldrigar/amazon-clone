import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './orders.scss';
import Order from './../order/Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      console.log();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      {user ? (
        <h1 className="orders__title">Your Orders:</h1>
      ) : (
        <h1 className="orders__title">You haven't done your shopping yet</h1>
      )}
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
