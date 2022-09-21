import '../styles/About.scss'

const About = () => {
    return (
        <div className="about">
            <h2>Diego Higuera</h2>
            <p>Hello! Welcome to my expample of a clothe store, to develop this page, we use
                react, emphasizing in the use of redux, hope you like it.
            </p>
            <div className="about__img">
                <img src='/me.jpg' alt='me'></img>
            </div>
            <span>email: drhiguerag@unal.edu.co</span>
            <a href='https://github.com/diegohiguera9'>My GitHub Profile</a>
        </div>
    )
}

export default About;

