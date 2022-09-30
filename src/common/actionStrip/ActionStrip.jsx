export const ActionStrip = (props) => {
  const ActionStripNormal = () => {
    return (
      <>
        <div className="action_strip_div">{props.title}</div>;
      </>
    );
  };
  const ActionStripIcon = () => {
    return (
      <div className="action_strip_div">
        <span>{props.icon}</span>
        {props.title}
      </div>
    );
  };
  return props.icon ? <ActionStripIcon /> : <ActionStripNormal />;
};
