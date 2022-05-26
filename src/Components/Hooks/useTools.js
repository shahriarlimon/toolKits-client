import React from 'react';
import { useQuery } from 'react-query';

const useTools = () => {
    const {
        data: tools,
        isLoading,
        refetch,
        error,
        
        
      } = useQuery("tools", () =>
        fetch(` https://enigmatic-bastion-29863.herokuapp.com/get-tools`).then((res) => res.json())
      );
    return [tools,isLoading,refetch, error]
};

export default useTools;