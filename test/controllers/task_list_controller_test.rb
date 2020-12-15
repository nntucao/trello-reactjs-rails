require 'test_helper'

class TaskListControllerTest < ActionDispatch::IntegrationTest
  test 'should get name:string' do
    get task_list_name: string_url
    assert_response :success
  end
end
