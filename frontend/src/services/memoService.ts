import { Memo } from '../types/Memo';

const API_URL = 'http://localhost:8080';

export const getMemos = async (): Promise<Memo[]> => {
  try {
    const response = await fetch(`${API_URL}/memos`);
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to fetch memos: ${errorData}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching memos:', error);
    throw error;
  }
};

export const createMemo = async (content: string): Promise<Memo> => {
  try {
    const response = await fetch(`${API_URL}/memos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to create memo: ${errorData}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error creating memo:', error);
    throw error;
  }
};

export const updateMemo = async (memo: Memo): Promise<Memo> => {
  try {
    const response = await fetch(`${API_URL}/memos/${memo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memo),
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to update memo: ${errorData}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error updating memo:', error);
    throw error;
  }
};

export const deleteMemo = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/memos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to delete memo: ${errorData}`);
    }
  } catch (error) {
    console.error('Error deleting memo:', error);
    throw error;
  }
};
