import { getCatsCategories_req } from "../../configApi/catsApi";
import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { categoryAction } from "../../redux/catSlice";
import { addTen } from "../../redux/addTenSlice";

export const Sidebar = () => {
    const [catsCategoryState, setCatsCategoryState] = useState([]);

    const dispatch = useDispatch();

    const catsCategories = async () => {
        const catsCategoriesData = await getCatsCategories_req();
        console.log(catsCategoriesData);
        setCatsCategoryState(catsCategoriesData);
    };
    useEffect(() => {
        catsCategories();
    }, []);
    const getCategoryName = (name) => {
        dispatch(categoryAction(name));
        dispatch(addTen(10));
        console.log('name', name);
    }
    return (
        <div className="sidebar-content">
            <div className="content">
                <h2>Categories</h2>

                <div className="categories-cont" >
                    {catsCategoryState?.map((item) => (
                        <Link to={`/${item.id}`} onClick={() => getCategoryName(item.name)}>
                            <div className="category-item">{item.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
