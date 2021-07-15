import React from 'react'
import PropTypes from 'prop-types';
import './search.scss';

import { BsSearch } from "react-icons/bs";

export const Search = ({placeholder, ...props}) => {
    return (
            <div>
                <form action="" className="search-form df">
                    <div className="search-container df">
                        <label htmlFor="" className="search-label df">
                            <div className="form-g search-icon df">
                                <BsSearch />
                            </div>
                            <div className="form-g search-input df">
                                <div className="input-container df">
                                    <input 
                                        type="text"
                                        className="input-search"
                                        placeholder={placeholder}
                                        {...props} 
                                    />
                                </div>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
    );
};

Search.PropTypes = {
    placeholder: PropTypes.string.isRequired
}

Search.defaultProps = {
    placeholder: "Search",
}
