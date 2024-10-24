import bannerImg from '/banner_img.png'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className='mb-32 text-white bg-center  bg-cover bg-no-repeat text-center rounded-3xl'>
            <div className='bg-gradient-to-t from-[#150B2B] to-transparent  py-32  rounded-3xl'> 
                <h1 style={{lineHeight: '4rem'}} className='font-bold text-4xl lg:text-5xl mb-6  '>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className='mb-10 px-1 sm:px-0'>Whether you are a beginner or a seasoned chef, our expert-led sessions offer personalized guidance and inspiration. <br /> Join us for an enriching culinary experience that is sure to ignite your passion for food and cooking.</p>
                <div className='flex gap-5 justify-center'>
                    <button className=' text-black bg-primary-color rounded-full font-semibold text-xl px-8 py-5'>Explore Now</button>
                    <button className=' border-white border bg-transparent font-semibold text-xl text-white rounded-full px-8 py-5'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;