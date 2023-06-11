import React, {useEffect, useMemo, useState} from 'react';
import {Skeleton} from './Skeleton';
import User from "./User";
import './Users.scss';
import {Success} from "./Success";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/postService";

//  https://reqres.in/api/users

export const Users = () => {
   const [users, setUser] = useState({});
   const [inputValue, setInputValue] = useState('')

   const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
      const response = await PostService.getUsers()
      setUser(response.data.data)
   })


   useEffect(() => {
      fetchUsers()
   }, [])


   const onChange = (e) => {
      setInputValue(e.target.value)
      // filter
   }
   return (
      <div className="users">
         <div className="users__search">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
            </svg>
            <input
               value={inputValue}
               onChange={(e)=>onChange(e)}
               className="users__input"
               type="text"
               placeholder="Find users..."
            />
         </div>
         <div className="users__content">
            {usersError &&
               <div className="users__skeleton-list">
                  <h1>Error : {usersError}</h1>
               </div>
            }
            {isUsersLoading ? (
               <div className="users__skeleton-list">
                  <Skeleton/>
                  <Skeleton/>
                  <Skeleton/>
               </div>
            ) : (
               <ul className="users__users-list">
                  {users.length > 0 && users.map(user => (
                     <User key={user.id} {...user}/>
                  ))}
               </ul>
            )}

         </div>


         <button className="users__send-invite-btn">Send an invitation</button>
      </div>
   );
};
