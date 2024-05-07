import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";

function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [navigate, params.listingId]);

  if (loading) {
    <Spinner />;
  }

  return (
    <main>
      {/* Sliders */}
      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <img src={shareIcon} alt="" />
      </div>

      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}
      <div className="listingDetails">
        <p className="listingName">
          {listing && listing.name} - $
          {listing && listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : listing &&
              listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p className="listingLocation">{listing && listing.location}</p>
        <p className="listingType">
          {listing && listing.type === "rent" ? "Rent" : "Sale"}
        </p>
        {listing && (
          <p className="discountPrice">
            ${listing.regularPrice - listing.discountedPrice} discount
          </p>
        )}
        <ul className="listingDetailsList">
          <li>
            {listing && listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </li>
          <li>
            {listing && listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : "1 Bathdroom"}
          </li>
          <li>{listing && listing.parking ? "Parking Spot" : ""}</li>
          <li>{listing && listing.furnished ? "Furhnished" : ""}</li>
        </ul>

        <p className="listingLocationTitle">Location</p>
        {/* Maps */}

        {listing &&
          (auth.currentUser?.uid !== listing.useRef ? (
            <Link
              to={`/contact/${listing.useRef}?listingName=${listing.name}`}
              className="primaryButton"
            >
              Contact Lanlord
            </Link>
          ) : (
            ""
          ))}
      </div>
    </main>
  );
}

export default Listing;
