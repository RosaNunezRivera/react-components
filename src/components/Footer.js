import SocialLinks from './SocialLinks';
function Footer(props) {
    return (
        <footer>
            <div className="container flexbox">
               <SocialLinks links={props.links} />
            </div>  
        </footer>
    );
}
    
export default Footer;
  

