import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'


export default function ListingItems(listing, id) {
  return <li className="">
      <Link to={`/category/${listing.type}/${id}`}>
          {/* <img src={listing.imgUrls[0]} alt="" /> */}
          <Moment formNow>
              {listing.timestamp?.toDate().toString()}
          </Moment>
      </Link>
  </li>
}
