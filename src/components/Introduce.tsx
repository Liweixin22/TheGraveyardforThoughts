import React from 'react';
import { Typography } from 'antd';
import './Introduce.less'

const { Title, Paragraph } = Typography;

const Introduce = () => {
  return (
    <div className='container'>
      <Title level={1} className="header">🪦The Graveyard for Thoughts!</Title>
      <blockquote className="fancy-quote">
        April is the cruellest month, breeding<br />
        Lilacs out of the dead land, mixing<br />
        Memory and desire, stirring<br />
        Dull roots with spring rain.
      </blockquote>
      
      <Paragraph>
        Hi folks, welcome to the graveyard for thoughts.<br />
        This is a place where I bury my thoughts, ideas, and mindsets that I have learned from books, podcasts, and other sources.<br />
        Maybe no one else will read this,<br />
        but maybe someday you will pass by the graveyard<br />
        and find something useful for you.<br />
        And maybe, in the cruellest April, the lilacs will bloom out of that dead land.<br />
      </Paragraph>
    </div>
  );
};

export default Introduce;
