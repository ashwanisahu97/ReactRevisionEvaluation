import React from "react";
export const Table = () => { 
    return (
        <>
            <table border="1">

                <tr>
                    <thead>
                        <th>id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        <td>"1"</td>
                        <td>India</td>
                        <td>Delhi</td>
                        <td>19000000</td>
                        <td>"Edit"</td>
                        <td>"Delete"</td>
                    </tbody>
                </tr>
            </table>
        </>
    )
}