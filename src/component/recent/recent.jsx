import React from 'react'

const Recent = () => {
    const list = [
        {
            route_to: 'Mumbai',
            route_from: 'Banglore',
            date: '14-03-2023',
            time: '02:43 PM'
        },
        {
            route_to: 'Mumbai',
            route_from: 'Goa',
            date: '16-02-2023',
            time: '02:43 PM'
        },
        {
            route_to: 'Guwhati',
            route_from: 'Tawang',
            date: '17-02-2022',
            time: '02:43 PM'
        },
        {
            route_to: 'Banglore',
            route_from: 'Ooty',
            date: '2-02-2023',
            time: '02:43 PM'
        },
    ];
    return (
        <div className='overflow-x-auto border border-solid border-red-500 flex flex-col w-72 h-2/5 p-4 fixed bottom-60 bg-transparent right-10 shadow-lg rounded-md font-serif'>
            <h1 className='text-2xl text-gray-400'>Recent Accidents</h1>
            <ul className='mt-4' >
                {
                    list.map((e) => {
                        return <li className= 'shadow-lg rounded-lg p-4 cursor-pointer'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Route From</span>
                                    <span className='text-gray-600'>{e.route_from}</span>
                                </div>
                                <div>
                                    <span className='font-bold'>Route To</span><br></br>
                                    <span className='text-gray-600'>{e.route_to}</span>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <span className='font-bold'>Date : </span><span className='text-gray-600'>{e.date}</span><br />
                                <span className='font-bold'>Time : </span> <span className='text-gray-600'>{e.time}</span>
                            </div>
                        </li>
                    })
                }
                <li className='shadow-md rounded-md p-4'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>Route From</span>
                            <span>Mumbai</span>
                        </div>
                        <div>
                            <span className='font-bold'>Route To</span><br></br>
                            <span>Goa</span>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <span className='font-bold'>Date : </span><span>14-03-2023</span><br />
                        <span className='font-bold'>Time : </span> <span>02:43 PM</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Recent