import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../../../redux/features/orderService";
import { setFilteredOrders } from "../../../redux/features/filteredOrdersSlice";
import orderService from "../../../services/orderService";
function OrderSideBar() {
  useEffect(() => {
    orderService.getOrderByCustomerId(localStorageData.id)
      .then((response) => {
        console.log('Check data response:', response);
        dispatch(setOrders(response.saleInvoiceCustomer));
        dispatch(setFilteredOrders(response.saleInvoiceCustomer));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.order); // Assume order state is stored in the 'order' slice
  const filteredOrders = useSelector((state) => state.filteredOrders);
  console.log('check filteredOrders: ',filteredOrders);
  const localStorageData = JSON.parse(localStorage.getItem('customerData'));
  const handleFilterClick = (status) => {
    if (status === '*') {
      // If the user clicks "ALL", clear the filtered orders
      dispatch(setFilteredOrders(allOrders));
    } else {
      // Filter orders based on the provided status
      const filteredOrders = allOrders.filter((order) => order.status === status);
      dispatch(setFilteredOrders(filteredOrders));

    }
  };

  
  return (
    <>
      <div className="karl-projects-menu mb-100">
        <div className="text-center portfolio-menu">
          <button className="btn" onClick={() => handleFilterClick('*')}>
            ALL
          </button>
          <button className="btn" onClick={() => handleFilterClick('unconfimred')}>
            Unconfirmed
          </button>
          <button className="btn" onClick={() => handleFilterClick('confirmed')}>
            Confirmed
          </button>
          <button className="btn" onClick={() => handleFilterClick('delivering')}>
            Delivering
          </button>
          <button className="btn" onClick={() => handleFilterClick('received')}>
            Received
          </button>
          <button className="btn" onClick={() => handleFilterClick('cancelled')}>
            Cancelled
          </button>
          <button className="btn" onClick={() => handleFilterClick('successed')}>
          Successed
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderSideBar;