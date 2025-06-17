import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.price}₫</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:underline"
      >
        Xoá
      </button>
    </div>
  );
};

export default CartItem;
