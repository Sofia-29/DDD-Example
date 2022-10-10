import { ApiClient } from '../apiClient';
import React, { useState, useEffect } from 'react';

const apiClient = new ApiClient();

export const GetEmployees = () => {

    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        
        async function fetchData() {
            setIsLoading(true);
            const result = await apiClient.getEmployees();
            setEmployees(result);
            setIsLoading(false);
        }

        fetchData();
      }, []);


    return (
        <>
            { isLoading  ? (
            <p>Loading ...</p>
            ) : (
                <ul>
                    {
                        employees?.map(({id, full_name, email, nationality}) => (
                            <li key={id}> Id: { id }, full name: { full_name }, email: { email }, nationality: { nationality } </li>
                        ))
                    }
                </ul>
            )}
        </>
    )
}