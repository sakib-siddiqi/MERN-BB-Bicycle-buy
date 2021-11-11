import React from "react";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";

const Payment = () => {
  return (
    <section>
      <DashTitle bg="#FF244240" text="dark">
        Payment
      </DashTitle>
      <DashBoardContent className="my-4 text-center">
        <h1 className="fw-md" style={{ color: "#00000030" }}>
          Coming soon . . .
        </h1>
      </DashBoardContent>
    </section>
  );
};

export default Payment;
