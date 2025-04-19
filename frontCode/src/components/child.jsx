/* eslint-disable no-unused-vars */
import { data } from "../components/7";

const Child = () => {
  return (
    <div>
      <data.Consumer>
        {(theme) => {
          return <h1>Theame is {theme}</h1>;
        }}
      </data.Consumer>
    </div>
  );
};

export default Child;
