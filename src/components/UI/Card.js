import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // 밖에서 className으로 받는 것들은 문자열로 추가됨

  return <div className={classes}>{props.children}</div>; //children은 예약어
}

export default Card;
