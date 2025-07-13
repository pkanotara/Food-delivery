import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!data.category) {
      toast.error("Please select a product category.");
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        setData({
          name: '',
          description: '',
          price: '',
          category: ''
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while adding the product.");
    }
  };

  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        {/* Upload Image */}
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id='image'
            hidden
            required
          />
        </div>

        {/* Product Name */}
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name='name'
            placeholder='Type Here'
            required
          />
        </div>

        {/* Product Description */}
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows='6'
            placeholder='Write content here'
            required
          ></textarea>
        </div>

        {/* Category & Price */}
        <div className="add-category-price">
          {/* Category */}
          <div className="add-category flex-col">
            <p>Product category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}
              required
            >
              <option value="">Select Category</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Cake">Cake</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Biryani">Biryani</option>
              <option value="Thali">Thali</option>
              <option value="Roll">Roll</option>
              <option value="Chicken">Chicken</option>
            </select>
          </div>

          {/* Price */}
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name='price'
              placeholder='₹200'
              required
              min="1"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
