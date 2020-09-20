import localForage from "localforage";


class DatabaseService {

  constructor(dbName) {
    this.dbName = dbName;
  }

  async save(data) {
    const response = await localForage.setItem(this.dbName, data);
    console.log('asdasdasdasdasdas', await localForage.getItem(this.dbName))
    return response;
  }

  async load() {
    console.log('asd', this.dbName);
    const response = await localForage.getItem(this.dbName);
    return response;
  }

//   async post(path, payload) {
//     const response = await this.client
//       .post(path, payload);
//     return response.data;
//   }

//   async put(path, payload) {
//     const response = await this.client
//       .put(path, payload);
//     return response.data;
//   }

//   async patch(path, payload) {
//     const response = await this.client
//       .patch(path, payload);
//     return response.data;
//   }

//   async delete(path) {
//     const response = await this.client
//       .delete(path);
//     return response.data;
//   }
// }
}

export default DatabaseService;
