package storage

import (
	"encoding/json"
	"os"
	"path/filepath"
	"simple-memo-app/models"
	"sync"
)

type Storage struct {
	filePath string
	mutex    sync.RWMutex
}

func NewStorage(filePath string) (*Storage, error) {
	// ディレクトリが存在しない場合は作成
	dir := filepath.Dir(filePath)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return nil, err
	}

	// ファイルが存在しない場合は作成
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		initialData := make(map[string]models.Memo)
		if err := saveJSON(filePath, initialData); err != nil {
			return nil, err
		}
	}

	return &Storage{
		filePath: filePath,
		mutex:    sync.RWMutex{},
	}, nil
}

func (s *Storage) LoadMemos() (map[string]models.Memo, error) {
	s.mutex.RLock()
	defer s.mutex.RUnlock()

	memos := make(map[string]models.Memo)
	data, err := os.ReadFile(s.filePath)
	if err != nil {
		return nil, err
	}

	if err := json.Unmarshal(data, &memos); err != nil {
		return nil, err
	}

	return memos, nil
}

func (s *Storage) SaveMemos(memos map[string]models.Memo) error {
	s.mutex.Lock()
	defer s.mutex.Unlock()

	return saveJSON(s.filePath, memos)
}

func saveJSON(filePath string, data interface{}) error {
	jsonData, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return err
	}

	return os.WriteFile(filePath, jsonData, 0644)
}
