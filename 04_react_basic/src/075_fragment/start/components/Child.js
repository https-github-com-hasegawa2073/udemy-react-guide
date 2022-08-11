import './Child.css';
import { Fragment } from 'react';

const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        dolores officiis accusamus quis, tempora odit vel impedit nihil
        aspernatur autem qui mollitia quam quas atque vitae placeat fuga laborum
        temporibus.
      </p>
    </Fragment>
  );
};

export default Child;
