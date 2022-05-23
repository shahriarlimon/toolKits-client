import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useTools from "../../Hooks/useTools";
import Loading from "../../Shared/Loading/Loading";
import Tool from "./Tool";

const Tools = () => {
 const [tools,isLoading] = useTools();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-16  md:px-12 px-6">
      <h1 className="text-3xl font-bold">Total tools:{tools?.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {tools.map((tool) => (
          <Tool tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
