import React from "react";

const History = () => {

  const cashHistory = [
    {id: 1, title: "Cash", value: "+500"},
    {id: 2, title: "Book", value: "-40"},
    {id: 3, title: "Camera", value: "-200"},
];
  return (
    <div>
      <div className="text-3xl">History</div>
      <hr className="mt-3 mb-3" />
      <div className="flex flex-col">
        {

            cashHistory.map(({id, title, value}) => (
                <div key={id} className="flex flex-row text-sm my-1">
            {title}: <span className="ml-2 font-light">{value}</span>
                </div>

        ))}
      </div>
    </div>
  );
};

export default History;
