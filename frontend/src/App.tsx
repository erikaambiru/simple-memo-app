import React, { useState, useEffect } from 'react';
import MemoList from './components/MemoList';
import MemoForm from './components/MemoForm';
import { Memo } from './types/Memo';
import { getMemos, createMemo, updateMemo, deleteMemo } from './services/memoService';
import './App.css';

const App: React.FC = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    loadMemos();
  }, []);

  const loadMemos = async () => {
    try {
      const loadedMemos = await getMemos();
      setMemos(loadedMemos);
      setError('');
    } catch (err) {
      setError('メモの読み込みに失敗しました');
    }
  };

  const handleAddMemo = async (content: string) => {
    try {
      const newMemo = await createMemo(content);
      setMemos([newMemo, ...memos]);
      setError('');
    } catch (err) {
      setError('メモの作成に失敗しました');
    }
  };

  const handleUpdateMemo = async (updatedMemo: Memo) => {
    try {
      const result = await updateMemo(updatedMemo);
      setMemos(memos.map(memo => memo.id === result.id ? result : memo));
      setError('');
    } catch (err) {
      setError('メモの更新に失敗しました');
    }
  };

  const handleDeleteMemo = async (id: string) => {
    try {
      await deleteMemo(id);
      setMemos(memos.filter(memo => memo.id !== id));
      setError('');
    } catch (err) {
      setError('メモの削除に失敗しました');
    }
  };

  return (
    <div className="app">
      <h1>シンプルメモ帳</h1>
      {error && <div className="error-message">{error}</div>}
      <MemoForm onAdd={handleAddMemo} />
      <MemoList 
        memos={memos} 
        onDelete={handleDeleteMemo} 
        onUpdate={handleUpdateMemo}
      />
    </div>
  );
};

export default App;
