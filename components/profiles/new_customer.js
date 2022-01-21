import React from 'react';
import { ProfileImage, DoubleRowDetail } from './profileimages';
import { default as Block } from 'assets/Block.svg';
import { default as Mail } from 'assets/Mail.svg';
import { default as Add } from 'assets/Add.svg';

export const NewCustomer = ({
  profile_image,
  first_name,
  last_name,
  customer_id,
}) => {
  return (
    <div className='d-flex align-items-center justify-content-between mb-3'>
      <div className='d-flex align-items-center'>
        <ProfileImage
          size='sm'
          src={profile_image}
          first_name={first_name}
          last_name={last_name}
        />
        <DoubleRowDetail
          detail1={`${first_name} ${last_name}`}
          detail2={`Customer ${customer_id}`}
        />
      </div>

      <div className=''>
        <button className='btn px-1'>
          <Block />
        </button>
        <button className='btn px-1'>
          <Mail />
        </button>
        <button className='btn px-1'>
          <Add />
        </button>
      </div>
    </div>
  );
};
