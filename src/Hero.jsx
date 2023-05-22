import heroImg from './assets/hero.svg';
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className='hero-title'>
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Suscipit labore earum inventore et natus, minima quo unde culpa numquam dolores iste tempora,
                        at doloremque distinctio non repudiandae beatae similique mollitia
                    </p>
                </div>
            </div>
            <div className="img-container">
                <img src={heroImg}
                     alt="hero-img"
                />
            </div>
        </section>
    );
};

export default Hero;