import React from 'react';
import { FaTrashAlt,FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyToysRow = ({toy,handleDelete}) => {
    const {_id,imageUrl,name,sellerName,sellerEmail,subcategory,price,rating,description,quantityAvailable}=toy || {}
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {name}
        </td>
        <td>
           {sellerName}
        </td>
        <td>
            {sellerEmail}
        </td>
        <td>
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {subcategory}
            </span>
        </td>
        <td>
            ${price}
        </td>
        <td className='pl-10'>
            {quantityAvailable}
        </td>
        <td>
        <div className="btn-group btn-group-vertical">
            <Link to={`/update/${_id}`}><button  className="btn btn-outline mb-2"><FaEdit className='h-5 w-4'/></button></Link>
            <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline"><FaTrashAlt
            className='h-5 w-5'/></button>
            </div>
        </td>
      </tr>
    );
};

export default MyToysRow;