import { useEffect, useRef, useState } from "react";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

import "../App.css";
import { useSelector } from "react-redux";

const clientKey = process.env.REACT_APP_CLIENT;
const customerKey = process.env.REACT_APP_CUSTOMER;

function Checkout() {
  const { isLoading, error, getDetailCurriculumList } = useSelector((state) => {
    return state;
  });

  const List = getDetailCurriculumList?.data?.data;
  console.log(List);

  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(List?.price);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        price
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    );
  }, [price]);

  function requestPayment() {
    const paymentWidget = paymentWidgetRef.current;
    try {
      paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: `${List?.title}`,
        customerName: "체리코딩",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1>주문서</h1>
      <div id="payment-widget" />
      <div>
        <input
          type="checkbox"
          onChange={(event) => {
            setPrice(event.target.checked ? price - 5_000 : price + 5_000);
          }}
        />
        <label>5,000원 할인 쿠폰 적용</label>
      </div>
      <button onClick={requestPayment}>결제하기</button>
    </div>
  );
}

export default Checkout;
