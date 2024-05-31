
function Button(props) {
  const { classBtn, textBtn } = props;

    return (
      <button className={classBtn}>
        {textBtn}
      </button>
    );
  }
  
  export default Button;

