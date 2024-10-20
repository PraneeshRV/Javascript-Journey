import pic from './assets/zhongli.webp';
function Card(){
    return(
        <div className="card">
            <img className='cardImage'src={pic} alt="Placeholder" />
            <h2 className='cardTitle'>Shadow</h2>
            <p className='cardText'>Programmer,Gamer</p>
            
        </div>
    );
}
export default Card