import React from 'react';
import { useQuery } from 'react-query';

const useTools = () => {
    const {
        data: tools,
        isLoading,
        refetch,
        error,
        
        
      } = useQuery("tools", () =>
        fetch(`http://localhost:5000/get-tools`).then((res) => res.json())
      );
    return [tools,isLoading,refetch, error]
};

export default useTools;