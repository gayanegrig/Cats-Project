import React, { useState, useEffect } from "react";
import { getCatsAmount_req } from "../../configApi/catsApi";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTen } from "../../redux/addTenSlice";
import "./showCats.scss";


export const ShowCats = () => {
    const [catsState, setCatsState] = useState([]);
    const categoryId = useParams();
    const catsCategory = useSelector((state) => state.categoryAction.value);
    const catsNumber = useSelector((state) => state.addTen.value);

    const catsShow = async () => {
        const catsCatsData = await getCatsAmount_req(categoryId.id, catsNumber);
        console.log("catsCatsData", catsCatsData);
        setCatsState(catsCatsData);
    };
    useEffect(() => {
        catsShow();
    }, [categoryId, catsNumber]);



    const dispatch = useDispatch();

    const addTenMore = (number) => {
        dispatch(addTen(number + 10));
    }

    return (
        <div className="show-ten-item-cont">
            <h1>{catsCategory}</h1>
            {/* <h1>category</h1> */}

            <div className="ten-cats">
                {catsState.map((item) => (
                    <div className="picSize">
                        <img src={item.url} alt="#" />
                    </div>
                ))}
            </div>
            <button className="moreCatsBtn" onClick={() => addTenMore(catsNumber)} >Show More</button>
        </div>
    );
};
