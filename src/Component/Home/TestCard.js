import React from 'react'

const TestCard = ({name}) => {
    return (
        <div className='card p-5 w-96 bg-base-100 shadow-xl'>
            <div className="card-body">
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star bg-warning" />
                    <input type="radio" name="rating-2" class="mask mask-star bg-warning" checked />
                    <input type="radio" name="rating-2" class="mask mask-star bg-warning" checked />
                    <input type="radio" name="rating-2" class="mask mask-star bg-warning" checked />
                    <input type="radio" name="rating-2" class="mask mask-star bg-warning" checked />
                </div>
                <p className='text-neutral mt-2'>
                Hostingly is reliable and makes shipping changes easy. The support team was exceedingly helpful when we needed to migrate our blog. A+ on their support team.
                </p>
            </div>
            <div className='flex items-center mx-8'>
                <div class="avatar">
                    <div class="w-14  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt=''/>
                    </div>
                </div>
                <div className='ml-5'>
                    <h1 className='text-2xl'>
                        {name}</h1>
                </div>
            </div>
        </div>
    )
}

export default TestCard