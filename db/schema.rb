# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20210127205802) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string "name"
    t.boolean "is_archived", default: false
    t.string "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_boards_on_user_id"
  end

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.datetime "due_date"
    t.boolean "is_archived", default: false
    t.integer "todo_list_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cards_on_name"
    t.index ["todo_list_id"], name: "index_cards_on_todo_list_id"
  end

  create_table "checklists", force: :cascade do |t|
    t.string "name"
    t.integer "card_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_checklists_on_card_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.boolean "is_done"
    t.integer "checklist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["checklist_id"], name: "index_items_on_checklist_id"
    t.index ["name"], name: "index_items_on_name"
  end

  create_table "task_cards", force: :cascade do |t|
    t.string "name"
    t.datetime "due_date"
    t.boolean "is_archived", default: false
    t.integer "position_in_tasklist"
    t.integer "task_list_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_task_cards_on_name"
    t.index ["task_list_id"], name: "index_task_cards_on_task_list_id"
  end

  create_table "task_lists", force: :cascade do |t|
    t.string "name"
    t.boolean "is_archived", default: false
    t.integer "board_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "position_in_board"
    t.index ["board_id"], name: "index_task_lists_on_board_id"
    t.index ["name"], name: "index_task_lists_on_name"
  end

  create_table "todo_lists", force: :cascade do |t|
    t.string "name"
    t.integer "board_id"
    t.boolean "is_archived", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_todo_lists_on_board_id"
    t.index ["name"], name: "index_todo_lists_on_name"
  end

  create_table "user_boards", force: :cascade do |t|
    t.integer "user_id"
    t.integer "board_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_user_boards_on_board_id"
    t.index ["user_id"], name: "index_user_boards_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "googleId"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
