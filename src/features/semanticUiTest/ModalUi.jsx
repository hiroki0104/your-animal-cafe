import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

export default function ModalUi() {
  return (
    <>
      <Modal trigger={<Button>Show</Button>} content='Content' />
      {/* 💡 has identical effect to the previous one */}
      <Modal trigger={<Button>Show</Button>} content={{ content: 'Content' }} />
      {/* ⛔ example below has broken styling, see section about React Element */}
      <Modal trigger={<Button>Show</Button>} content={<div>Content</div>} />
    </>
  );
}
