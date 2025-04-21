import React, { useState } from 'react';

interface MemoFormProps {
  onAdd: (content: string) => void;
}

const MemoForm: React.FC<MemoFormProps> = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAdd(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="memo-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="メモを入力してください..."
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default MemoForm;
