import React, { useState } from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { Country, State } from "country-state-city";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { saveShippingInfo } from '../../../redux/actions/cartActions';
function Shipping() {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (phone.length < 11 || phone.length > 11) {
            toast.error("Phone Number should be 11 digits Long");
            return;
        }
        const data = {
            address,
            city,
            country,
            state,
            zipCode,
            phone
        }
        dispatch(saveShippingInfo(data))
        navigate("/shippingPreview")
    };
    return (
        <div className='mx-auto'>
            <div className='flex items-center justify-center'>
                <h1 className=' text-xl md:text-2xl font-semibold my-5'> Fill-up shipping form </h1>
                <FaShippingFast className='text-2xl ml-1 text-orange-700' />
            </div>

            <form className="w-full max-w-md p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                        Address:
                    </label>
                    <input
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                        id="address"
                        type="text"
                        placeholder="1234 Main St"
                        required={true}
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2 " htmlFor="city">
                        City:
                    </label>
                    <input
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                        id="city"
                        type="text"
                        required={true}
                        placeholder="San Francisco"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2 focus:outline-none" htmlFor="zipCode">
                        Zip Code:
                    </label>
                    <input
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                        id="zipCode"
                        type="text"
                        required={true}
                        placeholder="94109"
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                        Phone:
                    </label>
                    <input
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                        id="phone"
                        required={true}
                        type="text"
                        placeholder="(555) 555-5555"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
                        Country:
                    </label>
                    <select
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                        id="country"
                        required={true}
                        placeholder="United States"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                    >
                        <option value="">Country</option>
                        {Country &&
                            Country?.getAllCountries()?.map((item) => (
                                <option key={item?.isoCode} value={item?.isoCode}>
                                    {item?.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2 focus:outline-none" htmlFor="country">
                        State:
                    </label>
                    <select
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                        id="state"
                        placeholder="san-francisco"
                        required={true}
                        value={state}
                        onChange={(event) => setState(event.target.value)}
                    >
                        <option value="">State</option>
                        {State &&
                            State.getStatesOfCountry(country).map((item) => (
                                <option key={item.isoCode} value={item.isoCode}>
                                    {item.name}
                                </option>
                            ))}
                    </select>
                </div>
                <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Shipping
