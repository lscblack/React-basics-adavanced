import React from 'react'

const MainBody = ({ userStatus, handelUser }) => {
    return (
        <>
            {userStatus ? <>
                <div>
                    <h1>Admin Movies</h1>
                    <div className="flex gap-1 w-5/6 mt-10 m-auto">
                        {/** Grid Movie Displays */}
                        {[0, 1, 2, 3].map((data) => (
                            <div key={data} className='bg-gray-800 p-2'>
                                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWW7oafUlfsv6aKKwTBGzwXZMERovmN5v_vg&s`} alt="Movie Poster" />

                                <h3 className='text-gray-200 text-sm'>be happy</h3>
                                <p className='text-gray-200 text-xs'>Indian</p>
                            </div>
                        ))}
                    </div>
                </div>
            </> :
                <div>
                    <h1>Normal USer Movies</h1>
                    <div className="flex gap-1 w-5/6 mt-10 m-auto">
                        {/** Grid Movie Displays */}
                        {[0, 1, 2, 3].map((data) => (
                            <div key={data} className='bg-gray-800 p-2'>
                                <img src={`https://musicart.xboxlive.com/7/91fb6d00-0000-0000-0000-000000000002/504/image.jpg?w=720`} alt="Movie Poster" />

                                <h3 className='text-gray-200 text-sm'>be happy</h3>
                                <p className='text-gray-200 text-xs'>Indian</p>
                            </div>
                        ))}
                    </div>
                </div>
            }

        </>
    )
}

export default MainBody
