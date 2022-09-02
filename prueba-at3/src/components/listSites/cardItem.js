import React from "react";
import { FormattedMessage } from "react-intl";
import { useDeleteSiteMutation } from "api/apiSlice";
import { isNotError } from "utils/error";
import { toast } from "react-toastify";

const CardItem = React.memo(({ data, onEdit, onDetails }) => {
  const [deleteSite] = useDeleteSiteMutation();

  const onDelete = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const r = await deleteSite(data._id);
    if (isNotError(r)) {
      toast.success("Delete successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="card_item">
      <div className="card_inner">
        {/* <img src={data.img} alt="product" /> */}
        <div className="name">{data.name}</div>
        <div className="path">
          <FormattedMessage id="publicPath" defaultMessage="Public Path" />
          {data.publicPath}
        </div>
        <div className="actions">
          <span onClick={() => onDetails()}>
            <FormattedMessage id="viewDetails" defaultMessage="View Details" />
          </span>
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
    </div>
  );
});

export default CardItem;
