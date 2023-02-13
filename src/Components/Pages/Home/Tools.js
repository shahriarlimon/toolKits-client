import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, getTools } from "../../../redux/actions/productActions";
import Loading from "../../Shared/Loading/Loading";
import Tool from "./Tool";

const Tools = () => {
  const { tools, loading, error } = useSelector((state) => state.tools);
  const dispatch = useDispatch()
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
    dispatch(getTools())
  }, [error, dispatch,])
  /* const reversedTools = [...tools].reverse(); */
  return (
    <div className="mt-16  md:px-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Our Latest Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {tools?.slice(0, 6).map((tool) => (
          <Tool tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
