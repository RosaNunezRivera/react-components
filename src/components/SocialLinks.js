
function SocialLinks({ links }) {
  return (
    <div className="div-social-media flexbox"> 
      {links.map((link, index) => (
        <a key={index} href={link.url}><i className={link.iconClass}></i></a>
      ))}
    </div>
  );
}

export default SocialLinks;

