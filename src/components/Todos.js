import React from 'react';

const Todo = ({tudu}) => {
    return (
        <tr>
            <td>{ tudu.project }</td>
            <td>{ tudu.summary }</td>
            <td>{ tudu.created_at }</td>
            <td>{ tudu.updated_at }</td>
            <td>{ tudu.user }</td>
            <td>{ tudu.is_active }</td>
        </tr>
    );
}

const Todos = ({todos}) => {
  return (
    <table>
        <th>
            Project
        </th>
        <th>
            Summary
        </th>
        <th>
            Created_at
        </th>
        <th>
            Updated_at
        </th>
        <th>
            User
        </th>
        <th>
            Is_active
        </th>
        {todos.map((tudu) => <Todo tudu={tudu} />)}
    </table>
  );
}

export default Todos;
