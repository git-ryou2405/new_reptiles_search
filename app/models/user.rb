class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :reptiles, dependent: :destroy
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  mount_uploaders :shop_images, ImageUploader
  mount_uploader :shop_img1, ImageUploader
  mount_uploader :shop_img2, ImageUploader
  mount_uploader :shop_img3, ImageUploader
  serialize :shop_images, JSON
  
  # validates :shop_name, presence: true
  validates :search_map, presence: true, if: Proc.new { |user| user.shop_name.present? || user.address.present? }
  
  def self.find_for_oauth(auth)
    Rails.application.config.another_logger.debug("[d] user.rb")
    
    user = User.where(uid: auth.uid, provider: auth.provider).first

    unless user
      user = User.create(
        provider: auth.provider,
        uid:      auth.uid,
        name:     auth.info.name,
        email:    auth.info.email,
        image:    auth.info.image,
        token:    auth.credentials.token,
        password: Devise.friendly_token[0, 20]
      )
    end

    user
  end

  private

  def self.dummy_email(auth)
    "#{auth.uid}-#{auth.provider}@example.com"
  end
end
