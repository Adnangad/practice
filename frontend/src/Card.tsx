import imagez  from '../public/image.png'
function Card() {
    const image = imagez;
    return(
        <div>
        <img src={image} className='w-1/3 mb-5 h-88'></img>
        <p className='text-2xl'>Name: Adnan Obuya</p>
        <p className='text-2xl'>Age: 22</p>
        </div>
    );
}
export default Card