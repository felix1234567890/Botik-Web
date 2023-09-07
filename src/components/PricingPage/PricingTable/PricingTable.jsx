import React, { Fragment } from "react";
import "./PricingTable.scss";
import { pricing } from "../../../json/data";

const PricingTable = () => {
  const uniqueCategories = Array.from(
    new Set(pricing.map((item) => item.category))
  );

  return (
    <div className="pricingtable">
      <div className="pricingtable_container">
        {uniqueCategories.map((category) => {
          const categoryItems = pricing.filter(
            (item) => item.category === category
          );
          return (
            <Fragment key={category}>
              <h1 className="h2Regular categoryTitle">{category}</h1>
              {categoryItems.map((titleItem) => {
                const title = titleItem.title;
                const titleItems = pricing.filter(
                  (item) => item.title === title
                );
                let minValue = Infinity;

                // minimum cost
                titleItems.forEach((itemGroup) => {
                  Object.keys(itemGroup).forEach((key) => {
                    if (key !== "category" && key !== "title") {
                      const mincost = parseFloat(itemGroup[key].cost);
                      if (!isNaN(mincost) && mincost < minValue) {
                        minValue = mincost;
                      }
                    }
                  });
                });

                return (
                  <div key={title} className="table_container">
                    <h4>{title}</h4>
                    <h5 className="h5Regular">
                      from € {minValue.toFixed(2).replace(".", ",")} / month
                    </h5>
                    <table>
                      <thead>
                        <tr>
                          <th>Portfolio Value</th>
                          <th>Subscription Cost per Month</th>
                        </tr>
                      </thead>
                      <tbody>
                        {titleItems.map((itemGroup, index) => (
                          <Fragment key={index}>
                            {Object.keys(itemGroup).map(
                              (key, keyIndex, keysArray) => {
                                if (key !== "category" && key !== "title") {
                                  const { name, valueMin, valueMax, cost } =
                                    itemGroup[key];
                                  const isLastItemInGroup =
                                    keyIndex === keysArray.length - 1;
                                  const formattedValueMin = parseFloat(valueMin)
                                    .toFixed(2)
                                    .replace(".", ",");
                                  const formattedValueMax = parseFloat(valueMax)
                                    .toFixed(2)
                                    .replace(".", ",");
                                  const formattedCost = parseFloat(cost)
                                    .toFixed(2)
                                    .replace(".", ",");

                                  return (
                                    <tr key={key}>
                                      <div className="firstrow">
                                        <td className="titleText">{name}</td>
                                        <td className="priceText">
                                          {isLastItemInGroup
                                            ? `${formattedValueMin} + €`
                                            : `${formattedValueMin} - ${formattedValueMax} €`}
                                        </td>
                                      </div>
                                      <td className="costText">{`€ ${formattedCost}`}</td>
                                    </tr>
                                  );
                                }
                                return null;
                              }
                            )}
                          </Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
        <div className="text_container">
          <h5 className="h5Regular">Comprehensum, quod cognitum non habet?</h5>
          <button type="button" className="btn-bg">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
