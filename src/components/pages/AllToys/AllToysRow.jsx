import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({toy,handleModal}) => {
    const {_id,imageUrl,name,sellerName,sellerEmail,subcategory,price,rating,description,quantityAvailable}=toy || {}
    // console.log(toy);
    return (
        <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{sellerName}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {subcategory}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${price}
              </td>
              <td className="px-10 py-4 whitespace-nowrap">
                {quantityAvailable}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/details/${_id}`}><button onClick={handleModal} className="btn btn-outline">
                  View Details
                </button></Link>
              </td>
            </tr>
    );
};

export default AllToysRow;