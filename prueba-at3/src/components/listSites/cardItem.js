import React from "react";
import { FormattedMessage } from "react-intl";

const CardItem = React.memo(({ data }) => {
  console.log(data);
  return (
    <div className="card_item">
      <div className="card_inner">
        {/* <img src={data.img} alt="product" /> */}
        <div className="real_name">{data.name}</div>
        <div className="role_name">
          <FormattedMessage id="nickname" defaultMessage="Public Path" />
          {data.name}
        </div>
        <div className="overlay">
          <button type="submit" className="buy-btn" onClick={() => null}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
});

export default CardItem;
