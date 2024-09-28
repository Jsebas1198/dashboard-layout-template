"use client";

import Header from "@/components/globals/Header";

const Expenses = () => {
  return (
    <div>
      {/* HEADER */}
      <div className="mb-5">
        <Header name="Gastos" />
        <p className="text-sm text-gray-500">
          Repesentación visual de los gastos en el tiempo.
        </p>
      </div>
    </div>
  );
};

export default Expenses;
