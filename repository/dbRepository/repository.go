package dbRepository

import (
	"a21hc3NpZ25tZW50/model"
	"errors"

	"gorm.io/gorm"
)

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db: db}
}

func (r *Repository) AddUser(user model.User) (string, error) {
	return "", errors.New("not implemented") // TODO: replace this
}

func (r *Repository) GetUserByUsername(username string) (model.User, error) {
	return model.User{}, errors.New("not implemented") // TODO: replace this
}

// Photo methods
func (r *Repository) AddPhoto(photo model.Photo) (uint, error) {
	return 0, errors.New("not implemented") // TODO: replace this
}

func (r *Repository) GetPhotoByID(photoID uint) (model.Photo, error) {
	return model.Photo{}, errors.New("not implemented") // TODO: replace this
}

func (r *Repository) DeletePhoto(photoID uint) error {
	return errors.New("not implemented") // TODO: replace this
}

func (r *Repository) GetAllPhotosByUser(username string) ([]model.Photo, error) {
	return nil, errors.New("not implemented") // TODO: replace this
}
