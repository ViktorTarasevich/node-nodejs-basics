const repo = require('./repository')
module.exports = async ({userId} ) => {
    const user = await repo.findById(userId)

    return `
    <div>
      <form method='POST'>
        <div>
          <div>
            <label id='username'>Username</label>
          </div>
          <input id='username' type='text' name='username' value="${user.username}" for='username'>
        </div>
        <div>
          <div>
            <label id='age'>age</label>
          </div>
          <input id='age' type='text' name='age'  value="${user.age}" for='age'>
        </div>
        <div>
          <div>
            <label id='hobbies'>hobbies</label>
          </div>
          <input id='hobbies' type='text' name='hobbies' value="${user.hobbies}" for='hobbies'>
        </div>
          <button>Update</button>
        </div>
      </form>
  </div>
  `
}
