import React from 'react'

const NavBar = ({ userStatus, handelUser }) => {
    return (
        <>
            <div className="flex gap-10 justify-between items-center p-2 text-white bg-gray-800">
                <div className="left">
                    <a href="" className="p-2">Home</a>
                    <a href="" className="p-2">About</a>
                    <a href="" className="p-2">FeedBack</a>
                </div>
                <div className="right">
                    {userStatus ?
                        <button onClick={()=>handelUser(!userStatus)} className="text-white bg-red-500 p-2">Admin</button>
                        :
                        <button onClick={()=>handelUser(!userStatus)} className="text-white bg-blue-500 p-2">Normal User</button>
                    }
                </div>
            </div>
        </>
    )
}

export default NavBar