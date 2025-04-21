import React, { useState } from 'react';
import { Memo } from '../types/Memo';

interface MemoListProps {
  memos: Memo[];
  onDelete: (id: string) => void;
  onUpdate: (memo: Memo) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  const handleEdit = (memo: Memo) => {
    setEditingId(memo.id);
    setEditContent(memo.content);
  };

  const handleSave = (memo: Memo) => {
    onUpdate({
      ...memo,
      content: editContent
    });
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditContent('');
  };

  return (
    <div className="memo-list">
      {memos.map((memo) => (
        <div key={memo.id} className="memo-item">
          {editingId === memo.id ? (
            <div className="memo-edit">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <div className="memo-edit-buttons">
                <button onClick={() => handleSave(memo)}>保存</button>
                <button onClick={handleCancel}>キャンセル</button>
              </div>
            </div>
          ) : (
            <>
              <p>{memo.content}</p>
              <div className="memo-buttons">
                <button onClick={() => handleEdit(memo)}>編集</button>
                <button onClick={() => onDelete(memo.id)}>削除</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MemoList;
