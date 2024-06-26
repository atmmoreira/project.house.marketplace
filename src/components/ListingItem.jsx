import { Link } from "react-router-dom";
import deleteIcon from "../assets/svg/deleteIcon.svg";
import editIcon from "../assets/svg/editIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className="categoryListing">
      <Link
        className="categoryListingLink"
        to={`/category/${listing.type}/${id}`}
      >
        <img
          className="categoryListingImg"
          src={listing.imgUrls[0]}
          alt={listing.name}
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / Month"}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : `1 Bedroom`}
            </p>
            <img src={bathtubIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : `1 Bathroom`}
            </p>
          </div>
        </div>
      </Link>
      {onDelete && (
        <img
          src={deleteIcon}
          alt="bed"
          className="removeIcon"
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
      {onEdit && (
        <img src={editIcon} className="editIcon" onClick={() => onEdit(id)} />
      )}
    </li>
  );
}

export default ListingItem;
