import { useEffect, useRef, useState } from "react";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import "../App.css";
import { useSelector } from "react-redux";
import styled from "styled-components";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

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

      <ButtonBox>

        <div className="tooltip">{List?.price}원..</div>
        <Button onClick={requestPayment}>결제하기</Button>
      </ButtonBox>

    </div>
  );
}

export default Checkout;

const ButtonBox = styled.div`
  position: relative;
  width: 50%;
  height: 3.125rem;
  margin: 0 auto;
  display: flex;;
  align-items: center;
  justify-content: center;

  .tooltip {
    position: absolute;
    left: 45%;
    bottom: 85%;
    width: 9.375rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    border-radius: 1.25rem;
    &::after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    color: #eee;
    border-color: #eee transparent transparent transparent;

    }
  };
`

const Button = styled.button`
    width: 9.375rem;
    height: 3.125rem;
    border: none;
    border-radius: 1.5625rem;
    background: #0064FF;
    color: #f2f4f6;
    font-weight: bold;
    box-shadow: 0 4px 16px rgba(0,79,255,0.3);
    font-size: 1rem;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: 0.5;
  
    &:focus{
    outline: none;
    .tooltip{
      display: block;
    }
   }

   &:hover {
    background-color: #1b64da;
    box-shadow: 0 2px 4px rgba(0,79,255,0.6);
    cursor: pointer;
    .tooltip {
      display: block;
    }


  &:hover > .tooltip{
    display: block;
  }
 
}
`;
