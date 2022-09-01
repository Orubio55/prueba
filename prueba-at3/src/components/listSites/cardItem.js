import React from "react";
import { FormattedMessage } from "react-intl";
import { useDeleteSiteMutation } from "api/apiSlice";

const CardItem = React.memo(({ data, onEdit, onDetails }) => {
  const [deleteSite] = useDeleteSiteMutation();

  const onDelete = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const r = await deleteSite(data._id);
    console.log(r);
  };

  return (
    <div className="card_item">
      <div className="card_inner">
        {/* <img src={data.img} alt="product" /> */}
        <div className="real_name">{data.name}</div>
        <div className="role_name">
          <FormattedMessage id="nickname" defaultMessage="Public Path" />
          {data.publicPath}
        </div>
        <div>
          <span onClick={() => onDetails()}>View Details</span>
        </div>
        <div>
          <span onClick={() => onDelete()}>
            <i className="fas fa-trash" />
          </span>
          <span onClick={() => onEdit()}>
            <i className="fas fa-edit" />
          </span>
        </div>
      </div>
    </div>
  );
});

export default CardItem;
