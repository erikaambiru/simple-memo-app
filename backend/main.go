package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"log"
	"net/http"
	"github.com/google/uuid"
	"path/filepath"
	"simple-memo-app/models"
	"simple-memo-app/storage"
)

var (
	store *storage.Storage
	memos map[string]models.Memo
)

func main() {
	// ストレージの初期化
	dataDir := "data"
	filePath := filepath.Join(dataDir, "memos.json")
	var err error
	store, err = storage.NewStorage(filePath)
	if err != nil {
		log.Fatalf("Failed to initialize storage: %v", err)
	}

	// メモの読み込み
	memos, err = store.LoadMemos()
	if err != nil {
		log.Fatalf("Failed to load memos: %v", err)
	}

	r := gin.Default()

	// CORSミドルウェアの設定
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// ルートエンドポイント
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Simple Memo API is running",
		})
	})

	// メモ関連のエンドポイント
	r.GET("/memos", func(c *gin.Context) {
		memoList := make([]models.Memo, 0, len(memos))
		for _, memo := range memos {
			memoList = append(memoList, memo)
		}
		c.JSON(http.StatusOK, memoList)
	})

	r.POST("/memos", func(c *gin.Context) {
		var memo models.Memo
		if err := c.ShouldBindJSON(&memo); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		memo.ID = uuid.New().String()
		memos[memo.ID] = memo
		if err := store.SaveMemos(memos); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save memo"})
			return
		}

		c.JSON(http.StatusCreated, memo)
	})

	r.PUT("/memos/:id", func(c *gin.Context) {
		id := c.Param("id")
		var updatedMemo models.Memo
		if err := c.ShouldBindJSON(&updatedMemo); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		if _, exists := memos[id]; !exists {
			c.JSON(http.StatusNotFound, gin.H{"error": "memo not found"})
			return
		}

		updatedMemo.ID = id
		memos[id] = updatedMemo
		if err := store.SaveMemos(memos); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save memo"})
			return
		}

		c.JSON(http.StatusOK, updatedMemo)
	})

	r.DELETE("/memos/:id", func(c *gin.Context) {
		id := c.Param("id")
		
		if _, exists := memos[id]; !exists {
			c.JSON(http.StatusNotFound, gin.H{"error": "memo not found"})
			return
		}

		delete(memos, id)
		if err := store.SaveMemos(memos); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save memo"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "memo deleted"})
	})

	r.Run(":8080") // サーバーを起動（8080ポートで待ち受け）
}
