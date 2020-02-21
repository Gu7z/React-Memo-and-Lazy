import React, { useState, useEffect, memo } from 'react';

function Test() {

    const [user, setUser] = useState({}) 

    useEffect(()=>{
        async function GetUser(){
            return await fetch('https://api.github.com/users/Gu7z').then(async (data)=>{ return await data.json() }) 
        }

        GetUser().then(data=>{
            setUser({
                nick: data.login,
                url: data.avatar_url
            })
        })
    },[])

    useEffect(()=>{console.log(user)}, [user])

    return (
    <div style={{display: 'flex', flexDirection: 'column'}} >
        <h1>{user.nick}</h1>
        <div>
            <img src={user.url} alt="" ></img>
        </div>
    </div>
    )
}

export default memo(Test)