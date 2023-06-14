import React, {useEffect, useState} from 'react';
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
   const [isSuccess, setIsSuccess] = useState(false);
   const [invitedUsers, setInvitedUsers] = useState([]);
   const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
      const response = await PostService.getUsers()
      setUser(response.data.data)
   })

   useEffect(() => {
      fetchUsers()
   }, [])

   const search = (item) => {
      const searchString = (item?.first_name + item?.last_name).toLowerCase();
      const searchEmail = item.email.toLowerCase();
      const inputValueText = inputValue.toLowerCase();
      return searchString.includes(inputValueText) || searchEmail.includes(inputValueText)
   }

   const onChange = (e) => {
      setInputValue(e.target.value)
   }

   const resetAll  = () => {
      setIsSuccess(false)
      setInvitedUsers([])
   }
   const toggleInvitedUsers = (id) => {

      if (invitedUsers.includes(id)) {
         setInvitedUsers(prev => prev.filter((_id) => _id !== id))
      } else {
         setInvitedUsers(prev => [...prev, id])
      }

   }
   const checkingForInvitees = (id) => {
      return invitedUsers.includes(id)
   }
   return (

      <div className="users">
         {!isSuccess &&
            <div className="users__search">
               <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
               </svg>

               <input
                  value={inputValue}
                  onChange={onChange}
                  className="users__input"
                  type="text"
                  placeholder="Find users..."
               />
            </div>
         }

         <div className='users__wrapper'>
            {isSuccess
               ?
               <Success count={invitedUsers.length} resetAll={resetAll}/>
               :
               <div className="users__main">
                  <div className="users__content">
                     {usersError &&
                        <div className="users__skeleton-list">
                           <h1>Error : {usersError}</h1>
                        </div>
                     }
                     {isUsersLoading ?
                        <div className="users__skeleton-list">
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                        </div>
                        :
                        <ul className="users__users-list">
                           {users.length > 0 && users.filter(search).map(user => (
                              <User isInvited={checkingForInvitees(user.id)}
                                    toggleInvitedUsers={toggleInvitedUsers}
                                    key={user.id}
                                    {...user}/>
                           ))}
                        </ul>
                     }
                  </div>
                  <button
                     onClick={() => setIsSuccess(true)}
                     className={invitedUsers.length > 0
                        ?
                        'users__send-invite-btn'
                        :
                        'users__send-invite-btn disabled'}>
                     Send an invitation
                  </button>
               </div>
            }

         </div>
      </div>
   );
};
