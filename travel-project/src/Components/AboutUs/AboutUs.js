import styles from './AboutUs.module.css'

export const AboutUs = () => {



    return (
        <section id="contact" class="content-section">

<div id="contact-content">
    <div class="section-heading">
        <h1>About us<br/>Travel<em>BLOG</em></h1>
        <p>Here is some information about outselves.</p>
        
    </div>
    <div >
        <h2 className={styles.infoSectionH}>Welcome to our Travel Blog</h2>
        <div >
        <p className={styles.infoSectionP}>When we started this project we wanted to build a user-friendly Travel blog with educational purposes. Users can upload blogs with stories from their travels around the world. 
        They can post comments and recommend places visited by other users.</p>
        <p className={styles.infoSectionP}>We hope you have a great time sharing your exciting stories and reading some others from our registered users!</p>
        </div>

    </div>

    <div id="map">
        <h2 className={styles.infoSectionH}>Here is where to find us:</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.1870018717586!2d23.36759055150323!3d42.636195425507665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cb55668ae1%3A0x447f9dd693e57def!2sSoftware%20University!5e0!3m2!1sen!2sbg!4v1680891523118!5m2!1sen!2sbg" width="100%" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<div className={styles.addressCard}>
    
</div>

</div>
</div>
</section>
    )
}



