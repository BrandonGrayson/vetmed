import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000'}),
    endpoints: builder => ({
        getToken: builder.mutation({
            query: (userCredentials) => ({
                url: '/login',
                method: 'POST',
                body: userCredentials
            })
        }),
        getMedications: builder.query({
            query: (token) => ({
                url: '/medications',
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
        })
    })
})

export const { useGetTokenMutation, useGetMedicationsQuery } = apiSlice